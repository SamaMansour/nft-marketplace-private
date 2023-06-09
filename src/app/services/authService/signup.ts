import { useLazyQuery, gql } from '@apollo/client';

export const REGISTER_MUTATION = gql`
  mutation Register($firstName: String!, $email: String!, $password: String!){
    register(registerUserInput:{
      username: $firstName,
      firstName: $firstName,
      lastName: $firstName,
      email: $email,
      password:$password,
      birthDate:"2000-06-30",
      gender:Female
    }),{
      username
    
  }
    
}
`;