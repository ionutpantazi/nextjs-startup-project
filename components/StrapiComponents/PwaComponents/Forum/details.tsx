import React, { useState, useEffect, useContext } from 'react'
import styled, { css } from 'styled-components'
import NextImage from 'next/image'
import FAIcon from 'components/Bootstrap/FAIcon'
import {
  Container,
  InnerContainer,
  ComponentContainer,
  OuterContainer,
} from 'components/Bootstrap/Common'
import { useWindowSize } from '@/lib/hooks/useWindowSize';
import { ThemeContext } from 'components/Layout';
import { useRouter } from 'next/router'
import { CommentContent } from '../Discussions/CommentContent'
import { ActionButtons } from '../Discussions/ActionButtons'
import { AuthorDetails, SpeakerImage } from '../Discussions/styles'
import { LeftEventTitle } from '../Header/styles'
import Ruler from '../Common/Ruler'
import CustomTextArea from '../Common/TextArea'
import { post } from '@/lib/httpClient'
import useSession from "lib/use-session";
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

const ForumItemSubTitle = styled.div`
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  color: ${props => props.theme.colors.white};
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

const CommentContainer = styled.div`
  @media screen and (max-width: ${props => props.theme.screens.md}) {
    margin: auto;
  }
`

const UserAvatar = styled.div`
  @media screen and (max-width: ${props => props.theme.screens.md}) {
    display: none;
  }
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
  const [responseValue, setResponseValue] = useState('');
  const router = useRouter();
  const { session, isLoading } = useSession();
  const [ responses, setResponses ] = useState(data.responses);

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

  const toggleImpression = (discussion: any) => {

  }
  
  const addComment = () => {
    let slugs = router.query;

    if (!session.isLoggedIn) {
      document.getElementById('login_button')?.click();
    } else {
      post(`/api/discussions/addResponse`, { eventId: slugs.slug, discussionId: data, response: responseValue }, {})
      .then((res) => {
        if (res.err?.status === 401) {
          document.getElementById('login_button')?.click();
        } else if (res.err) {

        }
      });
    }
  }

  // const updateResponseArray = (method: string) => {
  //   let updatedResponses = responses.map((response: any) => {
  //     let updatedBreakouts = category.breakouts.map((b: any) => {
  //       if (b.id === breakoutId) {
  //         b.breakoutRated = method === 'add' ? true : false;
  //         b.breakoutRating = method === 'add' ? b.breakoutRating + 1 : b.breakoutRating - 1;
  //       }
  //       return b;
  //     });
  //     return { ...category, breakouts: updatedBreakouts };
  //   });
  //   setResponses(updatedCategories);
  // }

  return (
    <OuterContainer className=''>
      <Container>
        <InnerContainer className='flex flex-col gap-4'>
          <ComponentContainer>
            <LeftEventTitle>
              {data.title ? data.title : 'Discussion'}
            </LeftEventTitle>
            <Ruler />
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
                    {data.text &&
                      <ForumItemSubTitle className=''
                        dangerouslySetInnerHTML={{
                          __html: data.text,
                        }}
                      />
                    }
                  </DetailsBox>
                  <ActionButtons 
                    impressions={data.impressions ?? 0}
                    impressionClicked={data.rated}
                    onImpressionClick={() => toggleImpression(data)}
                    comments={responses.length ?? 0}
                    onCommentClick={() => navigateToDiscussion(data.discussionId)} />
                </Detail>
              </ForumItemContent>
            </ForumItem>

            <CommentContainer className='flex flex-row gap-4 !my-4 mx-[42px] flex-1 !w-auto'>
              <UserAvatar className='row-span-3 ml-[5px]'>
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
              <CustomTextArea className={'flex-1'} placeholder='Share your thoughts...' value={responseValue} setValue={setResponseValue} />
              
              <div className="absolute inset-y-0 right-0 flex items-center px-2" onClick={addComment}>
                <FAIcon
                  icon={'fa-plane-top'}
                  width={20}
                  height={20}
                />
              </div>
            </CommentContainer>

            {responses.length > 0 &&
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
                    {responses.map((comment: any, index: number) => (
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
    </OuterContainer>
  )
}

export default DiscussionComponent