import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/auth-context';
import { Redirect } from 'react-router-dom';


const Logout = () => {
    const authContext = useContext(AuthContext);

    const logoutHandler = () => {
        authContext.auth(false);
    };

    useEffect(() => {
        logoutHandler();
    }, []);

    return <Redirect to="/" />;
}


export default Logout;