import { createStore } from "redux";
import rootReducer from "../src/redux/reducers/reducer.js";

const store = createStore(rootReducer);

export default store;
