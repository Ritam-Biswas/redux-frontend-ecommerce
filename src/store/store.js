import { createStore } from "redux";
import { thunk } from "redux-thunk";
import { applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store;