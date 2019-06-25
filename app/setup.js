import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from './login';
import Home from './home';
import Details from './details';
import Studentdetails from './studentdetails';
export default class Setup extends Component {

    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="login" component={Login} title="Login" type="replace" hideNavBar initial={true} />
                    <Scene key="details" component={Details} title="Details" type="replace" hideNavBar />
                    <Scene key="home" component={Home} title="Home" type="replace" hideNavBar />
                    <Scene key="studsentdetail" component={Studentdetails} title="Studentdetails" type="replace" hideNavBar />
                </Scene>
            </Router>
        )
    }

}