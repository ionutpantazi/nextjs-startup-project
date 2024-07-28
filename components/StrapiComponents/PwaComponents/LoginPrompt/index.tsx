import { ComponentContainer, Container, InnerContainer, Title } from "@/components/Bootstrap/Common"

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
                    <p>{message}, <span data-twe-toggle="modal" data-twe-target="#loginModal"><b>please log in / register.</b></span></p> 
                </ComponentContainer>
            </InnerContainer>
        </Container>
    )
}

export default LoginPrompt;