import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Burger from '../../components/Burger/Burger';
import IngredientControls from '../../components/Burger/IngredientControls/IngredientControls';
import Modal from '../../components/UI/Modal/Modal';
import BurgerSummary from '../../components/BurgerSummary/BurgerSummary';
import HeaderBox from '../../components/UI/HeaderBox/HeaderBox';
import * as burgerBuilderActions from '../../store/actions/index';



class BurgerBuilder extends Component {
    state = {
        orderClicked: false,
    }

    updateOrderClicked = (isOrderClicked) => {
        this.setState({ orderClicked: isOrderClicked });
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => ingredients[igKey])
            .reduce((sum, el) => { return sum + el }, 0);
        return sum > 0 ;
    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <React.Fragment>
                <Modal show={this.state.orderClicked}
                    bdClicked={() => this.updateOrderClicked(false)}>
                    <BurgerSummary ingredients={this.props.ings}
                        totalPrice={this.props.totalPrice}
                        orderCancelled={() => this.updateOrderClicked(false)} />
                </Modal>

                {/* Header box */}
                <HeaderBox link="self-made-burger"
                    title="BURGER"
                    caption="ENJOY YOUR OWN BURGER"
                >
                </HeaderBox>

                <Burger ingredients={this.props.ings} />
                <IngredientControls
                    ingredientAdded={this.props.addIngredientHandler}
                    ingredientRemoved={this.props.removeIngredientHandler}
                    isDisabled={disabledInfo}
                    totalPrice={this.props.totalPrice}
                    purchasable={this.updatePurchaseState(this.props.ings)}
                    quantity={this.props.ings}
                    orderClicked={() => this.updateOrderClicked(true)}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        totalPrice: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIngredientHandler: (igName) => dispatch(burgerBuilderActions.addIngredient(igName)),
        removeIngredientHandler: (igName) => dispatch(burgerBuilderActions.reduceIngredient(igName)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);