import {combineReducers} from "redux";
import {types as T} from "../constants/types";


//import {WiseMessage} from "../components/UtilComp/wiseMessageContainer";


export const Kaseya = (state={}, action) => { //tslint:disable-line
  switch(action.type) {
  case T.INTEGRATIONS.KASEYA.VIEW
    || T.INTEGRATIONS.KASEYA.UPDATE
    || T.INTEGRATIONS.KASEYA.FETCHING
    || T.INTEGRATIONS.KASEYA.TRANSMITTING :
    //returning the same for all so using same case..
    return Object.assign({}, state, action.payload);
  default:
    return state;
  }
};
export const WiseMessages = (state=[], action) => {//tslint:disable-line
  switch(action.type) {
  case T.WISE_MESSAGE.ADD :
    return [
      ...state,
      action.payload
    ] ;
  case T.WISE_MESSAGE.CLEAR :
    return state.filter((i) => i !== action.payload);
  default:
    return state;
  }
};
export const appReducer=combineReducers({
  Kaseya,
  WiseMessages
  // domainTracker,
  ,state: (state = {}) => state //??
});

//