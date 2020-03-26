import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

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
            </React.Fragment>
        )
    }
}

export default Layout;