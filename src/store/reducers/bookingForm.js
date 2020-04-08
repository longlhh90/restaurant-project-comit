import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../ultility';
import * as values from '../values';


const initialState = {
    bookingForm: {
        date: {
            isContactInfo : false,
            elementType: 'input',
            label: 'Date',
            elementConfig: {
                type: 'date'
            },
            value: values.today,
            validation: {
                required: true
            },
            valid: true,
            touched: false
        },
        time: {
            isContactInfo : false,
            elementType: 'select',
            label: 'Time',
            elementConfig: {
                options: values.timeValues
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        party: {
            isContactInfo : false,
            elementType: 'select',
            label: 'Party',
            elementConfig: {
                options: values.partyValues
            },
            value: '',
            validation: {
            },
            valid: false,
            touched: false
        },
        name: {
            isContactInfo : true,
            elementType: 'input',
            label: 'Name',
            elementConfig: {
                type: 'text'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        email: {
            isContactInfo : true,
            elementType: 'input',
            label: 'E-Mail',
            elementConfig: {
                type: 'email'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        phone: {
            isContactInfo : true,
            elementType: 'input',
            label: 'Phone',
            elementConfig: {
                type: 'tel'
            },
            value: '',
            validation: {
                required: true,
                isNumber: true,
                minLength: 10,
                maxLength: 10,
            },
            valid: false,
            touched: false
        },
    },
    formIsValid: false
}

const checkValidity = (value, rules) => {
    let isValid = true;
    if (!rules) {
        return true;
    }
    
    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }

    if (rules.isNumber) {
        const pattern = /^[0-9]*$/;
        isValid = pattern.test(value) && isValid
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }

    return isValid;
}

const inputChangedHandler = (state, event, inputIdentifier) => {
    const updatedBookingForm = {
        ...state.bookingForm
    };
    const updatedFormElement = { 
        ...updatedBookingForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedBookingForm[inputIdentifier] = updatedFormElement;
    
    let formIsValid = true;
    for (let inputIdentifier in updatedBookingForm) {
        formIsValid = updatedBookingForm[inputIdentifier].valid && formIsValid;
    }

    return {bookingForm: updatedBookingForm, formIsValid: formIsValid};
}

const modifyInput = (state, action) => {
    const updatedState = inputChangedHandler(state, action.event, action.inputIdentifier);
    return updateObject(state, updatedState);
}

const bookingFormReducer = (state= initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_INPUT_VALUE: return modifyInput(state,action);
        default: return state;
    }
}

export default bookingFormReducer;