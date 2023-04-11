import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import '../styles/login.scss'
import forgotPassword from "../assets/images/forgot-password.png"
import Google  from '../assets/svg/Google.svg'
import Facebook from '../assets/svg/Facebook.svg';
import Or from '../assets/svg/Or.svg';
import { useState } from 'react';
import NoWorries from '../assets/svg/no-worries.svg'


export default function ForgotPassword() {

  const [ email, setEmail] = useState('');
 
  return (
      <div className='forgot-password'>
      <div>
        <img src={forgotPassword}/>
      
        <img style={{ marginTop:'32px'}} src={NoWorries}/>
        
        <div className='input-control'>
          <form> 
            <div className='input-layout' style={{marginTop:'32px'}}>  
              <label>Email</label>
              <input className="input"
              type="email" />
            </div>
            <button className="reset-btn" type="submit" >
             Reset Password
            </button>
             <p className='back-to-login'>Back to<Link href="/login" variant="body2">Login</Link></p>
          </form>
        </div>
      </div>
    </div>
    
  );
}