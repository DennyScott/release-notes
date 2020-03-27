import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducer";

const enhancers = compose(
  applyMiddleware(thunkMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

const defaultState = {};

const configureStore = () => {
  const store = createStore(rootReducer, defaultState, enhancers);

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("./reducer", () => {
        store.replaceReducer(rootReducer);
      });
    }
  }
  return store;
};

const store = configureStore();
export default store;
