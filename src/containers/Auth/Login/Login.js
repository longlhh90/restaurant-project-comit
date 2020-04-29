import React, { useContext } from 'react';
import { AuthContext } from '../../../context/auth-context';
import classes from './Login.module.css';
import Button from '../../../components/UI/Button/Button';

const Login = (props) => {
  const authContext = useContext(AuthContext);

  const loginHandler = () => {
    authContext.auth(true);
    props.history.push('/dishes');

  };

  return (
    <div className={classes.Auth}>
      <section className={classes.Card}>
        <h2>You are not authenticated!</h2>
        <p>Please log in to continue.</p>
        <Button btnType="ButtonForm" onclicked={loginHandler}>LOGIN</Button>
      </section>
    </div>
  );
};

export default Login;
