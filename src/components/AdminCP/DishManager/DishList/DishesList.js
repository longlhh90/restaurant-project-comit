import React from 'react';
import classes from './DishesList.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

const DishesList = props => {

  return (
    <section className={classes.IngredientList}>
      <h2>Dishes List</h2>
      <ul>
        {props.dishes.map(e => (
          <li key={e.id} >
            <div className={classes.Button}>
              <FontAwesomeIcon className={classes.Icon} icon='trash' onClick={props.onRemoveItem.bind(this, e.id)} />
            </div>
            <span>{`Dish: ${e.dishName}`}</span>
            <span>{`Image: `} <img className={classes.Image} src={e.imgURL} alt={e.dishName}></img></span>
            <span>{`Price: ${e.price}`}</span>
            <span>{`Description: ${e.dishDesc}`}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DishesList;

// onClick={props.onRemoveItem.bind(this, e.id)}