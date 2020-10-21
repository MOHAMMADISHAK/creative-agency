import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Orderdashboard from './components/Order/Orderdashboard/Orderdashboard';
import Orderadd from './components/Order/Orderadd/Orderadd';
import Orderreview from './components/Order/Orderreview/Orderreview';
import Addservice from './components/Service/Addservice/Addservice';
import Servicelist from './components/Service/Servicelist/Servicelist';
import Makeadmin from './components/Service/Makeadmin/Makeadmin';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

    <Router>

      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
    
        
        <PrivateRoute path="/order/:worktitle">
          <Orderadd></Orderadd>
        </PrivateRoute>
        <PrivateRoute path="/orderdashboard">
          <Orderdashboard></Orderdashboard>
        </PrivateRoute>
        <PrivateRoute path="/orderreview">
          <Orderreview></Orderreview>
        </PrivateRoute>
        <PrivateRoute path="/addService">
            <Addservice></Addservice>
          </PrivateRoute>
        <PrivateRoute path="/servicelist">
          <Servicelist></Servicelist>
        </PrivateRoute>
        <PrivateRoute path="/makeadmin">
          <Makeadmin></Makeadmin>
        </PrivateRoute>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </UserContext.Provider>
  );
}

export default App;
