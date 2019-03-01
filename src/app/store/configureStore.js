// boilerplate code for store

import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension' // this is an extension in dev dependencies, which allows us to see the redux store values if we use it as an store enhancer
import thunk from 'redux-thunk'
export const configureStore = preloadedState => {
  const middleWares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middleWares);
  const storeEnhancers = [middlewareEnhancer];
  const composeEnhancer = composeWithDevTools(...storeEnhancers);

  const store = createStore(rootReducer, preloadedState, composeEnhancer);
  return store;
};

// we have to export this configure store file to the index.js part of your file
// to tell the application about the store so that it cn use its state