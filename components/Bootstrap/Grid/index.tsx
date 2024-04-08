import styled from 'styled-components'
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  grid,
  GridProps as SSGridProps,
} from 'lib/theme'

export type GridProps = SpaceProps & LayoutProps & ColorProps & SSGridProps

const Grid = styled.div<GridProps>`
  display: grid;
  ${space}
  ${layout}
  ${color}
  ${grid}
`

export default Grid