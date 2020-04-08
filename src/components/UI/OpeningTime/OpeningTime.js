import React from 'react';
import classes from './OpeningTime.module.css';

const OpeningTime = () => {
    return (
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
                <span>.</span>
            </p>
        </div>

    </div>
    );
};

export default OpeningTime;