import React, { Component } from 'react';
import Booking from '../../components/Booking/Booking';
import HeaderBox from '../../components/UI/HeaderBox/HeaderBox';

class BookingContainer extends Component {
    render() {
        return (
            <React.Fragment>
                {/* Header box */}
                <HeaderBox link="booking-online"
                    title="BOOKING ONLINE"
                    caption="MAKE A RESERVATION"
                >
                </HeaderBox>

                <Booking /> 

            </React.Fragment>
        );
    }
}

export default BookingContainer;