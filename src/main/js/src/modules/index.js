import { all } from "@redux-saga/core/effects";
import { combineReducers } from "redux";
import posts, { postsSaga } from './post';

const rootReducer = combineReducers({
    posts
})

export function* rootSaga(){
    yield all([postsSaga()]);
}

export default rootReducer;
/* titleChangeReducer,
    communityReducer,
    commPageReducer,
    commLoadIdReducer */