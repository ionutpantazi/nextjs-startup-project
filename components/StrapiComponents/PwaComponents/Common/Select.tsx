import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import FAIcon from 'components/Bootstrap/FAIcon'
import { theme } from 'lib/theme'

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 260px;

  @media screen and (max-width: ${props => props.theme.screens.md}) {
    width: 100%;
  }
`

const DropdownButton = styled.div`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius?.components?.small};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const DropdownContent = styled.div <{ active?: any }>`
  ${({ active }) => css`
    ${props => active == 'true' ? 'display: flex' : 'display: none'};
  `}
  position: absolute;
  background-color: ${props => props.theme.colors.brand};
  width: 100%;
  padding: 12px 16px;
  z-index: 99;
  font-size: 14px;
  border: 1px solid ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius?.components?.small};
  box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
  flex-direction: column;
`

const DropdownItem = styled.div`
  color: ${props => props.theme.colors.grey1};
  padding: 5px 0px;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.white};
  }
`

const Dropdown = ({
  values,
  placeholder,
  selectedValue,
  setSelectedValue
}: any) => {

  const [isDropDownVisible, setIsDropDownVisible] = useState(false)

  const togggleDropdown = () => {
    setIsDropDownVisible(!isDropDownVisible)
  }

  const selectValue = (value: any) => {
    setSelectedValue(value)
    setIsDropDownVisible(false)
  }

  return (
    <DropdownContainer className=''>
      <DropdownButton onClick={togggleDropdown}>
        <span>
          {selectedValue ? selectedValue.label : placeholder}
        </span>
        <FAIcon
          icon={'fa-angle-down'}
          width={16}
          height={16}
        />
      </DropdownButton>
      <DropdownContent active={isDropDownVisible ? 'true' : 'false'}>
        <DropdownItem onClick={(e) => { e.preventDefault(); selectValue(undefined) }}>{placeholder}</DropdownItem>
        {values.map((value: any, index: number) => (
          <DropdownItem key={index} onClick={(e) => { e.preventDefault(); selectValue(value) }}>
            {value.label}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  )
}

export default Dropdown