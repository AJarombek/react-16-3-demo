/**
 * Bootstrap React onto the DOM at the 'root' id.
 * @author Andrew Jarombek
 * @since 11/14/2019
 */

import 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import App from "./App";
import ContextDemo from "./ContextDemo";
import CreateRefDemo from "./CreateRefDemo";
import ForwardRefDemo from "./ForwardRefDemo";
import NewLifecycleDemo from "./NewLifecycleDemo";
import StrictModeDemo from "./StrictModeDemo";

const RoutedApp = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/context" component={ContextDemo} />
                <Route exact path="/create-ref" component={CreateRefDemo} />
                <Route exact path="/forward-ref" component={ForwardRefDemo} />
                <Route exact path="/new-lifecycle" component={NewLifecycleDemo} />
                <Route exact path="/strict-mode" component={StrictModeDemo} />
            </Switch>
        </Router>
    );
};

ReactDOM.render(<RoutedApp />, document.getElementById('root'));
