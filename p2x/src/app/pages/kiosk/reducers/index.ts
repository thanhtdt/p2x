import { IStatus } from "../../../models/Status";
import * as fromAction from "../actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IKiosk } from "../../../models/kiosk";

export interface State {
    kiosk: IKiosk
};

export const initialState: State = {
    kiosk: {
        IC: "",
        IsOnline: false,
        Name: "",
        LatestStatus: undefined
    }
};

export function reducer(state: State = initialState, action: fromAction.Actions): State {
    switch (action.type) {
        case fromAction.LOAD_SUCCESS:
            return {
                ...state,
                kiosk: action.payload
            };
        case fromAction.ADDED_STATUS:
            return {
                ...state,
                kiosk: { ...state.kiosk, LatestStatus: action.payload }
            };
        case fromAction.CHANGED_KIOSK:
            return {
                ...state,
                kiosk: { ...state.kiosk, ...action.payload, LatestStatus: state.kiosk.LatestStatus }
            }
        default:
            return state;
    }
};

export const selectKioskState = createFeatureSelector<State>("kiosk");

export const getKiosk = createSelector(selectKioskState, (state: State) => state.kiosk);

export const getStatus = createSelector(selectKioskState, (state: State) => state.kiosk.LatestStatus);