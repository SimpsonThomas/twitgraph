import React from 'react';
import './App.css';

import Navigation from './navigation/navigation.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function routeMaker(item) {
  // returns routes
  return(
      <Route
          key={item.link}
          component={item.component}
          exact path={item.link}
      />
  )
}

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navigation></Navigation>
        <Switch>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
