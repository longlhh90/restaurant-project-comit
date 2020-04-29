import React, { useState, useEffect } from 'react';
import useDataFirebase from '../../hooks/dataFirebase';

import HeaderBox from '../../components/UI/HeaderBox/HeaderBox';
import MenuListing from '../../components/Menu/MenuListing/MenuListing';
import MenuControls from '../../components/Menu/MenuControl/MenuControls';
import LoadingIndicator from '../../components/UI/Spinning/LoadingIndicator';
import Modal from '../../components/UI/Modal/Modal'

const MenuContainer = (props) => {
    const [menu, setMenu] = useState('');
    const [categories, setCategories] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const {
        isLoading,
        error,
        data,
        sendRequest,
        clear
    } = useDataFirebase();

    //Load menu from server
    useEffect(() => {
        const timer = setTimeout(() => {
            sendRequest(
                'https://restaurant-comit.firebaseio.com/menu.json',
                'GET'
            );
        }, 500);
        return () => {
            clearTimeout(timer);
        };
    }, [sendRequest]);

    useEffect(() => {
        if (!isLoading && !error && data) {
            const categories = [];
            for (const key in data) {
                categories.push(key);
            }
            setMenu(data);
            setCategories(categories);
            setSelectedCategory(categories[0]);
        }
    }, [data, isLoading, error]);


    const categoryChangedHandler = (category) => {
        setSelectedCategory(category);
    }

    const toBurgerBuilder = () => {
        props.history.push('/self-made-burger');
    }

    let menuComponent;

    if (isLoading) {
        menuComponent = <LoadingIndicator />
    }

    else if (menu && categories && selectedCategory) {
        menuComponent =
            <React.Fragment>
                <MenuControls
                    categorySelected={categoryChangedHandler}
                    categories={categories}
                    toBurgerBuilder={toBurgerBuilder}
                    activeCategory={selectedCategory}
                    btnType= "ButtonMenu"
                    activeBtnType= "ButtonMenuActive" />

                <MenuListing
                    dishes={menu[selectedCategory]}

                />
            </React.Fragment>
    }

    return (
        <React.Fragment>
            {error && <Modal show bdClicked={clear}>{error}</Modal>}
            <HeaderBox link="menu"
                title="MENU"
                caption="BURGERS & DRINKS"
            >
            </HeaderBox>
            {menuComponent}
        </React.Fragment>
    );
}

export default MenuContainer;