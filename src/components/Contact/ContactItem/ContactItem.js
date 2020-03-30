import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './ContactItems.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhoneAlt, faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";


library.add(faPhoneAlt);
library.add(faMapMarkerAlt);
library.add(faEnvelope);

const ContactItem = (props) => {

    const listing = Object.keys(props.listing).map(
        contact => {
            return [...Array(props.listing[contact])].map(
                () => {
                    return (<Col md={4} key={contact} className={classes.Col}>
                        <FontAwesomeIcon className={classes.Icon} icon={props.listing[contact][0]} />
                        <h3><span style={{ "text-transform": "text-transform" }}>{contact}</span></h3>
                        {props.listing[contact][1]}
                    </Col>)
                }
            )
        }
    )

    return (
        <Row>
            {listing}
        </Row>
    )
};

export default ContactItem;