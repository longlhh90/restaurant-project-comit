import React, { Component } from 'react';
import HeaderBox from '../../components/UI/HeaderBox/HeaderBox';
import MenuListing from '../../components/Menu/MenuListing/MenuListing';
import MenuControls from '../../components/Menu/MenuControl/MenuControls';

class MenuContainer extends Component {
    state = {
        category: 'burgers',
        categories: {
            burgers: {
                label: "BURGERS",
                btnType: "ButtonMenu",
                activeBtnType: "ButtonMenuActive"
            },
            drinks: {
                label: "DRINKS",
                btnType: "ButtonMenu",
                activeBtnType: "ButtonMenuActive"
            }
        },
        menu: {
            burgers: [
                {
                    dishId: 1,
                    dish: "Smokey Cheddar Bacon",
                    image: "https://bigsmokeburger.com/wp-content/uploads/2019/08/smokey-bacon-768x699.jpg",
                    price: 8.7,
                    description: "Smoked Canadian cheddar, bacon, lettuce, tomato, pickle, onions, ketchup, mustard & mayo."
                },
                {
                    dishId: 2,
                    dish: "Big Smoke",
                    image: "https://bigsmokeburger.com/wp-content/uploads/2019/08/big-smoke-768x686.jpg",
                    price: 7.5,
                    description: "Caramelized onions, house-made horseradish mayo, smoked Canadian cheddar, lettuce, tomato."
                },
                {
                    dishId: 3,
                    dish: "The Hogtown",
                    image: "https://bigsmokeburger.com/wp-content/uploads/2019/08/Hogtown-768x768.jpg",
                    price: 7,
                    description: "Swiss cheese, sautéed mushrooms, bacon, rosemary-garlic mayo, Dijon mustard, lettuce, tomato."
                },
                {
                    dishId: 4,
                    dish: "Blazing Pineapple",
                    image: "https://bigsmokeburger.com/wp-content/uploads/2019/03/blazing-pineapple.jpg",
                    price: 8.75,
                    description: "Grilled sweet & spicy pineapple, BBQ sauce, mayo, banana peppers, lettuce, tomato."
                },
                {
                    dishId: 5,
                    dish: "Crazy",
                    image: "https://bigsmokeburger.com/wp-content/uploads/2019/08/Crazy-768x768.jpg",
                    price: 11,
                    description: "Slaw, banana peppers, smoked Canadian cheddar, lettuce, chipotle mayo, BBQ sauce."
                },
            ],
            drinks: [
                {
                    dishId: 10,
                    dish: "Bottled Water",
                    image: "https://bigsmokeburger.com/wp-content/uploads/2019/04/water.jpg",
                    price: 2.75,
                    description: "A refreshing bottle of Aquafina water."
                },
                {
                    dishId: 11,
                    dish: "Bottled Pop",
                    image: "https://bigsmokeburger.com/wp-content/uploads/2019/04/soda.jpg",
                    price: 2,
                    description: "Choose from an assortment of pops."
                },
                {
                    dishId: 12,
                    dish: "Bottled Pure Leaf Iced Tea",
                    image: "https://bigsmokeburger.com/wp-content/uploads/2019/04/pure-leaf.jpg",
                    price: 1.5,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                },
            ]
        }
    }

    categoryChangedHandler = (category) => {
        this.setState({category: category});
    }

    toBurgerBuilder = () => {
        this.props.history.push('/self-made-burger');
    }

    render() {
        return (
            <React.Fragment>
                {/* Header box */}
                <HeaderBox link="menu"
                    title="MENU"
                    caption="BURGERS & DRINKS"
                >
                </HeaderBox>

                <MenuControls 
                    categorySelected={this.categoryChangedHandler} 
                    categories={this.state.categories}
                    toBurgerBuilder ={this.toBurgerBuilder}
                    activeCategory={this.state.category}/>

                <MenuListing
                    dishes={this.state.menu[this.state.category]}
                    
                />


            </React.Fragment>
        );
    }
}

export default MenuContainer;