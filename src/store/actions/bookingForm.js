import * as actionTypes from './actionTypes';

export const modifyInputBooking = (event, inputName) => {
    return {
        type: actionTypes.CHANGE_INPUT_BOOKING_VALUE,
        inputIdentifier: inputName,
        event: event
    }
}