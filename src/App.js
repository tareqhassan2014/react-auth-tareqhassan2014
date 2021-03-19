import React from "react";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Destination from "./components/Destination/Destination";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LogIn from "./components/LogIn/LogIn";




export default function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/destination'>
          <Destination />
        </Route>
        <Route path='/login'>
          <LogIn />
        </Route>
      </Switch>
    </Router>
  );
}
