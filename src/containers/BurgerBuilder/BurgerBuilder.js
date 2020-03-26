import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import IngredientControls from '../../components/Burger/IngredientControls/IngredientControls';
import Modal from '../../components/UI/Modal/Modal';
import BurgerSummary from '../../components/BurgerSummary/BurgerSummary';


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 0,
            cheese: 1,
            meat: 1
        },
        totalPrice: 5.9,
        purchasable: true,
        orderClicked: false,
    }

    updateOrderClicked = (isOrderClicked) => {
        this.setState({orderClicked: isOrderClicked});
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => ingredients[igKey])
            .reduce((sum, el) => { return sum + el }, 0);
        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        const prevCount = this.state.ingredients[type];
        const newCount = prevCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;
        const priceRise = INGREDIENT_PRICES[type];
        const oldTotalPrice = this.state.totalPrice;
        const newTotalPrice = oldTotalPrice + priceRise;

        this.setState({ ingredients: updatedIngredients, totalPrice: newTotalPrice });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const prevCount = this.state.ingredients[type];
        const newCount = prevCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;
        const priceReduction = INGREDIENT_PRICES[type];
        const oldTotalPrice = this.state.totalPrice;
        const newTotalPrice = oldTotalPrice - priceReduction;

        this.setState({ ingredients: updatedIngredients, totalPrice: newTotalPrice });
        this.updatePurchaseState(updatedIngredients);
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <React.Fragment>
                <Modal show={this.state.orderClicked} 
                bdClicked ={() => this.updateOrderClicked(false)}>
                    <BurgerSummary ingredients={this.state.ingredients}
                        totalPrice={this.state.totalPrice}
                        orderCancelled = {() => this.updateOrderClicked(false)} />
                </Modal>

                <Burger ingredients={this.state.ingredients} />
                <IngredientControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    isDisabled={disabledInfo}
                    totalPrice={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    quantity={this.state.ingredients}
                    orderClicked={() => this.updateOrderClicked(true)}
                />
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;