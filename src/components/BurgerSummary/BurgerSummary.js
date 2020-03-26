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
            <h3>Your Burger</h3>
            <div className={classes.Content}>
                <p>This is a delicious burger with following order:</p>
                <ul>
                    {ingredients}
                </ul>
                <p><strong>Total price: ${props.totalPrice.toFixed(2)}</strong></p>
            </div>
            <p>Continue to Checkout?</p> 
            <Button btnType = "Danger" onclicked={props.orderCancelled}>CANCEL</Button> 
            <Button btnType = "Success" >CONTINUE</Button>

        </React.Fragment>
    );
};

export default BurgerSummary;