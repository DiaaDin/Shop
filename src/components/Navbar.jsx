import { Badge } from "@material-ui/core";
import { Search, ShoppingCart } from "@material-ui/icons";
import React from "react";
import styled from "styled-components"; 
import {mobile} from "../responsive"
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  background-color: white;
  color: black;
  
  ${mobile({height: "50px"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding: "10px 0"})}

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Lang = styled.span`
  font-size: 14px;
  cursor: pointer;

  ${mobile({display: "none"})}

`;

const SearchContainer = styled.div`
    border: .5px solid lightgray;
    display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({marginLeft: "5px"})}

`

const Input = styled.input`
border: none;
outline: none;

${mobile({width: "50px"})}

`

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled(Link)`
font-weight: bold;
font-size: 25px;
text-decoration: none;
color: #000;
${mobile({fontSize: "20px"})}


`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({justifyContent: "center" , flex: 2})}

`;

const MenuItem = styled(Link)`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
text-decoration: none;
color:#000;
${mobile({fontSize: "12px", marginLeft: "10px" })}

`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Lang>EN</Lang>
          <SearchContainer>
              <Input placeholder="Search"></Input>
              <Search style={{
                  color: "gray", fontSize:16,cursor:"pointer"}}></Search>
          </SearchContainer>
        </Left>
        <Center><Logo to="/">Shop.</Logo></Center>
        <Right>
            <MenuItem to="/Register">REGISTER</MenuItem>
            <MenuItem to="/Login">SIGN IN</MenuItem>
            <MenuItem to="/Cart">
            <Badge badgeContent={4} color="primary">
      <ShoppingCart />
    </Badge>
            </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
