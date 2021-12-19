import React from 'react'
import styled from 'styled-components'
import { Favorite, Search, ShoppingCart } from "@material-ui/icons";
import { mobile } from '../responsive';






const Info = styled.div`
opacity:0;
width: 100%;
height: 100%;
position: absolute;
top:0;
left:0;
display: flex;
align-items: center;
justify-content: center;
transition: all .3s linear;
background-color: rgba(0,0,0, 0.7);
`

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
flex: 1;
margin: 5px;
min-width: 280px;
height: 280px;
background-color: #fcf1ed;
${mobile({width: "200px", height:"200px"})}

&:hover ${Info}{
    opacity:1;
}
`

const Img = styled.img`
height: 80%;
margin-top: 25px;
`

const Icon = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #fff;
width: 40px;
height: 40px;
border-radius: 50%;
margin: 5px;
cursor: pointer;
transition: all .3s linear;

&:hover{
    transform: scale(1.1);
}
`


const Product = ({item}) => {
    return (
       
        <Container>
            <Img src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCart/>
                </Icon>
                <Icon>
                    <Search/>
                </Icon>
                <Icon>
                    <Favorite/>
                </Icon>
            </Info>
        </Container>
      
    )
}

export default Product
