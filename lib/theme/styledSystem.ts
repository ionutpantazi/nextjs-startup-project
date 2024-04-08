/**
 *  Central place to define constants / types for styled-system props
 */
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  typography,
  TypographyProps,
  flexbox,
  FlexboxProps,
  shadow,
  ShadowProps,
  border,
  BorderProps,
  display,
  DisplayProps,
  background,
  BackgroundProps,
  grid,
  GridProps,
  color as ssColor,
  ColorProps as SSColorProps,
  TextColorProps,
  compose,
  system,
} from 'styled-system'

// Styled-system patch for the color prop conflict "Types of property 'color' are incompatible"
// when appling props to component that extend ColorProps.
export interface ColorProps extends Omit<SSColorProps, 'color'> {
  textColor?: TextColorProps['color']
}
// https://styled-system.com/custom-props/#custom-style-props
export const color = compose(
  ssColor,
  system({
    // Alias color as textColor
    textColor: {
      property: 'color',
      // This connects the property to your theme, so you can use the syntax shown
      // below E.g "primary.0".
      scale: 'colors',
    },
  })
)

export type CommonProps = SpaceProps & LayoutProps & ColorProps & DisplayProps

export type AllProps = CommonProps &
  PositionProps &
  TypographyProps &
  FlexboxProps &
  ShadowProps &
  BorderProps &
  BackgroundProps

export const COMMON = compose(space, color, layout, display)

// All Styled System props (except Grid ;).
export const ALL = compose(
  COMMON,
  position,
  typography,
  flexbox,
  shadow,
  border,
  background
)

// When writing a custom component that implements a styled-system/component as it's inner
// JSX.Element, this applies the props of the ss/component and the html attributes.
// e.g
// interface MyComponent extends InnerStyledComponent<FlexProps, HTMLDivElement> {}
// Considering the interface above, now MyComponent will happily receive the
// following props:
// <MyComponent someFlexProp='...' className='my-comp' ...>
// This interface is saying that MyComponent takes FlexProps (as it will delegate them to
// the inner Flex ss/component, and is a React HTMLDivElement so can therefore receive className).
// TODO: how can this type use StyledComponents internal types to apply the attributes we need?
export type InnerStyledComponent<T, H> = T &
  React.HTMLAttributes<H> & {
    as?: keyof JSX.IntrinsicElements
  }
// Same applies for styled.svg`${COMMON}` type stuff.
export type InnerStyledSVG<T, H> = T & React.SVGAttributes<H>

export {
  space,
  layout,
  position,
  typography,
  flexbox,
  shadow,
  border,
  display,
  background,
  grid,
}

export type {
  SpaceProps,
  LayoutProps,
  PositionProps,
  TypographyProps,
  FlexboxProps,
  ShadowProps,
  BorderProps,
  DisplayProps,
  BackgroundProps,
  GridProps,
}
