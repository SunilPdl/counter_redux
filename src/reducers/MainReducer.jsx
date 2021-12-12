import { combineReducers } from "redux";

import changeNumber from "./IncDecCounter";

const rootReducers = combineReducers(
    {
        changeNumber
    }
);

export default rootReducers;