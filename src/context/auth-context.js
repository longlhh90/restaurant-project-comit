import React, { useState } from 'react';

export const AuthContext = React.createContext({
  isAuth: false,
  auth: () => {}
});

const AuthContextProvider = props => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authHandler = (isLogin) => {
    setIsAuthenticated(isLogin);
  };

  return (
    <AuthContext.Provider
      value={{ auth: authHandler, isAuth: isAuthenticated }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;