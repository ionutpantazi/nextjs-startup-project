import React, { useState, useEffect, useContext } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import FAIcon from 'components/Bootstrap/FAIcon'
import {
  StrapiFile
} from 'interfaces'
import {
  OuterContainer,
  Container,
  InnerContainer,
  Title,
  ComponentContainer,
} from 'components/Bootstrap/Common'
import { useWindowSize } from '@/lib/hooks/useWindowSize';
import { ThemeContext } from 'components/Layout';
import { useRouter } from 'next/router'
import { CommentContent } from '../Discussions/CommentContent'
import { ActionButtons } from '../Discussions/ActionButtons'
import { AuthorDetails } from '../Discussions/styles'
var moment = require('moment');

const ForumTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
`

const ForumItem = styled.div`
  padding: 16px;
  background: ${props => props.theme.colors.darkgrey};
  border-radius: ${props => props.theme.borderRadius?.components?.small};
`

const Avatar = styled.div`
  // border-radius: ${props => props.theme.borderRadius?.components?.small};
  border-radius: 100px;
  background-color: ${props => props.theme.colors.grey};
  padding: 10px;
  text-align: center;
  width: 140px;
  height: 140px;
`

const DetailsBox = styled.div`
`

const StyledNextImage = styled(NextImage)`
  border-radius: 50%;
  background-color: ${props => props.theme.colors.grey};
  padding: 10px;
  text-align: center;
  width: 140px;
  height: 140px;
  margin: auto;

  @media screen and (max-width: ${props => props.theme.screens.lg}) {
    width:90px;
    height: 90px;
  }
`

const ButtonsBox = styled.div`
  @media screen and (max-width: ${props => props.theme.screens.lg}) {
    position: absolute;
    right: 0;
    bottom: 0;
    align-items: end;
  }
`

const Button = styled.div`
  span {
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
  }
  border-radius: ${props => props.theme.borderRadius?.components?.small};
  background-color: ${props => props.theme.colors.brand};
  padding: 10px;

  &:hover {
    background-color: ${props => props.theme.colors.brandlight};
    cursor: pointer;
  }
  @media screen and (max-width: ${props => props.theme.screens.md}) {
    font-size: 11px;
    font-weight: 500;
    line-height: 16px;
  }
`

const ForumItemTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  @media screen and (max-width: ${props => props.theme.screens.md}) {
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
  }
`

const ForumItemSubTitle = styled.div`
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  color: ${props => props.theme.colors.lightgrey};
  display: -webkit-box;
  // -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media screen and (max-width: ${props => props.theme.screens.md}) {
    font-size: 12px;
    font-weight: 300;
    line-height: 16px;
  }
`

const ForumItemContent = styled.div`
  position: relative;
  padding: 16px;
`

export const DiscussionFilter = styled.div`
  border-top: 1px solid #1e1e1e;
  color: ${props => props.theme.colors.grey1}; 
  padding-top: 10px;
  span {
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
  }
`

export const CommentBox = styled.div`
  margin-top: 10px;
  background: ${props => props.theme.colors.darkgrey};
  border-radius: ${props => props.theme.borderRadius.components?.small};
  padding: 10px;
`

const Detail = styled.div`
`

const ForumComponent = ({
  data
}: any) => {

  const theme = useContext(ThemeContext);
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (width && width < Number(theme.screens['md'].replace('px', ''))) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [])
  
  const navigateToDiscussion = (id: string) => {
    const path = router.asPath;
    router.push(`${path}/${id}`);
  }

  return (
    <Container>
      <InnerContainer>
        <ComponentContainer className='flex flex-col gap-4'>
          {data.data.map((discussion: any, index: number) => (
            <ForumItem key={index}>
              <ForumItemContent className='md:flex grid flex-row flex-wrap content-start justify-around gap-4'>
                <StyledNextImage
                  src={discussion.profilePic ?? ""}
                  className=''
                  alt={discussion.profilePic ?? ""}
                  width={140}
                  height={140}
                />
                <Detail className='flex flex-col gap-2 justify-center md:w-8/12 w-full'>
                  <AuthorDetails className=''>
                      {discussion.authorName} | {moment(discussion.datePosted).fromNow()}
                  </AuthorDetails>
                  <DetailsBox className='flex flex-col gap-2 justify-center w-full'>
                      {discussion.title &&
                        <ForumItemTitle className=''>
                          {discussion.title}
                        </ForumItemTitle>
                      }
                      {discussion.text &&
                        <ForumItemSubTitle className=''
                          dangerouslySetInnerHTML={{
                            __html: discussion.text,
                          }}
                        />
                      }
                  </DetailsBox>
                  <ActionButtons impressions={discussion.impressions ?? 0} comments={discussion.responses?.length ?? 0} />
                </Detail>
                <ButtonsBox className='flex flex-col gap-4 justify-center md:w-fit w-full'>
                  <Button as='a' onClick={() => navigateToDiscussion(discussion.discussionId)} className='w-fit'>
                    <span>
                      View post
                    </span>
                  </Button>
                </ButtonsBox>
              </ForumItemContent>
            </ForumItem>
          ))
          }
        </ComponentContainer>
      </InnerContainer>
    </Container>
  )
}

export default ForumComponent