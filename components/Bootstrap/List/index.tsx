import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { useDefaultRef } from 'lib/hooks/useDefaultRef'
import { COMMON, CommonProps, InnerStyledComponent } from 'lib/theme'

export type ListProps = InnerStyledComponent<CommonProps, HTMLUListElement>

const ListContainer = styled.ul`
  ${COMMON}
`

const List = forwardRef<HTMLUListElement, ListProps>(
  ({ children, ...props }, ref) => {
    const containerRef = useDefaultRef<HTMLUListElement>(ref)
    return (
      <ListContainer ref={containerRef} {...props}>
        {children}
      </ListContainer>
    )
  }
)

export default List