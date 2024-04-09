import styled from 'styled-components'
import { ALL, AllProps } from 'lib/theme'

export type TextProps = AllProps

const Text = styled.p<TextProps>`
  ${ALL}
`

export default Text