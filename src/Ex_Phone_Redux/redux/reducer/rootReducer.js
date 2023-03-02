import { combineReducers } from "redux";
import { phoneReducer } from "./phoneReducer";



export const rootReducer_Ex_Phone_Redux = combineReducers({
    phoneReducer: phoneReducer,
})