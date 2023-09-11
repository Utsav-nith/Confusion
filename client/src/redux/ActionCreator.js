import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    return fetch(baseUrl + 'dishes').then((response) => {
        return response.json();
    }).then((dishes) => {
        console.log(dishes);
        dispatch(addDishes(dishes));
    })
};

export const dishesLoading = (value) => ({
    type: ActionTypes.DISHES_LOADING,
    payload: value
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments').then((response) => {
        return response.json();
    }).then((comments) => {
        console.log(comments);
        dispatch(addComments(comments));
    })
};
const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});
const commentsFailed = (errMess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

export const fetchPromos = () => (dispatch) => {
    return fetch(baseUrl + 'promotions').then((response) => {
        return response.json();
    }).then((promotions) => {
        console.log(promotions);
        dispatch(addPromos(promotions));
    })
};
const addPromos = (promotions) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promotions
})
const promosFailed = (errMess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errMess
});
const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING,
});
