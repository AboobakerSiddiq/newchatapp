import { combineReducers } from "redux";
import { inputReducer } from "./sid/sidReducer";

export const rootReducer=combineReducers({
    sid:inputReducer,
   
})