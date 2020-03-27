import React from 'react';
import classes from './IngredientControl.css';
import Button from '../../../UI/Button/Button';

const IngredientControl = (props) => {
    return (
        <div className={classes.IngreCtrl}>
            <div className={classes.Label}>{props.label}</div>
            <Button
            btnType="ButtonQuantity"
            onclicked = {props.reduced}
            disabled = {props.isDisabled}
            >-</Button>
            <p className={classes.Quantity}>{props.quantity}</p>
            <Button 
            btnType="ButtonQuantity"
            onclicked = {props.added}>+</Button>
        </div>
    );
};

export default IngredientControl;