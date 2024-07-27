import styled, { css } from 'styled-components'

export const Social = styled.div`
  span {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }
  svg {
    color: ${props => props.theme.colors.brand};
  }

  &:hover {
    svg {
      color: ${props => props.theme.colors.brandlight};
    }
  }
`

export const FirstColumn = styled.div`
  padding: 40px 0px;
  gap: 3rem;

  @media screen and (max-width: ${props => props.theme.screens.lg}) {
    padding: 0px 10px 20px 10px;
  }
`

export const SecondColumn = styled.div`
  border-radius: ${props => props.theme.borderRadius.components.large};
  background-color: ${props => props.theme.components?.Section5?.SecondColumnBackgroundColor};
  padding: 40px;

  @media screen and (max-width: ${props => props.theme.screens.lg}) {
    padding: 20px;
  }
`

export const SectionTitle = styled.div`
  font-size: 45px;
  font-weight: 400;
  line-height: 52px;
  color: ${props => props.theme.colors.brand};

  @media screen and (max-width: ${props => props.theme.screens.lg}) {
    font-size: 36px;
    font-weight: 400;
    line-height: 44px;
  }
`

export const SectionSubTitle = styled(SectionTitle)`
  color: ${props => props.theme.colors.white};
`

export const StyledSocial = styled(Social)`
  span {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }

  @media screen and (max-width: ${props => props.theme.screens.lg}) {
    margin-top: 0px;
  }
`

export const DetailsBox = styled.div`
  padding-right: 100px;
  @media screen and (max-width: ${props => props.theme.screens.lg}) {
    margin-top: 40px;
    padding-right: 0px;
  }
`

export const Detail = styled(Social)`
  padding: 24px;
  
  span {
    font-size: 22px;
    font-weight: 600;
    line-height: 28px;
  }
  
  @media screen and (max-width: ${props => props.theme.screens.lg}) {
    span {
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
    }
  }

  border-radius: ${props => props.theme.borderRadius.components.small};
  border-style: solid;
  border-width: 3px;
  border:3px solid transparent;

  &:hover {
    border-radius: ${props => props.theme.borderRadius.components.small};
    border-style: solid;
    border-width: 3px;
    border:3px solid ${props => props.theme.colors.brand};
    background: ${props => props.theme.colors.brandlight};
    svg {
      color: ${props => props.theme.colors.brand};
    }
  }
`

export const InterestsTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`

export const InterestsList = styled.div`
  margin-top: 20px;
`

export const Interest = styled.div <{ active?: any }>`

  span {
    ${({ active }) => css`
      ${props => active == 'true' ? 'color: ' + props.theme.colors.white + ';' : 'color: ' + props.theme.colors.lightgrey + ';'};
    `}
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }

  padding: 18px 26px;
  border-radius: ${props => props.theme.borderRadius.components.small};
  border-style: solid;
  border-width: 2px;
  border:2px solid ${props => props.theme.colors.lightgrey};
  ${({ active }) => css`
    ${props => active == 'true' ? 'border-color: ' + props.theme.colors.brand + ';background: ' + props.theme.colors.brand + ';color: ' + props.theme.colors.white + ';' : ''};
  `}

  &:hover {
    border-radius: ${props => props.theme.borderRadius.components.small};
    border-style: solid;
    border-width: 2px;
    border-color: ${props => props.theme.colors.brandlight};
    ${({ active }) => css`
      ${props => active == 'true' ? 'border-color: ' + props.theme.colors.brandlight + ';background: ' + props.theme.colors.brandlight + ';' : 'border-color: ' + props.theme.colors.brandlight + ';'};
    `}
  }

  @media screen and (max-width: ${props => props.theme.screens.lg}) {
    padding: 10px 16px;
    span {
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;
    }
  }
`

export const Form = styled.div`
  margin-top: 60px;

  @media screen and (max-width: ${props => props.theme.screens.lg}) {
    margin-top: 4 0px;
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
    color: ${props => props.theme.colors.white};
    outline: none;
    border-color: ${props => props.theme.colors.brand};
    &::placeholder {
      color: ${props => props.theme.colors.white};
    }
  }
`

export const SendBtn = styled.div`

  span {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }
  
  @media screen and (max-width: ${props => props.theme.screens.lg}) {
    margin: 40px 0px 0px;
  }

  margin-top: 120px;
  padding: 20px 36px;
  border-radius: ${props => props.theme.borderRadius.components.small};
  background: ${props => props.theme.colors.brand};

  &:hover {
    background: ${props => props.theme.colors.brandlight};
  }
`