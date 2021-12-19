import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {mobile} from "../responsive"


const Container = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
flex: 1;
margin: 3px;
height: 70vh; 
position: relative;

`

const Img = styled.img`
width: 100%;
height: 100%; 
object-fit:cover;
object-position: top;
${mobile({height: "50vh"})}

`

const Info = styled.div`
width: 100%;
height: 100%;
position: absolute;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const Title = styled.h1`
font-size: 35px;
color: white;
margin-bottom: 20px;
`

const Button = styled(Link)`
padding: 10px;
font-size: 16px;
color: #171717;
background-color: #FFF;
cursor: pointer;
border: 1px solid #FFF;
text-decoration: none;
`



const CategoryItem = ({item}) => {
    return (
        <Container>
           <Img src={item.img}/>
           <Info>
               <Title>{item.title}</Title>
               <Button to={item.to}>SHOP NOW</Button>
            </Info> 
        </Container>
    )
}

export default CategoryItem
