import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../UI/Logo/Logo';
import Nav from '../NavigationItems/NavigationItems';

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div onClick={props.open} className={classes.DrawerToggle}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={classes.DesktopToolbar}>
            <Logo />
            <Nav />
            </div>
                
                
        </header>
    );
};

export default Toolbar;