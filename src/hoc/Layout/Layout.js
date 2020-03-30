import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/UI/Footer/Footer';

class Layout extends Component {
    state = {
        showSideDrawer : false
    }
    sideDrawerClosedHandler = (boolean) => {
        this.setState({showSideDrawer: boolean})
    }
    render() {
        return (
            <React.Fragment>
                <SideDrawer open={this.state.showSideDrawer} closed={() => this.sideDrawerClosedHandler(false)}/>
                <Toolbar open={() => this.sideDrawerClosedHandler(true)}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Layout;