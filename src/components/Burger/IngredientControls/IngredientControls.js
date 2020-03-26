import React from 'react';
import classes from './IngredientControls.css';
import IngredientControl from './IngredientControl/IngredientControl'


const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const IngredientControls = (props) => {
    return (
        <div className={classes.IngreCtrls}>
            <p>Total Price: <strong>${props.totalPrice.toFixed(2)}</strong></p>
            {controls.map(ctrl => {
                return (
                    <IngredientControl
                        key={ctrl.label}
                        label={ctrl.label}
                        quantity={props.quantity[ctrl.type]}
                        added={() => props.ingredientAdded(ctrl.type)}
                        reduced={() => props.ingredientRemoved(ctrl.type)}
                        isDisabled={props.isDisabled[ctrl.type]}
                    />
                )
            })}
            <button
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.orderClicked}>Checkout!</button>
        </div>
    );
};

export default IngredientControls;