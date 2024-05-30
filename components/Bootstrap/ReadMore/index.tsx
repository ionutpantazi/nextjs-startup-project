import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export interface ReadMoreProps {
  content?: string
  chars?: number
}

const Content = (content: { content: string }) => {
  return (
    <Description
      dangerouslySetInnerHTML={{
        __html: content.content,
      }}
    />
  )
}

const ContentContainer = styled.div`
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
  content = "",
  chars = 10
}: ReadMoreProps) => {

  const [fullDesc, setFullDesc] = useState<boolean | null>(null)
  const isShortDesc = content?.length <= chars

  const togggleDescription = () => {
    setFullDesc(!fullDesc)
  }

  return (
    <ContentContainer className=''>
      {isShortDesc || fullDesc
        ? <Content content={`${content} `} />
        : <Content content={`${content.slice(0, chars)}... `} />
      }
      {!isShortDesc && (
        <More onClick={togggleDescription}>
          {fullDesc ? 'Read less' : 'Read more'}
        </More>
      )}
    </ContentContainer>
  )
}

export default ReadMore