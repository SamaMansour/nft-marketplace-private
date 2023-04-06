import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import LogoTitle from "../assets/images/LogoTitle.png"
import LoginTitle from "../assets/images/LoginTitle.png"
import '../styles/login.scss'
import LoginwithSocial from '../assets/svg/LoginwithSocial.svg';
import OrLoginwithemail from '../assets/svg/OrLoginwithemail.svg';
import Google  from '../assets/svg/Google.svg'
import Facebook from '../assets/svg/Facebook.svg';
import Or from '../assets/svg/Or.svg';
import { REGISTER_MUTATION } from '../services/authService/signup';
import { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';


export default function Login() {

  const [ firstName, setFirstName] = useState(null);
  const [ email, setEmail] = useState(null);
  const [ password, setPassword] = useState(null);


  return (
      <div className='signup'>
      <div>
        <img src={LoginTitle}/>
        <img  style={{marginLeft:'8px', marginBottom: '5px'}}src={LogoTitle}/>
        <p className='subtitle'>Connect with one of your avalible wallet providers</p>
        <img style={{ marginTop:'32px'}} src={LoginwithSocial}/>

        <div style={{marginTop:'32px'}}>
          <span><img src={Google}/></span>
          <span><img style={{marginLeft: '32px'}} src={Facebook}/></span>
        </div>

        <img style={{ marginTop:'32px'}} src={OrLoginwithemail}/>
        
        <div className='input-control'>
          <form> 
            <div className='input-layout' style={{marginTop:'32px'}}>  
              <label>Email Address</label>
              <input className="input"
              type="email" />
            </div>
              <div className='input-layout'style={{marginTop:'24px'}}>
                <label>Password</label>
                <input className="password-layout-input" type="password" />
              </div>
              <div className="remember-me">
                <FormControlLabel className='remember-me-checkbox'
                      control={<Checkbox className='uncheck' value="allowExtraEmails" color="primary" />}
                      label="Remember me"
                />
                <Link href="#" variant="body2">
                  Forgot Password?
                </Link>
              </div>
            <button className="btn" type="submit" >
             Login
            </button>
             <p>Don't have an account?<Link href="#" variant="body2">Sign up</Link></p>
          </form>
        </div>
      </div>
    </div>
    
  );
}