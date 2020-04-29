import React, { useState, useReducer, useEffect, useCallback, useMemo } from 'react';

import DishForm from './DishForm/DishForm';
import DishesList from './DishList/DishesList';
import Categories from './CategoriesSelector/Categories';
import Modal from '../../UI/Modal/Modal';
// import Search from './Search';
import useDataFirebase from '../../../hooks/dataFirebase';

const dishReducer = (currentdishes, action) => {
    switch (action.type) {
        case 'SET':
            return action.dishes;
        case 'ADD':
            return [...currentdishes, action.dish];
        case 'DELETE':
            return currentdishes.filter(e => e.id !== action.id);
        default:
            throw new Error('Something is wrong!');
    }
};

const Dishes = () => {
    const [category, setCategory] = useState('burgers');

    const [Dishes, dispatch] = useReducer(dishReducer, []);
    const {
        isLoading,
        error,
        data,
        sendRequest,
        reqExtra,
        reqIdentifer,
        clear
    } = useDataFirebase();

    useEffect(() => {
        if (!isLoading && !error && reqIdentifer === 'REMOVE_DISH') {
            dispatch({ type: 'DELETE', id: reqExtra });
        } else if (!isLoading && !error && reqIdentifer === 'ADD_DISH') {
            dispatch({
                type: 'ADD',
                dish: { id: data.name, ...reqExtra }
            });
        }
    }, [data, reqExtra, reqIdentifer, isLoading, error]);

    //Add dish to database on server
    const addDishHandler = useCallback(dish => {
        sendRequest(
            `https://restaurant-comit.firebaseio.com/menu/${category}.json`,
            'POST',
            JSON.stringify(dish),
            dish,
            'ADD_DISH'
        );
    }, [category, sendRequest]);

    //Remove dish to database on server
    const removeDishHandler = useCallback(
        dishId => {
            sendRequest(
                `https://restaurant-comit.firebaseio.com/menu/${category}/${dishId}.json`,
                'DELETE',
                null,
                dishId,
                'REMOVE_DISH'
            );
        },
        [category, sendRequest]
    );

    //Load dishes from server

    useEffect(() => {
        const timer = setTimeout(() => {
            sendRequest(
                `https://restaurant-comit.firebaseio.com/menu/${category}.json`,
                'GET'
            );
        }, 500);
        return () => {
            clearTimeout(timer);
        };
    }, [category, sendRequest]);

    const filteredDishesHandler = useCallback(filteredDishes => {
        dispatch({ type: 'SET', dishes: filteredDishes });
    }, []);

    useEffect(() => {
        if (!isLoading && !error && data && reqIdentifer !== 'ADD_DISH' && reqIdentifer !== 'REMOVE_DISH') {
            const loadedDishes = [];
            for (const key in data) {
                loadedDishes.push({
                    id: key,
                    dishName: data[key].dishName,
                    imgURL: data[key].imgURL,
                    price: data[key].price,
                    dishDesc: data[key].dishDesc
                });
            }
            filteredDishesHandler(loadedDishes);
        }
    }, [data, isLoading, error, filteredDishesHandler]);

    const dishesList = useMemo(() => {
        return (
            <DishesList
                dishes={Dishes}
                onRemoveItem={removeDishHandler}
                loading={isLoading}
            />
        )
    }, [Dishes,removeDishHandler]);

    return (
        <React.Fragment>
            {error && <Modal show bdClicked={clear}>{error}</Modal>}
            <Categories category={category} changed={event => setCategory(event.target.value)} />
            <DishForm
                onAddDish={addDishHandler}
                loading={isLoading}
            />
            {dishesList}

        </React.Fragment>
    );

}

export default Dishes;