import React from 'react';
import './login.css'
import bg_sign from '../img/bg_sign.jpg';
import Component from './Component_login.js'; 

function login() {
  return (
    <div>
      <img src={bg_sign} className="background" /> 
      <div className="component">
        <Component/>        
      </div>     
    </div>
  );
}

export default login;
