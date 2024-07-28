import React, { useState, useEffect, useContext } from 'react'
import styled, { css } from 'styled-components'
import NextImage from 'next/image'
import FAIcon from 'components/Bootstrap/FAIcon'
import {
  Container,
  InnerContainer,
  ComponentContainer,
} from 'components/Bootstrap/Common'
import { useWindowSize } from '@/lib/hooks/useWindowSize';
import { ThemeContext } from 'components/Layout';
import { useRouter } from 'next/router'
import { CommentContent } from '../Discussions/CommentContent'
import { ActionButtons } from '../Discussions/ActionButtons'
import { AuthorDetails, SpeakerImage, StyledInputContainer, UserAvatar } from '../Discussions/styles'
var moment = require('moment');

const ForumItem = styled.div`
  padding: 16px;
  background: ${props => props.theme.colors.darkgrey};
  border-radius: ${props => props.theme.borderRadius?.components?.small};
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
  padding: 16px;
`

const ForumItemResponses = styled.div`
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

const DiscussionComponent = ({
  data,
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

  const applyInputContainerStyle = () => {
    return {
        width: '100%',
        'margin-bottom': '10px'
    };
  }

  return (
    <Container>
      <InnerContainer>
        <ComponentContainer className='flex flex-col gap-4'>
            <ForumItem>
              <ForumItemContent className='md:flex grid-cols-2 flex-row flex-wrap content-start justify-around gap-4'>
                <StyledNextImage
                  src={data.profilePic ?? ""}
                  className=''
                  alt={data.profilePic ?? ""}
                  width={140}
                  height={140}
                />
                <Detail className='flex flex-col gap-2 justify-center lg:w-9/12 w-full'>
                    <AuthorDetails className=''>
                        {data.authorName} | {moment(data.datePosted).fromNow()}
                    </AuthorDetails>
                    <DetailsBox className='flex flex-col gap-2 justify-center w-full'>
                        {data.title &&
                            <ForumItemTitle className=''>
                            {data.title}
                            </ForumItemTitle>
                        }
                        {data.text &&
                            <ForumItemSubTitle className=''
                            dangerouslySetInnerHTML={{
                                __html: data.text,
                            }}
                            />
                        }
                    </DetailsBox>
                    <ActionButtons impressions={data.impressions ?? 0} comments={data.responses?.length ?? 0} />
                </Detail>
              </ForumItemContent>
            </ForumItem>

            <StyledInputContainer className='flex flex-row gap-6' style={applyInputContainerStyle()}>
                <UserAvatar className='row-span-3'>
                <SpeakerImage>
                    <NextImage
                    src={'/images/avatar.png'}
                    className=''
                    alt={""}
                    width={30}
                    height={30}
                    />
                </SpeakerImage>
                </UserAvatar>
                <input placeholder='Share your thoughts...' />
            </StyledInputContainer>
                        
            {data.responses?.length > 0 &&
                <ForumItem>
                    <ForumItemResponses>
                        <DiscussionFilter className='md:flex hidden flex-row gap-2 items-center'>
                            <span>Most Recent</span>
                            <FAIcon
                            icon={'fa-angle-down'}
                            width={10}
                            height={10}
                            />
                        </DiscussionFilter>
                        <CommentBox className='md:block'>
                            {data.responses?.map((comment: any, index: number) => (
                                <div key={comment.id}>
                                    <CommentContent className='' comment={comment} hideComments={true} expand={false} />
                                </div>
                            ))
                            }
                        </CommentBox>
                    </ForumItemResponses>
                </ForumItem>
            }
        </ComponentContainer>        
      </InnerContainer>
    </Container>
  )
}

export default DiscussionComponent