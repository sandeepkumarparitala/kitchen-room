import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import { createBrowserHistory } from "history";
import rootReducer, { initialState } from "./reducers";

// integrate dev tools
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

// initialize browser history API middleware
// and enable react-router-redux to track history
const history = createBrowserHistory();

const middleware = applyMiddleware(
  // enable composable actions
  thunk,
  routerMiddleware(history)
);

const enhancer = composeEnhancers(middleware);

const store = createStore(rootReducer, initialState, enhancer);

export default store;
