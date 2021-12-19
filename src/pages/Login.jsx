import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"
import { Link } from 'react-router-dom';

const Container = styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(rgba(225,225,225,0.7), rgba(225,225,225,0.7)), url("https://images.pexels.com/photos/975006/pexels-photo-975006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
background-position: center;
background-size: cover;

display: flex;
justify-content: center;
align-items: center;
`;

const Wrapper = styled.div`
width: 30%;
padding: 20px;
background-color: #FFF;
${mobile({width:"75%"})}
`;

const Titel = styled.h1`
font-size: 24px;
font-weight: 300;
${mobile({fontSize:"20px"})}

`;

const Form = styled.form`
display: flex;
flex-direction: column;
`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0;
padding: 10px;
font-size: 20px;
${mobile({fontSize:"15px"})}

`;



const Button = styled.button`
width: 40%;
padding: 10px;
font-size: 15px;
background-color: crimson;
color: white;
cursor: pointer;
border: none;
font-weight: 500;
margin-bottom: 5px;
`;

const LoginLink = styled(Link)`
  margin: 5px  0;
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
  color: #000;
`



const Login = () => {
    return (
        <Container>
        <Wrapper>
          <Titel>One Of Us ?</Titel>
          <Form>
            <Input placeholder="username"></Input>
            <Input placeholder="password" type="password"></Input>
            <Button>Login</Button>
            <LoginLink to="/ForgotPassword">Forgot Your Password ?</LoginLink>
            <LoginLink to="/Register">Create A New Account</LoginLink>
          </Form>
        </Wrapper>
      </Container>
    )
}

export default Login
