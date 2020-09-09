import React from 'react';
import './SignUp.css'
import bg_sign from '../img/bg_sign.jpg';
import Component from './Component.js'; 

function SignUp() {
  return (
    <div>
      <img src={bg_sign} className="background" /> 
      <div className="component">
        <Component/>        
      </div>     
    </div>
  );
}

export default SignUp;
