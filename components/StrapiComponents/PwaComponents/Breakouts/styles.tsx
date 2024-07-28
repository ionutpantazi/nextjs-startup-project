import styled, { css } from 'styled-components'
import NextImage from 'next/image'

export const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
  line-height: 42px;
  color: ${props => props.theme.colors.brand};
  padding-top: 20px;
`

export const SubTitle = styled.div`
  font-size: 25px;
  font-weight: 300;
  line-height: 22px;
  color: ${props => props.theme.colors.white};
  padding-top: 20px;
`



export const BreakoutContainerTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 20px;
  padding-bottom: 20px;
  color: ${props => props.theme.colors.grey1};
`

export const BreakoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const BreakoutItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const BreakoutImage = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  img {
    border-radius: ${props => props.theme.borderRadius?.components?.small};
  }

  @media screen and (max-width: ${props => props.theme.screens.md}) {
    height: 100px;
  }
`

export const BreakoutIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  svg {
    color: ${props => props.theme.colors.brand};

    &:hover {
      cursor: pointer;
      color: ${props => props.theme.colors.brandlight };
    }
  }
`

export const BreakoutTag = styled.div`
  font-size: 14px;
  font-weight: 300;
  line-height: 12px;
  font-style: italic;
  color: ${props => props.theme.colors.grey1};
`

export const BreakoutDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
`

export const BreakoutDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`

export const BreakoutTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 18px;
  color: ${props => props.theme.colors.grey1};
`

export const BreakoutSubtitle = styled.div`
  font-size: 16px;
  font-weight: 200;
  line-height: 14px;
  font-style: italic;
  color: ${props => props.theme.colors.grey1};
`

export const BreakoutInfo = styled.div`
  font-size: 16px;
  font-weight: 200;
  line-height: 14px;
  color: ${props => props.theme.colors.grey1};
`

export const BreakoutButton = styled.button`
  height: 40px;
  width: 100px;
  border-radius: ${props => props.theme.borderRadius.small};
  background: ${props => props.theme.colors.brand};
  color: ${props => props.theme.colors.white};

  &:hover {
    background: ${props => props.theme.colors.brandlight};
  }

  @media screen and (max-width: ${props => props.theme.screens.md}) {
    display: none;
  }
`

export const BreakoutTagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media screen and (max-width: ${props => props.theme.screens.md}) {
    flex-direction: column;
  }
`

export const BreakoutTopContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${props => props.theme.screens.md}) {
    align-items: flex-start;
  }
`

export const BreakoutButton2 = styled(BreakoutButton)`
  @media screen and (max-width: ${props => props.theme.screens.md}) {
    display: block;
    margin-left: auto;
    margin-right: 0;
  }
  @media screen and (min-width: ${props => props.theme.screens.md}) {
    display: none;
  }
`

