import styled, { css } from 'styled-components'

export const CardContainer = styled.div`
  border-radius: 6px;
  padding: 10px;
  background-color: ${props => props.theme.components?.CardsCarousel?.CardContainerBacground};
  width: 88%;
  min-height: 380px;
`

export const ImageContainer = styled.div <{ hidebackground?: any }>`
  ${({ hidebackground }) => css`
    ${props => hidebackground == 'true' ? '' : 'background: ' + props.theme.colors.brand + ';'};
  `}
  border-radius: ${props => props.theme.borderRadius.components.small};
  height: 300px;
  min-width: 160px;
  overflow: hidden;
`

export const CardTitle = styled.div`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const CardSubTitle = styled.div`
  color: ${props => props.theme.components?.CardsCarousel?.CardSubTitleColor};
  margin-top: 6px;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
export const ExpandButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.white};
  border-radius: 100px;
  height: 39px;
  width: 39px;
  position: relative;
  top: 80px;
  left: -20px;
  svg {
    color: ${props => props.theme.colors.brand};

    &:hover {
      color: ${props => props.theme.colors.brandlight };
    }
  }
`

export const Badge = styled.div <{ active?: any }>`
  ${({ active }) => css`
    ${props => active == 'true' ? 'background-color: ' + props.theme.colors.brand : 'background-color: ' + props.theme.colors.grey};
  `}
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  z-index: 2;
  border-radius: 12px;
  padding: 4px 10px;
  width: fit-content;
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.brandlight};
  }
`