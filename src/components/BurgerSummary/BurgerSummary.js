import React from 'react';
import classes from './BurgerSummary.module.css';
import Button from '../UI/Button/Button';

const BurgerSummary = (props) => {
    const ingredients = Object.keys(props.ingredients)
        .map(igKey => {
            return <li className={classes.Items} key={igKey}>{igKey} : {props.ingredients[igKey]}</li>
        })
    return (
        <React.Fragment>
            <h3 className={classes.Center}>Your Burger</h3>
            <div className={classes.Content}>
                <p>This is a delicious burger with following ingredients:</p>
                <ul>
                    {ingredients}
                </ul>
            </div>
            <div className={classes.Center}>
                <p><strong>Total price: ${props.totalPrice.toFixed(2)}</strong></p>
                <p className={classes.Center}>Continue to Checkout?</p>
                <Button btnType="ButtonFormSmall" onclicked={props.orderCancelled}>Cancel</Button>
                <Button btnType="ButtonFormSmall" >Continue</Button>
            </div>
        </React.Fragment>
    );
};

export default BurgerSummary;