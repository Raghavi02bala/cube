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

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* "/" means the main page itself */}
          <Route path="/about">
            <About/>
          </Route>
          {/* the home , "/" should always be placed at the last as it checks for each switch and will find it at first */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
