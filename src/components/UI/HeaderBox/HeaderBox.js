import React from 'react';
import MenuImg from '../../../assets/images/menu.jpg';
import ContactImg from '../../../assets/images/contact.jpg';
import BurgerBuilderImg from '../../../assets/images/burgerbuilder.jpg';
import BookingImg from '../../../assets/images/booking.jpg';
import classes from './HeaderBox.module.css';

const HeaderBox  = (props) => {
    let bgImg="";
    if (props.link==="menu") {
        bgImg=MenuImg;
    } else if (props.link==="contact") {
        bgImg=ContactImg;
     } else if (props.link==="self-made-burger") {
        bgImg=BurgerBuilderImg;
     } else if (props.link==="booking-online") {
        bgImg=BookingImg;
     }

    const style = {
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('+bgImg+')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <React.Fragment>
            <div className={classes.HeaderBox} style={style}>
                <div className={classes.FlexContainer}>
                    <div className={classes.Title} >{props.title}</div>
                    <div className={classes.Caption}>
                        <div className={classes.Line}/>
                        <div className={classes.CaptionText}>{props.caption}</div>
                        <div className={classes.Line}/>
                    </div>
                </div>
                
            </div>
            
        </React.Fragment>
    )
}

export default HeaderBox;