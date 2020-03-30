import React, { Component } from 'react';
import classes from './Contact.module.css';
import ContactItems from './ContactItem/ContactItem';


class Contact extends Component {
    state = {
        address: ["map-marker-alt", "Saskatoon, SK Canada"],
        phone: ["phone-alt", "(306) 999-999"],
        email: ["envelope", "info@restaurant.com"]
    }
    render() {
        return (
            <React.Fragment>

                <section className={classes.Section}>
                    <ContactItems listing={this.state} />
                </section>

            </React.Fragment>
        );
    }
}

export default Contact;