import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import {
  InnerContainer,
} from 'components/Bootstrap/Common'

export const StyledInnerContainer = styled(InnerContainer) <{ hasinfobox?: any }>`
  ${({ hasinfobox }) => css`
    ${props => hasinfobox == 'false' ? 'max-width: 1000px; margin: 0 auto' : ''};
  `}
`

export const Category = styled.div <{ active?: any }>`
  ${({ active }) => css`
    ${props => active == 'true' ? 'background-color: ' + props.theme?.components?.FAQs?.CategoryActiveBackground : 'background-color: ' + props.theme?.components?.FAQs?.CategoryBackground};
  `}

  border-radius: ${props => props.theme.borderRadius.components?.medium};
  padding: 4px 10px;
  width: fit-content;
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;

  &:hover {
    cursor: pointer;
  }
`

export const FiltersContainer = styled.div`
`

export const FaqsContainer = styled.div <{ hasinfobox?: any }>`
  ${({ hasinfobox }) => css`
    ${props => hasinfobox == 'false' ? 'width: 100%' : ''};
  `}

  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const FaqItem = styled.div`
  border-radius: ${props => props.theme.borderRadius.components?.small};
  background-color: ${props => props.theme.components?.FAQs?.FaqItemBackground};
  padding: 20px;
  &:hover {
    cursor: pointer;
  }
`

export const FaqQuestion = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
`

export const FaqAnswer = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
`

export const InfoBoxContainer = styled.div`
  border-radius: 6px;
  background-color: ${theme.colors.grey};
  padding: 30px 40px;
`

export const InfoBoxTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
`

export const InfoBoxSubTitle = styled.div`
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
  text-align: center;
`