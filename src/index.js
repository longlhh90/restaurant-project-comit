import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import burgerBuilderReducer  from './store/reducers/burgerBuilder';
import bookingFormReducer from './store/reducers/bookingForm';
import dishFormReducer from './store/reducers/dishForm';
import AuthContextProvider from './context/auth-context';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    bookingForm: bookingFormReducer,
    dishForm: dishFormReducer
});

const store = createStore(rootReducer); //, process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : null);

const app = (
    <AuthContextProvider>
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    </AuthContextProvider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
