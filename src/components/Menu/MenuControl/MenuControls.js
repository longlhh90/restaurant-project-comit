import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import classes from './MenuControls.module.css';

class MenuControls extends Component {

    render() {
        const controls = Object.keys(this.props.categories).map(ckey => {
            return (
                <Button key={ckey}
                    btnType={this.props.activeCategory === ckey ?
                        this.props.categories[ckey].activeBtnType
                        : this.props.categories[ckey].btnType}
                    onclicked={() => this.props.categorySelected(ckey)}
                >
                    {this.props.categories[ckey].label}
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