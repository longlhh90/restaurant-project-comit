import React, { useContext } from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { AuthContext } from '../../../context/auth-context';

const NavigationItems = (props) => {
    const authContext = useContext(AuthContext);
    let NavItems = null;
    if (!authContext.isAuth) {
        NavItems = (
            <ul className={classes.NavigationItems} style={{ "borderTop": props.stl }}>
                <NavigationItem isSideDrw={props.isSideDrw} link='/' exact closedSD={props.closedSD}>MENU</NavigationItem>
                <NavigationItem isSideDrw={props.isSideDrw} link='/self-made-burger' closedSD={props.closedSD}>SELF-MADE BURGER</NavigationItem>
                <NavigationItem isSideDrw={props.isSideDrw} link='/contact' closedSD={props.closedSD}>CONTACT</NavigationItem>
                <NavigationItem isSideDrw={props.isSideDrw} isLast link='/booking-online' closedSD={props.closedSD}>BOOK NOW</NavigationItem>
            </ul>);
    } else {
        NavItems = (
            <ul className={classes.NavigationItems} style={{ "borderTop": props.stl }}>
                <NavigationItem isSideDrw={props.isSideDrw} link='/dishes' exact closedSD={props.closedSD}>MENU MANAGEMENT</NavigationItem>
                <NavigationItem isSideDrw={props.isSideDrw} link='/logout' closedSD={props.closedSD}>LOG OUT</NavigationItem>
            </ul>);
    }

    return (
        <React.Fragment>
            {NavItems}
        </React.Fragment>
    );
};

export default NavigationItems;