import styled, { css } from 'styled-components'
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { COMMON, CommonProps } from 'lib/theme'

interface Props extends CommonProps {
  icon: IconProp | string
  size?: string | number
}

export type FAIconProps = Props &
  // Omit FA icon type and prefer IconProp
  Omit<FontAwesomeIconProps, 'icon'>

const calcSize = (val?: string | number) =>
  typeof val === 'number' ? `${val}px` : val

const FAIcon = styled(FontAwesomeIcon)<FAIconProps>`
  ${COMMON}
  ${({ width, height }) => css`
    &,
    &.svg-inline--fa {
      width: ${calcSize(width)};
      height: ${calcSize(height || width)};
    }
  `}
`

export default FAIcon
