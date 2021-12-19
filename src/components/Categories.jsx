import React from 'react'
import styled from 'styled-components'
import {categories} from '../data'
import CategoryItem from './CategoryItem'
import {mobile} from "../responsive"


const Section =styled.section`
    display: flex;
    flex-direction: column;
    
`

const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${mobile({flexDirection: "column" , padding:"0px"})}

`

const Title = styled.h1`
    text-align: center;
    margin: 15px 0;
    font-size: 30px;

`



const Categories = () => {
    return (
        <Section>

            <Title>Categories</Title>
        <Container>
            {categories.map (item =>(
                <CategoryItem item={item} key={item.id}/>
            ))}
        </Container>
        </Section>
    )
}

export default Categories
