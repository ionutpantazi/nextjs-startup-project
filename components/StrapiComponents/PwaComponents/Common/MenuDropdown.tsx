import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const DropdownContainer = styled.div`
  position: absolute;
  right: 0;
  width: 260px;
`

const DropdownContent = styled.div <{ active?: any }>`
  ${({ active }) => css`
    ${props => active == 'true' ? 'display: flex' : 'display: none'};
  `}
  position: absolute;
  background-color: ${props => props.theme.colors.white};
  width: 100%;
  padding: 12px 16px;
  z-index: 99;
  font-size: 14px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
  flex-direction: column;
`

const MenuDropdown = ({
  isDropdownVisible,
  togggleDropdown,
  children,
}: any) => {

  const selectValue = (value: any) => {
    togggleDropdown(false)
  }

  return (
    <DropdownContainer className=''>
      <DropdownContent active={isDropdownVisible ? 'true' : 'false'}>
        {children}
      </DropdownContent>
    </DropdownContainer>
  )
}

export default MenuDropdown