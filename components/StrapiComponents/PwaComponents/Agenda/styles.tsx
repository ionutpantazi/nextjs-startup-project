import styled, { css } from 'styled-components'
import NextImage from 'next/image'

export const AgendaContainer = styled.div`
`

export const AgendaTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
`

export const AgendaInnerContainer = styled.div`
`

export const AgendaItem = styled.div`
  padding: 16px;
  background: ${props => props.theme.components?.Agenda?.AgendaItemBackground};
  border-radius: ${props => props.theme.borderRadius?.components?.small};
`

export const DateBox = styled.div`
  border-radius: ${props => props.theme.borderRadius?.components?.small};
  background-color: ${props => props.theme.components?.Agenda?.AgendaItemDateBackground};
  padding: 10px;
  text-align: center;
  width: 140px;
  height: 140px;
`

export const AgendaDateFrom = styled.div`
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  color: ${props => props.theme.colors.brand};
`

export const AgendaDateTo = styled.div`
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
  color: ${props => props.theme.colors.lightgrey};
`

export const DateAndRoomBox = styled.div`
`

export const AgendaDateRoom = styled.div`
  span {
    padding-left: 8px;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
  }
  @media screen and (max-width: ${props => props.theme.screens.md}) {
    span {
      font-size: 11px;
      font-weight: 500;
      line-height: 16px;
    }
  }
`

export const DetailsBox = styled.div`
`

export const AgendaItemTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  @media screen and (max-width: ${props => props.theme.screens.md}) {
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
  }
`

export const AgendaItemSubTitle = styled.div`
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  color: ${props => props.theme.colors.lightgrey};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media screen and (max-width: ${props => props.theme.screens.md}) {
    font-size: 12px;
    font-weight: 300;
    line-height: 16px;
  }
`

export const AgendaTag = styled.div`
  border-radius: ${props => props.theme.borderRadius.components.xsmall};
  background-color: ${props => props.theme.colors.grey};
  padding: 4px;
  font-size: 8px;
  font-weight: 500;
  line-height: 11px;
`

export const ParticipantsBox = styled.div`
`

export const Participants = styled.div`
`

export const ParticipantsText = styled.div`
  font-size: 10px;
  font-weight: 300;
  line-height: 13px;
  color: ${props => props.theme.colors.lightgrey};
`

export const ImageIcon = styled.div`
  width: 30px;
  height: 30px;
  background: ${props => props.theme.colors.brand};
  border-radius: 50%;
  position: relative;
  z-index: 1;
  svg {
    color: ${props => props.theme.colors.white};
  }
`

export const StyledNextImage = styled(NextImage)`
  margin-left: -10px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  z-index: 2;
`

export const ButtonsBox = styled.div`
`

export const Button1 = styled.div`
  span {
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
  }
  svg {
    color: ${props => props.theme.colors.brand};
  }

  &:hover {
    span {
      color: ${props => props.theme.colors.lightgrey};
    }
  }
  @media screen and (max-width: ${props => props.theme.screens.md}) {
    font-size: 11px;
    font-weight: 500;
    line-height: 16px;
  }
`

export const Button2 = styled.div`
  span {
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
  }
  border-radius: ${props => props.theme.borderRadius?.components?.small};
  background-color: ${props => props.theme.colors.brand};
  padding: 10px;

  &:hover {
    background-color: ${props => props.theme.colors.brandlight};
  }
  @media screen and (max-width: ${props => props.theme.screens.md}) {
    font-size: 11px;
    font-weight: 500;
    line-height: 16px;
  }
`

export const DateContainer = styled.div <{ active?: any }>`
  border-radius: ${props => props.theme.borderRadius?.components?.small};
  background-color: ${props => props.theme.colors.darkestgrey};
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

export const StyledDateContainer = styled(DateContainer)`
  padding: 10px;
  width: auto;
  height: auto;
  div {
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    color: ${props => props.theme.colors.white}!important;
  }
`

export const DatesContainer = styled.div`
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