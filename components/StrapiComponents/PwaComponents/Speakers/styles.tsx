import styled, { css } from 'styled-components'
import NextImage from 'next/image'

export const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
  line-height: 42px;
  color: ${props => props.theme.colors.brand};
  padding-top: 20px;
`

export const SubTitle = styled.div`
  font-size: 25px;
  font-weight: 300;
  line-height: 22px;
  color: ${props => props.theme.colors.white};
  padding-top: 20px;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: fit-content;
  flex-grow: 2;
  height: auto;
  padding-left: 40px;
  max-width: 30%;
  margin-right: -28px;

  @media screen and (max-width: ${props => props.theme.screens.md}) {
    padding-left: 0px;
    width: 100%;
    max-width: 100%;
  }
`

export const SearchInput = styled.div`
  width: 100%;
  padding: 8px;
  background: transparent;
  border-radius: ${props => props.theme.borderRadius?.components?.small};
  border: 1px solid ${props => props.theme.colors.white};
`

export const SearchButton = styled.div`
  position: relative;
  right: 36px;
  border-radius: 100%;
  background: ${props => props.theme.colors.brand};
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    cursor: pointer;
    background: ${props => props.theme.colors.brandlight};
  }

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    position: absolute;
  }
`

export const SortCategories = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;

  @media screen and (max-width: ${props => props.theme.screens.md}) {
    padding-top: 30px;
  }
`

export const SortCategoriesTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 16px;
  color: ${props => props.theme.colors.brand};
`

export const SpeakersContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const RoundedImage = styled(NextImage)`
  border-radius: 50%;
  width: 200px;
  height: 200px;

  @media screen and (max-width: ${props => props.theme.screens.xl}) {
    width: 150px;
    height: 150px;
  }

  @media screen and (max-width: ${props => props.theme.screens.lg}) {
    width: 120px;
    height: 120px;
  }

  @media screen and (max-width: ${props => props.theme.screens.md}) {
    width: 100px;
    height: 100px;
  }
`

export const SpeakerImage = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  img {
    object-fit: cover;
  }

  media screen and (max-width: ${props => props.theme.screens.xl}) {
    width: 150px;
    height: 150px;
  }

  @media screen and (max-width: ${props => props.theme.screens.lg}) {
    width: 120px;
    height: 120px;
  }

  @media screen and (max-width: ${props => props.theme.screens.md}) {
    width: 100px;
    height: 100px;
  }
`

export const ItemTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`

export const Itemposition = styled.div`
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
  color: ${props => props.theme.colors.lightgrey};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 35px;
`

export const SpeakerCard = styled.div`
  height: 300px;
`

export const SpeakerIcon = styled.div`
  z-index: 2;
  padding: 10px 10px 20px 10px;
  border-radius: 6px;

  // width: 250px;
  // height: 320px;
`

export const StyledNextImage = styled(NextImage)`
  border-radius: 6px;
`

export const SpeakerType = styled.div <{ active?: any }>`
  ${({ active }) => css`
    ${props => active == 'true' ? 'background-color: ' + props.theme.colors.brand : 'background-color: ' + props.theme.colors.grey};
  `}

  z-index: 2;
  border-radius: 12px;
  padding: 4px 10px;
  width: fit-content;
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;

  &:hover {
    cursor: pointer;
  }
`

export const SpeakerDetails = styled.div`
  z-index: 2;
`

export const IconContainer = styled.div`
  z-index: 2;
  width: 40px;
  height: 40px;
`

export const SpeakerName = styled.div`
  z-index: 2;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`

export const SpeakerPosition = styled.div`
  z-index: 2;
  font-size: 14px;
  font-weight: 300;
  line-height: 29px;
`

export const Workshop = styled.div`
  border-radius: 6px;
  background-color: ${props => props.theme.colors.grey}
  padding: 12px;
`

export const WorkshopTitle = styled.div`
  margin-top: 6px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const WorkshopIntro = styled.div`
  margin-top: 6px;
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const DropdownAndSearch = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0 60px;
  gap: 20px;
  justify-content: space-between;

  @media screen and (max-width: ${props => props.theme.screens.md}) {
    margin: 10px 0 30px;
    flex-direction: column;
  }
`

export const CardsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  max-width: 100%;
  gap: 0px;
  row-gap: 40px;
`

export const GridItem = styled.div`
  display: flex;
  width: 100px;
  transition: height .2s ease-in-out;
  user-select: none;
  cursor: pointer;
`
