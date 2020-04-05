import React from 'react';
import classes from './BookingForm.module.css';

const BookingForm = (props) => {
   
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const today = `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`; 

    return (
        <div className={classes.Form}>
            <form>
                <fieldset>
                    <div>
                        <label>Date</label>
                        <input type="date" value={today}/>
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
        </div>
    );
};

export default BookingForm;