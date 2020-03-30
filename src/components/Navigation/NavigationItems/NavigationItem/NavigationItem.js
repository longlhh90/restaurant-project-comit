import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css';

const NavigationItem = (props) => {
    return (
        <React.Fragment>
            <li className={classes.Item}>
                <NavLink onClick={props.closedSD} to={props.link} exact={props.exact} activeClassName={classes.active}>
                    {props.children}
                </NavLink>
            </li>
            {props.isLast || props.isSideDrw ? null : <li className={classes.Item} style={{color: "#d40000"}}>|</li>}
        </React.Fragment>
    );
};

export default NavigationItem;