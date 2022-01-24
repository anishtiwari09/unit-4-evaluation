import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { userInfoReducer } from "./DataFetch/userInfo/reducer";
import { PostReducer } from "./postRequest/reducer";

const rootReducer = combineReducers({ userInfo:userInfoReducer,postApi:PostReducer });

let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

const enhancer = composeEnhancers(applyMiddleware(thunk));
export const store=createStore(rootReducer,enhancer)