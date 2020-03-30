import React from 'react';
import classes from './Footer.module.css';
// import Logo from '../Logo/Logo';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = (props) => {
    return (
        <div >
            <Row className={classes.Footer}>
                <Col md={12} >
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe title="gmap" width="100%" height={180} id="gmap_canvas" src="https://maps.google.com/maps?q=Saskatoon&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
                        <a href="https://www.whatismyip-address.com">what is my ip address</a>
                        </div>
                        <style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;height:180px;width:100%;margin-bottom:20px;}.gmap_canvas {overflow:hidden;background:none!important;height:180px;width:100%;margin-bottom:20px;}" }} />
                </div>
                </Col>
                <Col md={4} >
                    <div className={classes.FooterItem}>
                        <li>Saskatoon, SK Canada</li>
                        <li><a href="tel:3069999999">(306) 999-9999</a></li>
                    </div>
                </Col>
                <Col md={4} >

                </Col>
                <Col md={4} >
                    <div className={classes.FooterItem}>© 2020 – All Rights Reserved to a Restaurant| Powered by <strong>longlhh90@gmail.com </strong></div>
                </Col>

            </Row>
        </div>
    );
};

export default Footer;