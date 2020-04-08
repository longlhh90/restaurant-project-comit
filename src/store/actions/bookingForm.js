import * as actionTypes from './actionTypes';

export const modifyInput = (event, inputName) => {
    return {
        type: actionTypes.CHANGE_INPUT_VALUE,
        inputIdentifier: inputName,
        event: event
    }
}