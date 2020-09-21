import React, { Component } from 'react';
import {Provider} from 'react-redux'
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//import { applyMiddleware } from 'redux';
//import {createStore, applyMiddleware} from 'redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser} from './actions/authActions';
import store from './store';
import Welcome from '../src/Welcome';

if(localStorage.jwtToken){
  //set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and is authenticated
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
  render() {
  return (
    <Provider store = {store}>
    <Router>
    <div className="App">
      <Navbar/>
      <div className="container">
      <Route exact path='/register' component={Register}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path="/Welcome" component={Welcome}/>

      </div>
      <Footer/>
    </div>
    </Router>
    </Provider>

  );
  }
}
export default App;
