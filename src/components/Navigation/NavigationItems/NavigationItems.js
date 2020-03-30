import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems} style={{"borderTop": props.style}}>
            <NavigationItem isSideDrw={props.isSideDrw} link='/' exact closedSD={props.closedSD}>MENU</NavigationItem>
            <NavigationItem isSideDrw={props.isSideDrw} link='/self-made-burger' closedSD={props.closedSD}>SELF-MADE BURGER</NavigationItem>
            <NavigationItem isSideDrw={props.isSideDrw} isLast link='/contact' closedSD={props.closedSD}>CONTACT</NavigationItem>
        </ul>
    );
};

export default NavigationItems;