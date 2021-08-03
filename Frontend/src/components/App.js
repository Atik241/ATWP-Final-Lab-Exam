import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './Home';
import EditCategory from './EditCategory';
import Login from './Login'
import Register from './Register'
import AdminHome from './AdminHome'
import EmployeeHome from './EmployeeHome'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
              <Login/>
          </Route>
          <Route exact path="/admin">
              <AdminHome/>
          </Route>
          <Route exact path="/employee">
              <EmployeeHome/>
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;

