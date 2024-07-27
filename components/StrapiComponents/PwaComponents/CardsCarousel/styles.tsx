import styled, { css } from 'styled-components'

export const CardsCarouselContainer = styled.div`
  padding-top: 40px;
`

export const CarouselTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;

  @media screen and (max-width: ${props => props.theme.screens.md}) {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }
`

export const CarouselShowAll = styled.div`
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  color: ${props => props.theme.components?.CardsCarousel?.CarouselShowAllColor};

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.components?.CardsCarousel?.CarouselShowAllHoverColor};
  }

  @media screen and (max-width: ${props => props.theme.screens.md}) {
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
  }
`

export const CarouselMoreDetails = styled(CarouselShowAll)`
  position: absolute;
  right: 16px;
`

export const CardsContainer = styled.div`
`

export const CardContainer = styled.div`
  border-radius: 6px;
  padding: 10px;
  background-color: ${props => props.theme.components?.CardsCarousel?.CardContainerBacground};
`

export const ImageContainer = styled.div <{ hidebackground?: any }>`
  ${({ hidebackground }) => css`
    ${props => hidebackground == 'true' ? '' : 'background: ' + props.theme.colors.brand + ';'};
  `}
  border-radius: ${props => props.theme.borderRadius.components?.small};
  height: 150px;
  overflow: hidden;
`

export const ImageIcon = styled.div`
  background: ${props => props.theme.colors.brand};
  border-radius: 50%;
  height: 22px;
  width: 22px;
  position: relative;
  z-index: 2;
  margin-left: 10px;
  margin-top: -10px;
  svg {
    color: ${props => props.theme.colors.white};
  }
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
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const ButtonsContainer = styled.div`
  margin-top: 6px;
  span {
    padding-left: 4px;
    color: ${props => props.theme.components?.CardsCarousel?.ButtonsContainerColor};
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
  }
  svg {
    color: ${props => props.theme.colors.brand};
  }
`

export const CustomPagination = styled.div`
  .swiper-pagination-bullet {
    background: ${props => props.theme.colors.lightgrey};
  }
  .swiper-pagination-bullet-active {
    background: ${props => props.theme.colors.brand};
  }

  padding-top: 30px;

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    padding-top: 20px;
    padding-bottom: 40px;
  }
`

export const ShowAll = styled.div`
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  color: ${props => props.theme.components?.CardsCarousel?.ShowAllColor};
  span {
    height: fit-content;

    &:hover {
      cursor: pointer;
      color: ${props => props.theme.components?.CardsCarousel?.ShowAllHoverColor};
    }
  }

  margin-top: 30px;
`

export const EmptyComponent = styled.div`
  height: 350px;
`