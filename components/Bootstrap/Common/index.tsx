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
  color: ${props => props.theme.colors.white};
  margin-bottom: 40px;
`

export const Container = styled.div`
  padding: ${props => props.theme.margins.homepage_large};
  color: ${props => props.theme.colors.white};
  overflow: hidden;
  margin-bottom: 40px;

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    padding: ${props => props.theme.margins.homepage_small};
    margin-bottom: 20px;
  }
`

export const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.pageWidth};
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
  border-radius: ${props => props.theme.borderRadius.components.large};
  background-color: ${props => props.theme.colors.grey};
  padding: 40px 60px;

  @media screen and (max-width: ${props => props.theme.screens.lg}) {
    padding: 20px 30px;
  }
`