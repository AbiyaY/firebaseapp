import React,{useState} from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";

import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//FireBase
import firebase from "firebase/app";
import "firebase/auth";

//react-router-dom
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

//components
import Home from "./components/Pages/Home";
import Register from "./components/Pages/Register";
import Signin from "./components/Pages/Signin";
import PageNotFound from "./components/Pages/PageNotFound";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
//Context
import {UserContext} from './components/context/UserContext';

//firebase init
import firebaseConfig from "./components/Config/firebaseConfig";
firebase.initializeApp(firebaseConfig);


const App = () => {

  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value= {{user, setUser}}>
      <Header /> 
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Signin" component={Signin} />
        <Route exact path="*" component={PageNotFound} />
      </Switch>
      <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
