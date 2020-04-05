import React from 'react';
import BookingForm from './BookingForm/BookingForm';
import classes from './Booking.module.css';

const Booking = (props) => {
    return (
        <React.Fragment>
            <div className={classes.Section}>
                <div className={classes.Header}>
                    <h2>We're Open</h2>
                    <span>Everyday!</span>
                </div>
                <div className={classes.Content}>
                    <p>
                        Monday – Sunday
                        <br />
                        <strong>10am – 9pm</strong>
                    </p>
                    <p>
                        <span class="tiny-border">.</span>
                    </p>
                </div>

            </div>
            <BookingForm />
        </React.Fragment>

    );
};

export default Booking;