import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const ToggleContainer = styled.label`
  border-radius: 40px;
  background-color: ${props => props.theme.components?.Header?.ToggleOff};
  filter: -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
`

const ToggleButton = styled.span <{ isactive?: any }>`
  border-radius: 40px;
  padding: 10px 20px;
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  width: 100%;
  ${({ isactive }) => css`
    ${props => isactive == 'true' ? 'background-color: ' + props.theme.colors.brand : 'background-color: ' + props.theme.components?.Header?.ToggleOff};
  `}
`

const Toggle = ({
  onText,
  offText,
  isactive,
  switchstate,
}: any) => {

  const handleCheckboxChange = () => {
    if (switchstate instanceof Function) {
      switchstate(!isactive)
    }
  }

  return (
    <>
      <ToggleContainer className='flex justify-between cursor-pointer w-fit'>
        <input
          type='checkbox'
          className='sr-only'
          checked={isactive}
          onChange={handleCheckboxChange}
        />
        <ToggleButton className='flex flex-row items-center gap-2' isactive={!isactive ? 'true' : 'false'}>
          <span>
            {onText}
          </span>
        </ToggleButton>
        <ToggleButton className='flex flex-row items-center gap-2' isactive={isactive ? 'true' : 'false'}>
          <span>
            {offText}
          </span>
        </ToggleButton>
      </ToggleContainer>
    </>
  )
}

export default Toggle