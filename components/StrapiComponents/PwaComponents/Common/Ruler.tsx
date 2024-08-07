import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const HorizontalRuler = styled.div`
  margin: 40px 0px 50px;
  border-bottom: 0.5px solid ${props => props.theme.components?.Common?.HorizontalRuler};

  @media screen and (max-width: ${props => props.theme.screens.md}) {
    margin: 20px 0px 30px;
  }
`

const Ruler = ({
}: any) => {

  return (
    <HorizontalRuler />
  )
}

export default Ruler