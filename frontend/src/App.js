import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Landing from './components/Landing/Landing';
import UserHome from './components/User/UserHome';
import AdminHome from './components/Admin/AdminHome'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/user" component={UserHome} />
        <Route exact path="/admin" component={AdminHome} />
        <Route path="*" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
