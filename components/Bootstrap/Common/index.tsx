import styled from 'styled-components'
import { theme } from 'lib/theme'

export const RadialContainer = styled.div`
  z-index: 1;
  position: absolute;
  height: 100%;
  width:100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,1));
`

export const OuterContainer = styled.div`
  color: ${props => props.theme.components?.Common?.OuterContainerColor};
  margin-bottom: 40px;
`

export const Container = styled.div`
  padding: ${props => props.theme.margins.homepage_large};
  color: ${props => props.theme.components?.Common?.ContainerColor};
  overflow: hidden;
  margin-bottom: 40px;

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    padding: ${props => props.theme.components?.Common?.ContainerPadding};
    margin-bottom: 20px;
  }
`

export const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.components?.Common?.InnerContainerMaxWidth};
`

export const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  margin-bottom: 10px;
`

export const SectionTitle = styled.div`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
`

export const ComponentContainer = styled.div`
  border-radius: ${props => props.theme.components?.Common?.ComponentContainerBorder};
  background-color: ${props => props.theme.components?.Common?.ComponentContainerBackground};
  padding: 40px 60px;

  @media screen and (max-width: ${props => props.theme.screens.lg}) {
    padding: 20px 10px;
  }

  position: relative;
  overflow: hidden;

  ${props => props.theme.components?.Common?.ComponentContainerCorner == 'show'
    ? "&:after {"+
      "content: '';"+
      "width: 0;"+
      "height: 0;"+
      "border-style: solid;"+
      "border-width: 0 35vw 2vh 0;"+
      "border-color: transparent " + props?.theme?.colors?.brand + " transparent transparent;"+
      "right: 0;"+
      "top: 0;"+
      "position: absolute;"+
      "};"
    : ""
  }
`