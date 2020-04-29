import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import classes from './MenuControls.module.css';

class MenuControls extends Component {

    render() {
        const controls = this.props.categories.map(cat => {
            return (
                <Button key={cat}
                    btnType={this.props.activeCategory === cat ?
                        this.props.activeBtnType
                        : this.props.btnType}
                    onclicked={() => this.props.categorySelected(cat)}
                >
                    {cat}
                </Button>
            );
        });

        return (
            <React.Fragment>
                <div className={classes.Controls}>
                    <div style={{"paddingBottom": "20px"}}>
                        <Button onclicked={this.props.toBurgerBuilder} btnType="ButtonForm">BUILD YOUR OWN BURGER!</Button>
                    </div>
                    {controls}
                </div>
            </React.Fragment>
        );
    }
}

export default MenuControls;