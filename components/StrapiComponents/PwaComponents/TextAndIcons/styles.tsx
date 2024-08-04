import styled, { css } from 'styled-components'

export const TextAndIconsContainer = styled.div`
`

export const FirstColumn = styled.div`
`

export const SecondColumn = styled.div`
`

export const TitleContainer = styled.div`
`

export const Icon = styled.div`
  color: ${props => props.theme.colors.brand};
`

export const DescriptionContainer = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  padding-top: 20px;
  color: ${props => props.theme.components?.TextAndIcons?.DescriptionContainerColor};
`

export const SectionTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`

export const IconsContainer = styled.div`
  padding-top: 10px;
`

export const IconButton = styled.div <{ active?: any }>`
  padding: 18px 26px;

  ${({ active }) => css`
    ${props => active == 'true' ? 'border-color: ' + props.theme.colors.brand + ';border-radius: ' + props.theme.borderRadius?.components?.small + ';border-style: solid; border-width: 2px;' : 'border:2px solid rgba(0,0,0,0);'};
  `}
  
  span {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }

  svg {
    color: ${props => props.theme.colors.brand};
  }

  &:hover {
    border-radius: ${props => props.theme.borderRadius?.components?.small};
    border-style: solid;
    border-width: 2px;
    border-color: ${props => props.theme.colors.brandlight};
    svg {
      color: ${props => props.theme.colors.brandlight};
    }
  }

  @media screen and (max-width: ${props => props.theme.screens.md}) {
    padding: 10px 20px;
    span {
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
    }
  }
`

export const DatesContainer = styled.div`
  // display: flex;
  justify-content: flex-end;

  @media screen and (max-width: ${props => props.theme.screens.md}) {
    justify-content: center;
  }
`

export const DateContainer = styled.div <{ active?: any }>`
  border-radius: ${props => props.theme.borderRadius?.components?.small};
  background-color: ${props => props.theme.components?.Agenda?.AgendaItemBackground};
  padding: 20px;
  text-align: center;
  width: 160px;
  height: 160px;

  ${({ active }) => css`
    ${props => active == 'true' ? 'border-color: ' + props.theme.colors.brand + ';border-style: solid; border-width: 2px;' : 'border:2px solid rgba(0,0,0,0);'};
  `}

  .agendaDayNumber {
    color: ${props => props.theme.colors.brand};
  }

  &:hover {
    cursor: pointer;
    border-radius: ${props => props.theme.borderRadius?.components?.small};
    border-style: solid;
    border-width: 2px;
    border-color: ${props => props.theme.colors.brandlight};
    .agendaDayNumber {
      color: ${props => props.theme.colors.brandlight};
    }
  }
`

export const AgendaDay = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`

export const AgendaDayNumber = styled.div`
  font-size: 36px;
  font-weight: 400;
  line-height: 44px;
`

export const SocialsContainer = styled.div`
  padding-top: 10px;
`

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