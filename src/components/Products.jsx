import React from 'react'
import styled from 'styled-components'
import {popularProducts} from '../data'
import Product from './Product'



const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

`
const Title = styled.h1`
font-size: 30px;
margin: 15px 0;
`
const Section = styled.section`
text-align: center;
`






const Products = () => {
    return (
        <Section>
            <Title>Popular Products</Title>
        <Container>
            {popularProducts.map(item =>(
                <Product item={item} key={item.id}/>
            ))}
        </Container>
       </Section>
    )
}

export default Products
