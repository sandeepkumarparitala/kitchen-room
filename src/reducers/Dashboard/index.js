import * as types from "./types";

export const initialState = {
  dashboardInitializing:false,
  details:null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DASHBOARD_INITIALIZING : {
      const { status } = action
      return {...state,dashboardInitializing:status}
    }
    case types.DASHBOARD_SET_DETAILS : {
      const { data } = action
      return {...state,details:{...data}}
    }
    default:
      return state;
  }
};
