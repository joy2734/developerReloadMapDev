import { all } from "@redux-saga/core/effects";
import { combineReducers } from "redux";
import posts, { postsSaga } from './post';
import {interactReducer} from "./interaction";

const rootReducer = combineReducers({
    posts,
    interactReducer
})

export function* rootSaga(){
    yield all([postsSaga()]);
}

export default rootReducer;

/* titleChangeReducer V,
    communityReducer,
    commPageReducer,
    commLoadIdReducer */