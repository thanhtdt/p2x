import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as fromReducer from "../reducers"
import { Store } from '@ngrx/store';
import { PageTitleService } from '../../../services/page-title/page-title.service';
import { ActivatedRoute } from '@angular/router';
import * as fromOverviewAction from "../actions/overview"
import * as fromSafeAction from "../actions/safe";
import { ISafeStatus } from '../../../models/ISafeStatus';
import { Observable } from 'rxjs/Observable';
import { IKiosk } from '../../../models/kiosk';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { IStatus } from '../../../models/Status';
import * as Rx from "rxjs";
import { MdSnackBar } from '@angular/material';

const queryKioskChanged = gql`
subscription kioskChanged($ic:String){
  kioskChanged(ic:$ic){
    _id
    IC
    Name
    IsOnline
    LatestStatus {
      KioskIC      
      createdAt
      SafeStatuss {
        No
        IsOpen
        IsOccupied
      }
    }
  }
}
`;

const qureyStatusAdded = gql`
subscription statusAdded($ic:String){
  statusAdded(ic:$ic){
    KioskIC
    createdAt
    SafeStatuss {
      No
      IsOpen
      IsOccupied
    }
  }
}
`;

@Component({
  selector: 'p2x-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {

  // context
  kid: string;
  no: number;

  // models
  safeStatus: ISafeStatus;
  isOnline: boolean;
  passcode: string;

  safeKiosk$ = this.store.select(fromReducer.getSafeKiosk);
  overviewKiosk$ = this.store.select(fromReducer.getOverviewKiosk);
  overviewStatus$ = this.store.select(fromReducer.getOverviewSafeStatus)
  isOpenSuccess$ = this.store.select(fromReducer.getOverviewIsOpenSuccess);

  kioskSub: Subscription;
  safeStatusSub: Subscription;
  routeSub: Subscription;
  kioskChanegedSub: Subscription;
  statushanegedSub: Subscription;
  isOpenSuccessSub: Subscription;


  constructor(private store: Store<fromReducer.State>,
    public _pageTitle: PageTitleService,
    private _route: ActivatedRoute,
    private apollo: Apollo,
    public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.routeSub = this._route.parent.parent.params.subscribe(params => {
      this.kid = params.kid;
      this.no = params.sid;

      this.store.dispatch(new fromSafeAction.Load(params.kid));

      this.kioskSub = Rx.Observable.merge(this.safeKiosk$, this.overviewKiosk$).subscribe(kiosk => {
        this.safeStatus = this.extractSafeStatus(params.sid, kiosk);
        if (kiosk) {
          this.isOnline = kiosk.IsOnline;
        }
      });

      this.safeStatusSub = this.overviewStatus$.subscribe(status => {
        if (status == null)
          return;

        this.safeStatus = status.SafeStatuss
          .filter(safeStatus => safeStatus.No == params.sid)[0];
      });

      this.kioskChanegedSub = this.apollo.subscribe({ query: queryKioskChanged, variables: { ic: params.kid } })
        .subscribe(({ kioskChanged }) => this.store.dispatch(new fromOverviewAction.KioskChanged(kioskChanged)));

      this.statushanegedSub = this.apollo.subscribe({ query: qureyStatusAdded, variables: { ic: params.kid } })
        .subscribe(({ statusAdded }) => this.store.dispatch(new fromOverviewAction.StatusChanged(<IStatus>statusAdded)));

      // skip initial value
      this.isOpenSuccessSub = this.isOpenSuccess$.skip(1).subscribe(isOpenSuccess => {
        if (isOpenSuccess != null) {
          this.snackBar.open(`Open safe ${isOpenSuccess ? 'success' : 'failure'}.`, undefined, {
            duration: 3000
          });
        }
      });

    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.kioskSub.unsubscribe();
    this.safeStatusSub.unsubscribe();
    this.kioskChanegedSub.unsubscribe();
    this.statushanegedSub.unsubscribe();
    this.isOpenSuccessSub.unsubscribe();
  }

  extractSafeStatus(idNo: number, kiosk: IKiosk): ISafeStatus {
    if (kiosk == null || kiosk.LatestStatus == null)
      return;
    return kiosk.LatestStatus.SafeStatuss.filter(value => value.No == idNo)[0];
  }

  openSafe(passcode: string): void {
    this.store.dispatch(new fromOverviewAction.OpenSafe({
      ic: this.kid,
      no: this.no,
      passcode: passcode
    }));
  }

}
