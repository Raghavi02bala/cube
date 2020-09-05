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
import SignUp from './pages/SignUp';



function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* "/" means the main page itself */}
          {/* the home , "/" should always be placed at the last as it checks for each switch and will find it at first */}
          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>                     
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
