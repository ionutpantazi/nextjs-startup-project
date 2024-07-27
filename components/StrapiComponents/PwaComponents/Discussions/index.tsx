import React, { useState, useEffect, useContext } from 'react'
import NextImage from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import FAIcon from 'components/Bootstrap/FAIcon'
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
var moment = require('moment');
import { useWindowSize } from '@/lib/hooks/useWindowSize';
import { ThemeContext } from 'components/Layout';
import { ActionButtons } from './ActionButtons';
import { CommentContent } from './CommentContent';
import {
  DiscussionContainer,
  DiscussionTitle,
  DiscussionInnerContainer,
  FirstColumn,
  SecondColumn,
  FeaturedDiscussionCarousel,
  CardContainer,
  Author,
  StyledNextImage,
  AuthorDetails,
  CustomPagination,
  Divider,
  StyledInputContainer,
  UserAvatar,
  DiscussionFilter,
  CommentBox,
  SpeakerImage,
  LoadMore,
} from './styles'


const Discussions = ({
  data,
  title,
}: any) => {

  const [activeDiscussion, setActiveDiscussion] = useState<any>(data.data[0]);
  const theme = useContext(ThemeContext);
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (width && width < Number(theme.screens['md'].replace('px', ''))) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [])

  return (
    <DiscussionContainer className=''>
      <DiscussionTitle className='mb-4'>
        {title ?? 'section title missing'}
      </DiscussionTitle>
      <DiscussionInnerContainer className='flex md:flex-row flex-col gap-10'>
        <FirstColumn className='flex flex-col md:w-3/5 w-auto'>
          <FeaturedDiscussionCarousel className=''>
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              pagination={{
                el: '.swiper-custom-pagination-discussion',
                clickable: true,
              }}
              modules={[Pagination]}
              onSlideChange={(swiperCore) => {
                const {
                  activeIndex,
                } = swiperCore;
                setActiveDiscussion(data.data[activeIndex])
              }}
            >
              {data.data.map((discussion: any) => (
                <SwiperSlide key={discussion.discussionId}>
                  <Author className='flex flex-row items-center gap-4'>
                    <SpeakerImage>
                      {discussion.profilePic
                        ?
                        <StyledNextImage
                          src={discussion.profilePic}
                          className=''
                          alt={""}
                          width={40}
                          height={40}
                        />

                        :
                        <StyledNextImage
                          src={'/images/avatar.png'}
                          className=''
                          alt={""}
                          width={30}
                          height={30}
                        />
                      }
                    </SpeakerImage>
                    <AuthorDetails className=''>
                      {discussion.authorName} | {moment(discussion.datePosted).fromNow()}
                    </AuthorDetails>
                  </Author>
                  <CardContainer
                    dangerouslySetInnerHTML={{
                      __html: discussion.text,
                    }}
                  />
                </SwiperSlide>
              ))
              }
            </Swiper>
            <CustomPagination className=''>
              <div className="flex justify-center gap-2 swiper-custom-pagination-discussion" />
            </CustomPagination>
            {!isMobile && activeDiscussion.responses &&
              <ActionButtons impressions={0} comments={activeDiscussion.responses.length} />
            }
          </FeaturedDiscussionCarousel>
          <Divider />
          <StyledInputContainer className='flex flex-row gap-6'>
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
          <DiscussionFilter className='md:flex hidden flex-row gap-2 items-center'>
            <span>Most Recent</span>
            <FAIcon
              icon={'fa-angle-down'}
              width={10}
              height={10}
            />
          </DiscussionFilter>
          <CommentBox className='md:block hidden'>
            {activeDiscussion.responses?.map((comment: any, index: number) => (
              <div key={comment.id}>
                {index == 0
                  ? <CommentContent className='' comment={comment} expand={false} />
                  : <CommentContent className='pt-2' comment={comment} expand={true} />
                }
              </div>
            ))
            }
          </CommentBox>
          <LoadMore as='a' className='w-fit md:block hidden' data-twe-collapse-init href="#expand-discussion">
            Load more comments
          </LoadMore>
        </FirstColumn>
        <SecondColumn className='md:flex hidden flex-col md:w-2/5 w-auto'>
        </SecondColumn>
      </DiscussionInnerContainer>
    </DiscussionContainer >
  )
}

export default Discussions