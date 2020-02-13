import React from 'react';
import './App.css';
import ProfileContainer from './components/ProfileContainer';
import Careers from './components/Careers';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={ProfileContainer}/>
      <Route exact path='/aboutus' component={ProfileContainer}/>
      <Route exact path='/careers' component={Careers}/>
    </Switch>
    </div>
  );
}

export default App;
