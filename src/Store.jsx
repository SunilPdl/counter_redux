import { createStore } from "redux";

import rootReducers from "./reducers/MainReducer";

const store = createStore(rootReducers);

export default store;