import * as actionTypes from './actionTypes';

export const modifyInputDish = (event, inputName) => {
    return {
        type: actionTypes.CHANGE_INPUT_DISH_VALUE,
        inputIdentifier: inputName,
        event: event
    }
}