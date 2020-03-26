import React from 'react';
import classes from './IngredientControl.css'

const IngredientControl = (props) => {
    return (
        <div className={classes.IngreCtrl}>
            <div className={classes.Label}>{props.label}</div>
            <button 
            className={classes.Less}
            onClick = {props.reduced}
            disabled = {props.isDisabled}
            >-</button>
            <p className={classes.Quantity}>{props.quantity}</p>
            <button className={classes.More} onClick = {props.added}>+</button>
        </div>
    );
};

export default IngredientControl;