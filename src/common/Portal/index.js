import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Tmp from '../../component/Tmp'
// import NoMatch from '../ErrorPage';

export default class Portal extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Redirect exact from="/" to="/tmp" />
                    <Route path="/tmp" component={Tmp} />
                    {/* <Route render={() => (<NoMatch />)} /> */}
                </Switch>
            </Router>
        )
    }
}