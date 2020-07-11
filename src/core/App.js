import React from 'react';
import './App.css';

import Navigation from './navigation/navigation.js'
import pageList from '../constants/pages'

import {
  BrowserRouter as Router,
  Switch,
  Route,
//  Link
} from "react-router-dom";

import notFound from '../pages/notFound';
import home from '../pages/home';


class App extends React.Component {
  routeMaker(item) {
    // returns routes
    return(
        <Route
            key={item.link}
            component={item.component}
            exact path={item.link}
        />
    )
  }
  
  render() {
    return (
      <div className="App">
        
        <Router>
          <Navigation></Navigation>
            <div className='mainApp'>
              <Switch>
                <Route exact path="/" component={home}/>
                { pageList.map(page => this.routeMaker(page)) }
                <Route 
                  component={notFound}
                  path="*"
                />
              </Switch>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
