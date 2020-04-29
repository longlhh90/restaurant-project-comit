import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import * as FormActions from '../../../../store/actions/index';
import Button from '../../../UI/Button/Button';
import Input from '../../../UI/Input/Input';

import LoadingIndicator from '../../../UI/Spinning/LoadingIndicator';
import classes from './DishForm.module.css';

const DishForm = React.memo(props => {
  const dishFormState = useSelector(state => state.dishForm);
  const dispatchDish = useDispatch();

  const formElementsArray = [];
  for (let key in dishFormState.dishForm) {
    formElementsArray.push({
      id: key,
      config: dishFormState.dishForm[key]
    });

  }

  const submitHandler = event => {
    event.preventDefault();
    const dish = {
      dishName:dishFormState.dishForm.dishName.value,
      imgURL:dishFormState.dishForm.imageURL.value,
      price:dishFormState.dishForm.price.value,
      dishDesc: dishFormState.dishForm.dishDesc.value
    }
    props.onAddDish(dish);
  };

  let form = (
    <section className={classes.DishFormSection}>
      <form onSubmit={submitHandler}>
        <div className={classes.DishForm}>
          {formElementsArray.map(e => (
            <div key={e.id} className={classes.FormControl}>
              <Input
                key={e.id}
                elementType={e.config.elementType}
                label={e.config.label}
                elementConfig={e.config.elementConfig}
                value={e.config.value}
                invalid={!e.config.valid}
                shouldValidate={e.config.validation}
                touched={e.config.touched}
                changed={(event) => dispatchDish(FormActions.modifyInputDish(event, e.id))} />
            </div>
          ))}
          <div className={classes.FormControlActions}>
            <Button btnType="ButtonForm" disabled={!dishFormState.formIsValid}>ADD TO MENU</Button>
            {props.loading && <LoadingIndicator isSmall />}
          </div>
        </div>
      </form>
    </section>
  );

  return (
    <div className={classes.Form}>
      {form}
    </div>
  );
});

export default DishForm;
