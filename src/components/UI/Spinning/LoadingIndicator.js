import React from 'react';

import classes from './LoadingIndicator.module.css';

const LoadingIndicator = (props) => (
  <div className={props.isSmall ? classes.LdsRingSmall : classes.LdsRing}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default LoadingIndicator;
