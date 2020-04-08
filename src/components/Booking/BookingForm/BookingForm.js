import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as bookingFormActions from '../../../store/actions/index';
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
            {formElementsArray.map(formElement => (
                <fieldset>
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
                            changed={(event) => dispatch(bookingFormActions.modifyInput(event, e.id))} />
                    ))}
                </fieldset>

            ))}
            <div className={classes.Button}>
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





{/* <div className={classes.Form}>
<form>
    <fieldset>
        <div>
            <label>Date</label>
            <input type="date" value='' />
        </div>

        <div>
            <label>Time</label>
            <input type="time" name="" id="rtb-date" value="" />
        </div>

        <div>
            <label>Party</label>
            <select required>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
        </div>
    </fieldset>
    <fieldset>
        <div>
            <label>Name</label>
            <input type="text" />
        </div>

        <div>
            <label>Email</label>
            <input type="email" />
        </div>

        <div>
            <label>Phone</label>
            <input type="tel" />
        </div>
    </fieldset>
    <button type="submit">Request Booking</button>
</form>
</div> */}