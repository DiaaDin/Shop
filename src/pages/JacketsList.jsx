import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import Jackets from '../components/Jackets'

const Container = styled.div`

`


const Title = styled.h1`
text-align: center;
${mobile({marginBottom:"15px"})}

`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
margin: 20px;
${mobile({margin:"0px 20px" , display:"flex", flexDirection:"column"})}

`

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;

`

const Select = styled.select`
padding: 5px;
margin-left: 10px;
${mobile({margin:"10px 0px"})}

`


const Option = styled.option`
font-size: 16px;
padding: 5px;
`
    


const ProductList = () => {
    return (
        <Container>
            <Title>Products</Title>
            <FilterContainer>
                <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option value="Color">Color</Option>
                    <Option>White</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Green</Option>
                    <Option>Yellow</Option>
                </Select>
                <Select>
                <Option value="Sise">Size</Option>
                <Option>Small</Option>
                <Option>Meduim</Option>
                <Option>Large</Option>
                <Option>XLarge</Option>
                </Select>
                </Filter>
                <Filter>
                <FilterText>Sort Products:</FilterText>
                    <Select>

                    <Option value="Newest">Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                    </Select>

                </Filter>
            </FilterContainer>
            <Jackets/> 

        </Container>

    )
}

export default ProductList
