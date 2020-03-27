import React from 'react';
import classes from './NavigationItem.module.css';

const NavigationItem = (props) => {
    return (
        <React.Fragment>
            <li className={classes.Item}>
                <a href={props.link} className={props.active ? classes.active : null}>
                    {props.children}
                </a>
            </li>
            {props.isLast || props.isSideDrw ? null : <li className={classes.Item} style={{color: "#d40000"}}>|</li>}
        </React.Fragment>
    );
};

export default NavigationItem;