import React, { useState } from 'react';
import { RegisterAPI } from '../api/AuthAPI';
import '../Sass/LoginComponent.scss';

export default function LoginComponent() {
  const [credentials, setCredentials] = useState({});
  const login = () => {
    try {
      let res = RegisterAPI(credentials.email, credentials.password)
      console.log(res);
    }
    catch (err) {} 
  };
    return (
      <div className='login-wrapper'>
        <h1>LoginComponent</h1>
        <div className='auth-inputs'>
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            className='common-input'
            placeholder='Enter Your Email'
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            className='common-input'
            placeholder='Enter your password'
          />
        </div>
        <button onClick={login} className='login-btn'>
          Log in to Linkedin
        </button>
      </div>
    );
  }
  
  