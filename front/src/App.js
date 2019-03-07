import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import RouterApp from './app/router'
import './App.css';

class App extends Component {
    render() {
        return (            
            <div className="app_container">
                <Router>
                    <Route path="" component={RouterApp}/>
                </Router>
            </div>
        );
    }
}

export default App;
