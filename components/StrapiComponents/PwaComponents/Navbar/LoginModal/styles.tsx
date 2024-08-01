import styled, { css } from 'styled-components'

export const ModalContainer = styled.div`
`

export const ModalBody = styled.div`
  background-color: white;
  border-radius: ${props => props.theme.components?.Common?.ComponentContainerBorder};
  padding: 60px 40px 20px;

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    border-radius: 0px;
  }
`

export const ModalContent = styled.div`
  padding: 20px 0px;
`

export const ModalTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  line-height: 34px;
  text-align: center;
  color: ${props => props.theme.colors.black};
`

export const EmailInput = styled.div`
  height: 40px;
`

export const PasswordInput = styled.div`
  height: 40px;

  svg {
    color: ${props => props.theme.colors.brand};
    &:hover {
      cursor: pointer;
      color: ${props => props.theme.colors.brandlight};
    }
  }
`

export const Button = styled.button`
  height: 40px;
  border-radius: ${props => props.theme.borderRadius.small};
  background: ${props => props.theme.colors.brand};
  color: ${props => props.theme.colors.white};

  &:hover {
    background: ${props => props.theme.colors.brandlight};
  }
`

export const StyledText = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  button {
    color: ${props => props.theme.colors.brand};

    &:hover {
      color: ${props => props.theme.colors.brandlight};
    }
  }
`