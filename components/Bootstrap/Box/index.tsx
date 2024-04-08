import styled from 'styled-components'
import { ALL, AllProps } from 'lib/theme'

export type BoxProps = AllProps

const Box = styled.div<BoxProps>`
  ${ALL}
`

export default Box