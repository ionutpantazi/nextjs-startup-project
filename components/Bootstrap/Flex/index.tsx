import styled, { css } from 'styled-components'
import { ALL, AllProps, InnerStyledComponent } from 'lib/theme'

export interface FlexProps
  extends InnerStyledComponent<AllProps, HTMLDivElement> {
  center?: boolean
}

const Flex = styled.div<FlexProps>`
  display: flex;
  position: relative;
  ${({ center }) =>
    center &&
    css`
      justify-content: center;
      align-items: center;
    `}
  ${ALL}
`

export default Flex