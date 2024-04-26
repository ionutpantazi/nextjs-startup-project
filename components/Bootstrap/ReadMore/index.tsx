import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export interface ReadMoreProps {
  description: string
  DESC_WORDS: number
}

const HeadingDescription = (description: { description: string }) => {
  return (
    <Description
      dangerouslySetInnerHTML={{
        __html: description.description,
      }}
    />
  )
}

const DescriptionContainer = styled.p`
`

export const Description = styled.div`
`

const More = styled.span`
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  color: ${props => props.theme.colors.brand};
  &:hover {
    cursor: pointer;
  }
`

const ReadMore = ({
  description,
  DESC_WORDS = 10
}: ReadMoreProps) => {

  const [fullDesc, setFullDesc] = useState<boolean | null>(null)
  const isShortDesc = description?.length <= DESC_WORDS

  const togggleDescription = () => {
    setFullDesc(!fullDesc)
  }

  return (
    <DescriptionContainer className=''>
      {isShortDesc || fullDesc
        ? <HeadingDescription description={`${description} `} />
        : <HeadingDescription description={`${description.slice(0, DESC_WORDS)}... `} />
      }
      {!isShortDesc && (
        <More onClick={togggleDescription}>
          {fullDesc ? 'Read less' : 'Read more'}
        </More>
      )}
    </DescriptionContainer>
  )
}

export default ReadMore