import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../ultility';

const initialState = {
    orders: null,
    totalBeforeTax: 0,
    totalGST: 0,
    totalHST: 0,
    totalAfterTax: 0,
};

const addDish = (state,action) => {

}

const removeDish = (state,action) => {

}

const modifyQuantity = (state,action) => {

}


const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_DISH: return addDish(state,action);
        case actionTypes.REMOVE_DISH: return removeDish(state,action);
        case actionTypes.MODIFY_QUANTITY: return modifyQuantity(state,action)
        default: return state;
    }

}

export default orderReducer;

