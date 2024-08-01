import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import Flex from 'components/Bootstrap/Flex'

export const StyledModal = styled.div <{ isopen?: any }>`
    ${({ isopen }) =>
    css`
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
        z-index: -10;
        transition: opacity 300ms ease, z-index 300ms ease;
        overflow-y: auto;
        ${isopen == 'true' &&
      css`
          opacity: 1;
          z-index: 1000;
        `};
      `}
  `

export const StyledModalInnerWrapper = styled.div`
    width: 100%;
    // padding: 65px 80px 80px 80px;
    background-color: white;
    box-sizing: border-box;
    border-radius: 24px;
    min-height: 100%;
    // @media screen and (max-width: ${theme.screens.sm}px) {
    //   padding: 105px 27px 120px 27px;
    // }
    // @media screen and (max-width: ${theme.screens.sm}px) {
    //   border-radius: 0px;
    // }
  `

export const StyledModalWrapper = styled.div`
    height: fit-content;
    width: 100%;
    max-width: 500px;
    padding-bottom: 120px;
    position: absolute;
    box-sizing: border-box;
    top: 90px;
    bottom: 120px;
    right: 0;
    left: 0;
    margin: 0 auto;

    @media screen and (max-width: ${props => props.theme.screens.md}) {
      top: 0px;
      max-width: 100%;
      padding: 0px;
      padding-bottom: 0px;
      top: 0px;
      bottom: 0px;
    }
  `