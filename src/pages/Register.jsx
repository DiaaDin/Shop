import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(rgba(225,225,225,0.7), rgba(225,225,225,0.7)), url("https://images.pexels.com/photos/963696/pexels-photo-963696.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
background-position: center;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
${mobile({minHeight:"100vh"})}

`;

const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: #FFF;
${mobile({width:"80%"})}

`;

const Titel = styled.h1`
font-size: 24px;
font-weight: 300;
${mobile({fontSize:"20px"})}

`;

const Form = styled.form`
display: flex;
flex-wrap: wrap;
text-align: center;
`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0 0;
padding: 10px;
font-size: 20px;
${mobile({fontSize:"12px", padding:"8px"})}

`;

const Agreement = styled.span`
font-size: 15px;
margin: 20px 0;
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
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Titel>New Here ?</Titel>
        <Form>
          <Input placeholder="name"></Input>
          <Input placeholder="last name"></Input>
          <Input placeholder="username"></Input>
          <Input placeholder="email" type="email"></Input>
          <Input placeholder="password" type="password"></Input>
          <Input placeholder="confirm password" type="password"></Input>
          <Agreement>
            By Creating an account, i consent to the processing of my personal
            data on accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
