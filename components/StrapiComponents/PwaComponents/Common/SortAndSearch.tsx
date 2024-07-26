import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import FAIcon from 'components/Bootstrap/FAIcon'
import { theme } from 'lib/theme'
import Dropdown from './Dropdown'

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

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width:30vw;
  flex-grow: 2;
  height: auto;
  padding-left: 40px;
  max-width: 400px;
  margin-right: -28px;

  @media screen and (min-width: ${props => props.theme.screens.lg}) {
    max-width: 500px;
  }

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
  min-width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    cursor: pointer;
    background: ${props => props.theme.colors.brandlight};
  }

  @media screen and (max-width: ${props => props.theme.screens.md}) {
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

const SortAndSearch = ({
  title,
  dropdownValues,
}: any) => {

  return (
    <SortCategories>
      <SortCategoriesTitle>
        {title}
      </SortCategoriesTitle>
      <DropdownAndSearch>
        <Dropdown values={dropdownValues} />
        <SearchContainer>
          <SearchInput as='input' />
          <SearchButton>
            <FAIcon
              icon={'fa-magnifying-glass'}
              width={16}
              height={16}
            />
          </SearchButton>
        </SearchContainer>
      </DropdownAndSearch>
    </SortCategories>
  )
}

export default SortAndSearch