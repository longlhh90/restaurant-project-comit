import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../ultility';


const initialState = {
    dishForm: {
        dishName: {
            elementType: 'input',
            label: 'Dish Name',
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
        imageURL: {
            elementType: 'input',
            label: 'Image URL',
            elementConfig: {
                type: 'url',
                placeholder: 'https://example.com'
            },
            value: '',
            validation: {
                required: true,
                isLink: true
            },
            valid: false,
            touched: false
        },
        price: {
            elementType: 'input',
            label: 'Price',
            elementConfig: {
                type: 'number',
                step: '0.01'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false
        },
        dishDesc: {
            elementType: 'input',
            label: 'Description',
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

    if (rules.isLink) {
        const pattern = /https?:\/\/(www\.)?(?!www\.)([A-Za-z0-9\-@_~]+\.)[A-Za-z]{2,}(:[0-9]{2,5})?(\.[A-Za-z0-9/_\-~?&=]+)*/;
        isValid = pattern.test(value) && isValid
    }
    
    return isValid;
}

const inputChangedHandler = (state, event, inputIdentifier) => {
    const updatedFormElement = updateObject(state.dishForm[inputIdentifier], {
        value: event.target.value,
        valid: checkValidity(event.target.value, state.dishForm[inputIdentifier].validation),
        touched: true
    })
    const updatedDishForm = updateObject(state.dishForm, {[inputIdentifier]: updatedFormElement} );
    
    let formIsValid = true;
    for (let inputIdentifier in updatedDishForm) {
        formIsValid = updatedDishForm[inputIdentifier].valid && formIsValid;
    }

    return {dishForm: updatedDishForm, formIsValid: formIsValid};
}

const modifyInput = (state, action) => {
    const updatedState = inputChangedHandler(state, action.event, action.inputIdentifier);
    return updateObject(state, updatedState);
}

const dishFormReducer = (state= initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_INPUT_DISH_VALUE: return modifyInput(state,action);
        default: return state;
    }
}

export default dishFormReducer;