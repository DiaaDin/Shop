import styled from "styled-components"

const Container = styled.div`
    height:30px;
    background-color: crimson;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
`

const Announcement = () => {
    return (
        <Container>
           Super Deal! Free Shipping on Orders Over 200 EGP 
        </Container>
    )
}

export default Announcement
