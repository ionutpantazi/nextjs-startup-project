import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
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
  color: ${props => props.theme.colors.brandlight};
  padding-top: 20px;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin: 80px 0 40px;

  @media screen and (max-width: ${props => props.theme.screens.md}) {
    margin: 40px 0 20px;
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
  padding-bottom: 100px;

  @media screen and (max-width: ${props => props.theme.screens.md}) {
    padding-bottom: 40px;
  }
`

export const SortCategoriesTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 16px;
  color: ${props => props.theme.colors.brand};
  margin-bottom: 1rem;
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