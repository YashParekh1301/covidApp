import { createStore } from "redux";
import { SET_COVID_DATA, SET_IS_LOADING } from "./helpers/constants";
const initialState = {}

function reducer(state = initialState, action) {
  if(action.type === SET_COVID_DATA) {
    return { ...state, covidData: action.payload};
  }
  else if(action.typr === SET_IS_LOADING){
    return { ...state, isLoading: action.payload}
  }
  return state;
}

export const store = createStore(reducer);