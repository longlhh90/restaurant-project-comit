import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems} style={{"border-top": props.style}}>
            <NavigationItem isSideDrw={props.isSideDrw} link='/'>MENU</NavigationItem>
            <NavigationItem isSideDrw={props.isSideDrw} link='/' active>SELF-MADE BURGER</NavigationItem>
            <NavigationItem isSideDrw={props.isSideDrw} isLast link='/'>CONTACT</NavigationItem>
        </ul>
    );
};

export default NavigationItems;