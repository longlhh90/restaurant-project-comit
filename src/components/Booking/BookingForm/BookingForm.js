import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as FormActions from '../../../store/actions/index';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import classes from './BookingForm.module.css';


const BookingForm = () => {
    const bookingFormState = useSelector(state => state.bookingForm);
    const dispatch = useDispatch();

    const formElementsArray = [];
    const elementsReservationInfo = [];
    const elementsContactInfo = [];
    for (let key in bookingFormState.bookingForm) {
        if (bookingFormState.bookingForm[key].isContactInfo) {
            elementsContactInfo.push({
                id: key,
                config: bookingFormState.bookingForm[key]
            });
        } else {
            elementsReservationInfo.push({
                id: key,
                config: bookingFormState.bookingForm[key]
            });
        }

    }
    formElementsArray.push(elementsReservationInfo, elementsContactInfo);

    let form = (
        <form >
            {formElementsArray.map((formElement,i) => (
                <fieldset key={i}>
                    {formElement.map(e => (
                        <Input
                            key={e.id}
                            elementType={e.config.elementType}
                            label={e.config.label}
                            elementConfig={e.config.elementConfig}
                            value={e.config.value}
                            invalid={!e.config.valid}
                            shouldValidate={e.config.validation}
                            touched={e.config.touched}
                            changed={(event) => dispatch(FormActions.modifyInputBooking(event, e.id))} />
                    ))}
                </fieldset>

            ))}
            <div className={classes.ButtonArea}>
            <Button btnType="ButtonForm" disabled={!bookingFormState.formIsValid}>REQUEST BOOKING</Button>
            </div>
            
        </form>
    );

    return (
        <div className={classes.Form}>
            {form}
        </div>
    );
};

export default BookingForm;