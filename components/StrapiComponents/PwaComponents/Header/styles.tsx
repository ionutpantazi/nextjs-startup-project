import styled, { css } from 'styled-components'
import NextImage from 'next/image'
import { RadialContainer } from '@/components/Bootstrap/Common'

export const ImageContainer = styled.div <{ hidebody?: any }>`
  height: ${props => props.theme.components?.Header?.ImageContainerHeight};

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    height: ${props => props.theme.components?.Header?.ImageContainerMobileHeight};
  }
  margin-top: ${props => props.theme.components?.Header?.ImageContainerMarginTopMobile};
  margin-bottom: 0px;
  @media screen and (min-width: ${props => props.theme.screens.sm}) {
    ${({ hidebody }) => css`
      ${props => hidebody == 'true' ? 'margin-bottom: -120px;' : 'margin-bottom: -100px;'};
    `}
  }
  @media screen and (min-width: ${props => props.theme.screens.md}) {
    margin-top: ${props => props.theme.components?.Header?.ImageContainerMarginTop};
    ${({ hidebody }) => css`
      ${props => hidebody == 'true' ? 'margin-bottom: -160px;' : 'margin-bottom: -100px;'};
    `}
  }
  @media screen and (min-width: ${props => props.theme.screens.lg}) {
    ${({ hidebody }) => css`
      ${props => hidebody == 'true' ? 'margin-bottom: -220px;' : 'margin-bottom: -100px;'};
    `}
  }
    @media screen and (min-width: ${props => props.theme.screens.xl}) {
    ${({ hidebody }) => css`
      ${props => hidebody == 'true' ? 'margin-bottom: -300px;' : 'margin-bottom: -100px;'};
    `}
  }
`

export const StyledRadialContainer = styled(RadialContainer)`
  ${props => props.theme.components?.Header?.StyledRadialContainer == 'unset' ? 'background: unset' : ''};
`

export const HeaderImage = styled(NextImage)`
  position: relative;
  max-width: 100%;
  height: 30vw;
  object-fit: cover;

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    height: 20vh;
  }
`

export const IntroLandingContainer = styled.div <{ hidebody?: any }>`
  border-radius: ${props => props.theme.components?.Common?.ComponentContainerBorder};
  ${({ hidebody }) => css`
    ${props => hidebody == 'true' ? 'padding: 40px 20px;' : 'padding: 10px 20px;'};
  `}
  background-color: ${props => props.theme.components?.Header?.IntroLandingContainerBackground};

  filter: -webkit-box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.15);
  -moz-box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.15);
  box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.15);

  @media screen and (max-width: ${props => props.theme.screens.lg}) {
    padding: 30px 20px;
  }
`

export const EventTitle = styled.div`
  font-size: 57px;
  line-height: 100px;
  text-align: center;
  padding-top: 20px;
  color: ${props => props.theme.components?.Common?.ComponentTitle};

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    font-size: 36px;
    line-height: 60px;
  }
`

export const EventIntroduction = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  text-align: center;
  padding-bottom: 20px;
  color: ${props => props.theme.components?.Common?.ComponentIntro};

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    font-size: 14px;
    line-height: 20px;
  }
`
export const EventContainer = styled.div`
  padding-top: 20px;
`

export const EventDetails = styled.div`
  background-color: ${props => props.theme.components?.Header?.EventDetailsBackground};
  filter: -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  padding: 24px 50px 24px 50px;
  border-radius: ${props => props.theme.borderRadius.large};

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    padding: 24px;
  }
`

export const EventDetailsItemContainer = styled.div`
  width: 100%;
  &:not(:last-child) {
    border-right: 1px solid ${props => props.theme.colors.darkestgrey};
  }
  &:not(:first-child) {
    margin-left: 10px;
  }

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    padding-bottom: 10px;
    padding-right: 0px;
    margin-bottom: 10px;
    margin-left: 0px;
    &:not(:last-child) {
      border-right: 0px;
      border-bottom: 1px solid ${props => props.theme.colors.darkestgrey};
    }
  }
`

export const EventDetailsItem = styled.div`
  width: 90%;
  height: 100%;
  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    width: 100%;
  }
`

export const EventDetailsIcon = styled.div`
  svg {
    color: ${props => props.theme.colors.brand};
  }
`

export const EventDetailsTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`

export const EventDetailsSubTitle = styled.div`
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;
  color: ${props => props.theme.components?.Header?.EventDetailsSubTitle};

  .login: {
    text-decoration: underline!important;

    &:hover {
      cursor: pointer;
    }
  }
`

export const EventDetailsContainer = styled.div`
  max-width: 150px;
`

export const EventDetailsLastContainer = styled.div`
  width: 40%;
  padding: 10px 0px;

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    width: 50%;
    margin: 0 auto;
  }
`

export const EventDetailsButtonContainer = styled.div`
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  color: ${props => props.theme.colors.brand};

  &:hover {
    color: ${props => props.theme.colors.brandlight};
  }
`

export const ReadMoreContainer = styled(EventDetailsButtonContainer)`

`

export const EventButtonContainer = styled.div`
  padding: 10px 20px;
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  height: 50px;
  border-radius: ${props => props.theme.borderRadius.components.small};
  background-color: ${props => props.theme.colors.brand};

  &:hover {
    background-color: ${props => props.theme.colors.brandlight};
  }
`

export const EventSectionContainer = styled.div`
  padding: 60px 40px 0px 40px;

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    padding: 20px 20px 0px 20px;
  }
`

export const IWantToItem = styled.div`
  width: 184px;
  height: 184px;
  border-radius: 6px;
  overflow: hidden;
  
  img {
    filter: brightness(50%);
  }
  
  svg {
    z-index: 3;
    color: ${props => props.theme.colors.brand};
  }

  &:hover {
    img {
      filter: brightness(100%);
      -webkit-transition: all 1s ease;
      -moz-transition: all 1s ease;
      -o-transition: all 1s ease;
      -ms-transition: all 1s ease;
      transition: all 1s ease;
    }
  }

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    margin: 0 auto;
  }
`

export const IWantToItemIcon = styled.div`
  z-index: 2;
  width: 20px;
  height: 20px;
`

export const StyledNextImage = styled(NextImage)`
  border-radius: 6px;
`

export const IWantToItemTitle = styled.div`
  z-index: 2;
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  color: ${props => props.theme.components?.Header?.IWantToItemTitleColor};
`

export const EventContentContainer = styled.div`
`

export const EventContent = styled.div`
  strong {
    font-size: 22px;
    font-weight: 600;
    line-height: 28px;
  }
  p {
    padding-top: 10px;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: ${props => props.theme.colors.grey1};
  }
`

export const Toggle = styled.label`
  border-radius: 40px;
  background-color: ${props => props.theme.components?.Header?.ToggleOff};
  filter: -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
`

export const CustomThemeToggle = styled.span <{ isdefaulttheme?: any }>`
  border-radius: 40px;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  ${({ isdefaulttheme }) => css`
    ${props => isdefaulttheme == 'false' ? 'background-color: ' + props.theme.colors.brand : 'background-color: ' + props.theme.components?.Header?.ToggleOff};
  `}

  @media screen and (max-width: ${props => props.theme.screens.md}) {
    padding: 10px 10px;
  }
`

export const DefaultThemeToggle = styled.span <{ isdefaulttheme?: any }>`
  border-radius: 40px;
  padding: 10px 20px;
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  width: 100%;
  ${({ isdefaulttheme }) => css`
    ${props => isdefaulttheme == 'true' ? 'background-color: ' + props.theme.colors.brand : 'background-color: ' + props.theme.components?.Header?.ToggleOff};
  `}

  @media screen and (max-width: ${props => props.theme.screens.md}) {
    padding: 10px 10px;
  }
`

export const EmptyAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: ${props => props.theme.colors.brand};
`

export const LeftHeading = styled.div`
  padding: 0px 40px;
  text-align: left !important;

  @media screen and (max-width: ${props => props.theme.screens.lg}) {
    padding: 0px 0px;
  }

  position: relative;
  overflow: hidden;
`

export const LeftEventTitle = styled(EventTitle)`
  font-size: 40px;
  font-weight: 400;
  line-height: 60px;
  text-align: left;
`

export const LeftEventIntroduction = styled(EventIntroduction)`
  text-align: left;
`

export const IWantToContainer = styled.div`
  
`