import { ComponentContainer, Container, InnerContainer, Title } from "@/components/Bootstrap/Common"
import styled from "styled-components";

const LoginButton = styled.span`
    :hover {
        cursor: pointer;
    }
`

const LoginPrompt = ({
    title,
    message,
}: any) =>
{
    return (
        
        <Container>
            <InnerContainer>
                <ComponentContainer>
                    <Title>{title}</Title>
                    <br></br>
                    <p>{message}, <LoginButton data-twe-toggle="modal" data-twe-target="#loginModal"><b>please log in / register.</b></LoginButton></p> 
                </ComponentContainer>
            </InnerContainer>
        </Container>
    )
}

export default LoginPrompt;