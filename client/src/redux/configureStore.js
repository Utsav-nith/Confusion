import { createStore, combineReducers, applyMiddleware } from "redux";
import { Dishes } from "./reducers/dishes";
import { Leaders } from "./reducers/leaders";
import { Promotions } from "./reducers/promotions";
import { Comments } from "./reducers/comments";
import thunk from 'redux-thunk';
import logger from "redux-logger";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes:Dishes,
      leaders:Leaders,
      promotions:Promotions,
      comments:Comments
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
