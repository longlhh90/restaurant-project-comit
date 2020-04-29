import React from 'react';
import classes from './Categories.module.css'

const Categories = (props) => {

    return (
        <section className={classes.CategoriesSection}>
            <h2>Please select Category first!</h2>
            <select
                value={props.category}
                onChange ={props.changed}>
                <option value='burgers'>Burgers</option>
                <option value='drinks'>Drinks</option>
            </select>
        </section>
    );
};

export default Categories;