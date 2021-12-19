import { Facebook, Instagram, Mail, Phone, Room, Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({flexDirection: "column"})}

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #${(props) => props.color};
  margin-right: 10px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display: "none"})}

`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({backgroundColor: "#e6e6e6"})}

`;

const ContactItem = styled.div`
margin-bottom: 10px;
display: flex;
align-items: center;
`
  


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SHOP.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          veritatis saepe ullam explicabo error provident dolore porro
          dignissimos enim rerum!
        </Desc>
        <SocialContainer>
          <SocialIcon color="1877F2">
            <Facebook />
          </SocialIcon>

          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>

          <SocialIcon color="1DA1F2">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{marginRight:"10px"}}/> Mansoura, Egypt</ContactItem>
        <ContactItem><Phone style={{marginRight:"10px"}}/> +201 012 3457</ContactItem>
        <ContactItem><Mail style={{marginRight:"10px"}}/> contact@Diaa.Developer</ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
