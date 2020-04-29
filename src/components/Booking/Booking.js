import React from 'react';
import BookingForm from './BookingForm/BookingForm';
import OpeningTime from '../UI/OpeningTime/OpeningTime';

const Booking = () => {
    return (
        <React.Fragment>
            <OpeningTime />
            <BookingForm />
        </React.Fragment>

    );
};

export default Booking;