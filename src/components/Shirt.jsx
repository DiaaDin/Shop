import React from 'react'
import styled from 'styled-components'
import {Shirt} from '../data'
import Product from './Product'



const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

`

const Section = styled.section`
text-align: center;
`






const Products = () => {
    return (
        <Section>
        <Container>
            {Shirt.map(item =>(
                <Product item={item} key={item.id}/>
            ))}
        </Container>
       </Section>
    )
}

export default Products
