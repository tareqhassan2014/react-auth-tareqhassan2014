import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import React, { createContext, useState } from 'react';
import Destination from "./components/Destination/Destination";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SignInSignUpContainer from "./components/SignInSignUpContainer/SignInSignUpContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Blog from "./components/Blog/Blog";


export const UserContext = createContext();



export default function App() {

  const [logedInUser, setLogedInUser] = useState({
    logedInUser: true,
    signinuser: false
  });

  return (
    <UserContext.Provider value={[logedInUser, setLogedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route  path='/home'>
            <Home />
          </Route>
          <Route  path='/blog'>
            <Blog />
          </Route>
          <PrivateRoute path='/vehicle/:id'>
            <Destination />
          </PrivateRoute>
          <PrivateRoute path='/destination'>
            <Destination />
          </PrivateRoute>
          <Route path='/login'>
            <SignInSignUpContainer />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}
