import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../ultility';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const initialState = {
    ingredients: {
        salad: 1,
        bacon: 0,
        cheese: 1,
        meat: 1
    },
    totalPrice: 5.9
}

const modifyIngredient = (state, action, isAdd) => {
    const updatedIngredient = isAdd ? updateObject(state.ingredients, { [action.ingredientName] : state.ingredients[action.ingredientName] + 1 }) : updateObject(state.ingredients, { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 });
    const updatedState = {
        ingredients: updatedIngredient,
        totalPrice: isAdd ? state.totalPrice + INGREDIENT_PRICES[action.ingredientName] : state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
    };
    return updateObject(state, updatedState);
}

const burgerBuilderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return modifyIngredient(state,action,true);
        case actionTypes.REDUCE_INGREDIENT: return modifyIngredient(state,action,false);
        default: return state;
    }

}

export default burgerBuilderReducer;