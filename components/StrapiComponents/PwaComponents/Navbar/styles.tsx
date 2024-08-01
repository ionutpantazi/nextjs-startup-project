import styled, { css } from 'styled-components'

export const NavigationContainer = styled.nav`
  z-index: 99;
  background-color: ${props => props.theme.components?.Navbar?.NavigationContainerBackground};
  // @media screen and (min-width: ${props => props.theme.screens.md}) {
  //   height: 80px;
  // }
  height: auto;
  @media screen and (max-width: ${props => props.theme.screens.md}) {
    position: fixed;
    top: 0px;
    background-color: ${props => props.theme.colors.white};
  }
`

export const LogoContainer = styled.div`
  // position: absolute;
  // top: 1px;
  width: 244px;

  @media screen and (max-width: ${props => props.theme.screens.md}) {
    display: none;
  }
`

export const RightButtonsContainer = styled.div <{ show?: any }>`
 
  @media screen and (max-width: ${props => props.theme.screens.md}) {
    ${({ show }) => css`
      ${props => show == 'hidemobile' ? 'display: none' : ''};
    `}
  }

  @media screen and (min-width: ${props => props.theme.screens.md}) {
    ${({ show }) => css`
      ${props => show == 'hidedesktop' ? 'display: none' : ''};
    `}
  }
`

export const RegisterBtn = styled.div`
  width: 120px;
  border-radius: ${props => props.theme.components?.Navbar?.BtnRadius};
  background-color: ${props => props.theme.colors.grey1};
  padding: 10px 20px;
  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: ${props => props.theme.colors.black};
  }
  svg {
    color: ${props => props.theme.colors.brand};
  }

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.lightgrey};
    svg {
      color: ${props => props.theme.colors.brandlight};
    }
  }
`

export const MenuBtn = styled.div`
  border-radius: ${props => props.theme.components?.Navbar?.BtnRadius};
  background-color: ${props => props.theme.colors.brand};
  padding: 10px 20px;
  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: ${props => props.theme.colors.black};
  }
  svg {
    color: ${props => props.theme.colors.darkestgrey};
  }

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.brandlight};
    svg {
      color: ${props => props.theme.colors.darkgrey};
    }
  }
`

export const MenuBtnMobile = styled(MenuBtn)`
  width: 120px;
  @media screen and (max-width: ${props => props.theme.screens.md}) {
    display: none;
  }
`

export const MenuBtnDesktop = styled(MenuBtn)`
  width: 120px;
  @media screen and (min-width: ${props => props.theme.screens.md}) {
    display: none;
  }
`

export const Pillar = styled.div`
  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: ${props => props.theme.colors.black};
  }
  svg {
    color: ${props => props.theme.colors.brand};
  }
  &:hover {
    cursor: pointer;
    span {
      color: ${props => props.theme.colors.darkgrey};
    }
    svg {
      color: ${props => props.theme.colors.brandlight};
    }
  }
  @media screen and (min-width: ${props => props.theme.screens.md}) {
    justify-content: left;
  }
`

export const CollapsibleMenu = styled.div`
  @media screen and (min-width: ${props => props.theme.screens.md}) {
    // display: none;
  }
`

export const MenuList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 1500px;
  padding: 0 20px;
  row-gap: 10px;
  column-gap: 20px;
  @media screen and (max-width: ${props => props.theme.screens.md}) {
    padding: 0;
    row-gap: 10px;
  }
  @media screen and (max-width: ${props => props.theme.screens.lg}) {
    padding: 0 20px;
    row-gap: 10px;
  }
`