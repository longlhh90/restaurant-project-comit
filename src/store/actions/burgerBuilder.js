import * as actionTypes from './actionTypes';

export const addIngredient = (igName) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName : igName
    }
}

export const reduceIngredient = (igName) => {
    return {
        type: actionTypes.REDUCE_INGREDIENT,
        ingredientName : igName
    }
}