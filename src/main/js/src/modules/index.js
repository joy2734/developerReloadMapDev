import { all } from "@redux-saga/core/effects";
import { combineReducers } from "redux";
import posts, { postsSaga } from './post';
import {login, loginSaga } from './login';
import {interactReducer} from "./interaction";

const rootReducer = combineReducers({
    login,
    posts,
    interactReducer
})

export function* rootSaga(){
    yield all([
        postsSaga(),
        loginSaga()
    ]);
}

export default rootReducer;

/* titleChangeReducer V,
    communityReducer,
    commPageReducer,
    commLoadIdReducer */