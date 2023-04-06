import { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';

const LOG_IN_QUERY = gql`
  query LogIn($username: String!, $password: String!) {
    query{
      login(loginInput:{
        username:$username,
        password:$password,
       
      }),{
       accessToken
  
      }}

  }
`;