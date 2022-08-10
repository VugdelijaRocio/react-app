import { combineReducers } from "redux";

import homeReducer, { HomeInitialState } from "./home.reducer";

export interface RootState {
    home: HomeInitialState;
}

export const rootReducer = combineReducers({
    home: homeReducer,
});
