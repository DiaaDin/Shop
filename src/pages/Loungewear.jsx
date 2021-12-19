import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import { mobile, tab } from "../responsive";
import DressesList from "./DressesList"

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
         
${mobile({flexDirection:"column", padding:"10px"})}

`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Img = styled.img`
  width: 100%;
  height: 85vh;
  object-fit: cover;
${mobile({height:"60vh" ,objectPosition:"top"})}
${tab({height:"80vh" ,objectPosition:"top"})}


`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
${mobile({padding:"10px"})}

`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
width: 50%;
margin: 30px 0;
display: flex;
justify-content: space-between;
${mobile({width:"100%"})}

`

const Filter = styled.div`
display: flex;
align-items: center;
`

const FilterTitle = styled.div`
font-size: 20px;
font-weight: 200;
`

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props=> props.color)};
margin: 0 5px;
cursor: pointer;
`

const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`

const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({width:"100%"})}
Cursor: Pointer;

`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 40%;
border: 1px solid crimson;
display: flex;
align-items: center;
justify-content: center;
margin: 0 5px;
`
const Button = styled.button`
padding: 10px;
font-size: 15px;
background-color: transparent;
cursor: pointer;
border: 1.5px solid crimson;
font-weight: 500;
`

const Product = () => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Img src="https://i.ibb.co/yyG80qB/jump.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            quod odio tenetur voluptates suscipit hic assumenda quasi cum
            delectus quo aperiam, unde excepturi at similique praesentium enim
            voluptate ad culpa!
          </Desc>
          <Price>150 EGP</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"></FilterColor>
              <FilterColor color="darkblue"></FilterColor>
              <FilterColor color="gray"></FilterColor>
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>Small</FilterSizeOption>
                <FilterSizeOption>Meduim</FilterSizeOption>
                <FilterSizeOption>Large</FilterSizeOption>
                <FilterSizeOption>XLarge</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
              <AmountContainer>
              <Remove/>
              <Amount>1</Amount>
              <Add/>
              </AmountContainer>
              <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <DressesList/>
      
    </Container>
  );
};

export default Product;
