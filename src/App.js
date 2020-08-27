import React from 'react';
import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './pages/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* "/" means the main page itself */}
          <Route path="/SignUp">
            <SignUp/>
          </Route>
          <Route path="/SignIn">
            <SignIn/>
          </Route>
          {/* the home , "/" should always be placed at the last as it checks for each switch and will find it at first */}
          <Route path="/">
            <Header />
            <Home/>
            <About/> 
            <Contact/>                       
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
