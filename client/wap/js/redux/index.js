import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import * as createLogger from "redux-logger";
import { ApplicationState }  from './store';
import configureStore from './configureStore';


const initialState = window.initialReduxState;
export const Store = configureStore(initialState);

