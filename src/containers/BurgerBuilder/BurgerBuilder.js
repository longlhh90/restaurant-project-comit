import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 3,
            bacon: 3,
            cheese: 3,
            meat: 2
        }
    }
    render() {
        return (
            <React.Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <div>Ingredients Control</div>
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;