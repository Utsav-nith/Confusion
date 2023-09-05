import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/Comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/Leaders";

export const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  promotions: PROMOTIONS,
  leaders: LEADERS,
}; 

export const Reducer = (state = initialState, action) => {
  return state;
};
