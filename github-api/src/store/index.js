import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/rootReducer";

let store = createStore(rootReducer);

export default store;
