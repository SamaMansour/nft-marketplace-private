import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import LogoTitle from "../assets/images/LogoTitle.png"
import Title from "../assets/images/Title.png"
import '../styles/signup.scss'
import Loginwith from '../assets/svg/Login-with.svg'
import Google  from '../assets/svg/Google.svg'
import Facebook from '../assets/svg/Facebook.svg';
import Or from '../assets/svg/Or.svg';
import { REGISTER_MUTATION } from '../services/authService/signup';
import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

export default function SignUp() {

  const [ firstName, setFirstName] = useState('');
  const [ email, setEmail] = useState('');
  const [ password, setPassword] = useState('');
  const [ confirmPassword, setConfirmPassword] = useState('');

  const [signUp, { loading, error, data }]
    = useMutation(REGISTER_MUTATION);
  return (
      <div className='signup'>
      <div>
        <img src={Title}/>
        <img  style={{marginLeft:'8px', marginBottom: '5px'}}src={LogoTitle}/>
        <p className='subtitle'>Connect with one of your avalible wallet providers</p>
        <img style={{ marginTop:'32px'}} src={Loginwith}/>

        <div style={{marginTop:'32px'}}>
          <span><img src={Google}/></span>
          <span><img style={{marginLeft: '32px'}} src={Facebook}/></span>
        </div>

        <img style={{ marginTop:'32px'}} src={Or}/>
        
        <div className='input-control'>
          <form onSubmit= {() => signUp({ variables: { firstName, email, password } })
          .then(()=> console.log("sent")).catch((error)=> console.log(error))}>

            <div className='input-layout' style={{marginLeft: '14px'}}>
              <label> First Name</label>
                <input className="input"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                type="text" />
            </div>
            
            <div className='input-layout' style={{marginTop:'24px', marginLeft:'14px'}}>  
              <label>Email</label>
              <input className="input"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email" />
            </div>
            <div className='password-layout' style={{marginTop:'48px'}}>
              <div className='password'>
                <label>Password</label>
                <input className="password-input"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password" />
              </div>
              <div className='password'>
                <label>Confirm Password</label>
                <input className="password-input" type="password" />
              </div>
            </div>
            <FormControlLabel className='agreement'
                  control={<Checkbox className='uncheck' value="allowExtraEmails" color="primary" />}
                  label="I agree to all Terms and conditions and Privacy Policy"
            />
            <button className="btn" type="submit">
             Create An Account
            </button>
           
            <p>Already have an account?  <Link href="/login" variant="body2">Sign in</Link></p>
          </form>
        </div>
      </div>
    </div>
    
  );
}