import { combineReducers } from "redux";
import {
    titleChangeReducer,
    communityReducer
} from "./RoadMapReducer";

export const rootReducer = combineReducers({
    titleChangeReducer,
    communityReducer
})