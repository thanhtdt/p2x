import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SidenavComponent} from './sidenav/sidenav.component';

const routes: Routes = [
  {
    path: "", component: SidenavComponent, children: [
    {path: "", loadChildren: "app/pages/kiosk-list/kiosk-list.module#KioskListModule"},
    {path: "kiosk/:kid/:sid", loadChildren: "app/pages/safe/safe.module#SafeModule"},
    {path: "kiosk", loadChildren: "app/pages/kiosk/kiosk.module#KioskModule"}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidenavRoutingModule {
}
