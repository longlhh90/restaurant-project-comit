import React from 'react';
import imgLogo from '../../../assets/images/logo.png';
import classes from './Logo.module.css';

const Logo = (props) => {
    return (
        <div className={classes.Logo} style={{height: props.height}}>
            <img src={imgLogo} alt="MyApp"/>
        </div>
    );
};

export default Logo;