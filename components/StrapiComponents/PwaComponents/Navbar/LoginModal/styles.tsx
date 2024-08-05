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
  font-size: 57px;
  font-weight: 400;
  line-height: 60px;
  color: ${props => props.theme.colors.brand};

  @media screen and (max-width: ${props => props.theme.screens.lg}) {
    font-size: 36px;
    line-height: 40px;
  }
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

// export const Button = styled.button`
//   height: 40px;
//   border-radius: ${props => props.theme.borderRadius.small};
//   background: ${props => props.theme.colors.brand};
//   color: ${props => props.theme.colors.white};

//   &:hover {
//     background: ${props => props.theme.colors.brandlight};
//   }
// `

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

export const StyledInput = styled.input`
  background: transparent;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: ${props => props.theme.colors.lightgrey};
  outline: 0;
  border-width: 0 0 3px;
  border-color: ${props => props.theme.colors.lightgrey};
  padding-bottom: 4px;

  &::placeholder {
    color: ${props => props.theme.colors.lightgrey};
  }

  &:focus{
    color: ${props => props.theme.colors.brand};
    outline: none;
    border-color: ${props => props.theme.colors.brand};
    &::placeholder {
      color: ${props => props.theme.colors.brand};
    }
  }
`

export const PasswordContainer = styled.div`
  svg {
    color: ${props => props.theme.colors.brand};
    &:hover {
      cursor: pointer;
      color: ${props => props.theme.colors.brandlight};
    }
  }
`

export const Button = styled.button`
  span {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: ${props => props.theme.colors.white};
  }
  
  @media screen and (max-width: ${props => props.theme.screens.lg}) {
    padding: 14px 30px;
  }

  padding: 20px 36px;
  border-radius: ${props => props.theme.borderRadius.components.small};
  background: ${props => props.theme.colors.brand};

  &:hover {
    background: ${props => props.theme.colors.brandlight};
  }
`