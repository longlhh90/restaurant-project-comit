import React from 'react';
import classes from './SideDrawer.module.css';
import Logo from '../../UI/Logo/Logo';
import Nav from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
    const sideDrawClasses = props.open ? [classes.SideDrawer,classes.Open] : [classes.SideDrawer,classes.Close]
    return (
        <React.Fragment>
            <BackDrop show={props.open} bdClicked={props.closed} />
            <div className={sideDrawClasses.join(' ')}>
                <Logo height="50px" />
                <Nav closedSD={props.closed} isSideDrw style="1px solid white" />
            </div>
        </React.Fragment>

    );
};

export default SideDrawer;