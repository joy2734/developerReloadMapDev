import { combineReducers } from "redux";
import {
    titleChangeReducer,
    communityReducer,
    commPageReducer,
    commLoadIdReducer
} from "./RoadMapReducer";

export const rootReducer = combineReducers({
    titleChangeReducer,
    communityReducer,
    commPageReducer,
    commLoadIdReducer
})