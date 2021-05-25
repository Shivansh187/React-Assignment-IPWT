import React from 'react';

import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle';

import {Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './components/navbar';
import Resume1 from './pages/resume1';
import Resume2 from './pages/resume2';
import Home from './pages/home';
import Resume3 from './pages/resume3';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component = {Home}></Route>,
        <Route exact path="/resume1" component = {Resume1}></Route>,
        <Route exact path="/resume2" component = {Resume2}></Route>,
        <Route exact path="/resume3" component = {Resume3}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
