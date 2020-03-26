import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems} style={{"border-top": props.style}}>
            <NavigationItem link='/'>Menu</NavigationItem>
            <NavigationItem  link='/'>Burgers</NavigationItem>
            <NavigationItem link='/' active>Make Your Burger</NavigationItem>
        </ul>
    );
};

export default NavigationItems;