import React, { useState, useEffect, useContext } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  StrapiFile
} from 'interfaces'
import FAIcon from 'components/Bootstrap/FAIcon'
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
var moment = require('moment');
import { useWindowSize } from '@/lib/hooks/useWindowSize';
import { ThemeContext } from 'components/Layout';

type Response = {
  id: number;
  responseBy: string;
  text: string;
  profilePic: string | null;
  datePosted: string;
};

type Discussion = {
  discussionId: number;
  type: string;
  category: string | null;
  title: string;
  text: string;
  profilePic: string | null;
  authorName: string;
  responses: Response[];
  datePosted: string;
};

export interface DiscussionProps {
  firstPage: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  lastPage: string;
  nextPage: string | null;
  pageNumber: number;
  pageSize: number;
  previousPage: string | null;
  totalPages: number;
  totalRecords: number;
  data: Discussion[];
}

export interface DiscussionDataProps {
  data: DiscussionProps
  title?: string
}

const DiscussionContainer = styled.div`
`

const DiscussionTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
`

const DiscussionInnerContainer = styled.div`
`

const FirstColumn = styled.div`
  padding: 10px 20px 20px 20px;
  background: ${props => props.theme.colors.darkestgrey};
  border-radius: ${props => props.theme.borderRadius.components?.small};
  filter: -webkit-box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.75);
  box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.75);
`

const SecondColumn = styled.div`
`

const FeaturedDiscussionCarousel = styled.div`
  
`

const CardContainer = styled.div`
  border-radius: ${props => props.theme.borderRadius.components?.small};
  padding: 50px 30px;
  background-color: ${props => props.theme.colors.brand};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;

  &:hover {
    cursor: pointer;
  }
`

const Author = styled.div`
  filter: -webkit-box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.75);
  box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.75);
  background-color: ${props => props.theme.colors.darkestgrey};
  border-radius: 24px;
  height: 40px;
  width: fit-content;
  position: relative;
  z-index: 2;
  padding-right: 20px;
  margin: 4px 0px -17px 10px;
`

export const StyledNextImage = styled(NextImage)`
  margin-left: 5px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`

export const AuthorDetails = styled.div`
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
  color: ${props => props.theme.colors.lightgrey};
`

const CustomPagination = styled.div`
  .swiper-pagination-bullet {
    background: white;
  }
  .swiper-pagination-bullet-active {
    background: ${props => props.theme.colors.brand};
  }

  padding-top: 20px;

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    padding-top: 10px;
    padding-bottom: 20px;
  }
`

export const ButtonsContainer = styled.div`
  margin-top: 12px;
  span {
    padding-left: 4px;
    color: ${props => props.theme.colors.grey1};
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
  }
  svg {
    color: ${props => props.theme.colors.grey1};
  }
`

export const Divider = styled.div`
  padding-top: 10px;
  border-bottom: 1px solid ${props => props.theme.components?.Discussion?.Divider};
`

const StyledInputContainer = styled.div`
  margin-top: 10px;
  background: ${props => props.theme.colors.darkgrey};
  border-radius: ${props => props.theme.borderRadius.components?.large};
  height: 50px;
  padding: 10px 10px 10px 10px;

  input {
    color: ${props => props.theme.colors.lightgrey};
    background: transparent;

    &:focus {
      outline: none;
    }
  }

  input {
    font-size: 12px;
    font-weight: 300;
    line-height: 16px;
  }
`

const UserAvatar = styled.div`
`

const DiscussionFilter = styled.div`
  color: ${props => props.theme.colors.grey1}; 
  padding-top: 10px;
  span {
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
  }
`

const CommentBox = styled.div`
  margin-top: 10px;
  background: ${props => props.theme.colors.darkgrey};
  border-radius: ${props => props.theme.borderRadius.components?.small};
  padding: 10px;
`

export const CommentAuthor = styled.div`
`

const SpeakerImage = styled.div`
  position: relative;
  img {
    object-fit: cover;
  }
`

const CommentText = styled.div`
  padding: 6px 0px 0px 50px;
  color: ${props => props.theme.components?.Discussion?.CommentTextColor};
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
`

export const OtherDiscussionCommentText = styled(CommentText)`
  padding: 10px 0px 0px 0px; 
  font-weight: 500;
`

const CommentInnerBox = styled.div`
`

const LoadMore = styled.div`
  padding-top: 10px;
  color: ${props => props.theme.colors.grey1}; 
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;

  &:hover {
    color: ${props => props.theme.colors.lightgrey};
  }
`

const CommentActionButtons = styled.div`
  margin-top: 6px;
  padding-left: 50px;
`

export const OtherDiscussionActionButtons = styled(CommentActionButtons)`
  margin-top: 6px;
  padding-left: 0px;
  svg {
    color: ${props => props.theme.colors.brand};
  }
`

const FiltersContainer = styled.div`
  padding: 10px 0px 5px;
`

const Category = styled.div <{ active?: any }>`
  ${({ active }) => css`
    ${props => active == 'true' ? 'background-color: ' + props.theme.colors.grey1 : 'background-color: black'};
    ${props => active == 'true' ? 'color: ' + props.theme.colors.darkestgrey : 'color: ' + props.theme.colors.white};
  `}

  border-radius: 12px;
  padding: 4px 10px;
  width: fit-content;
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;

  &:hover {
    cursor: pointer;
  }
`

export const OtherDiscussionsContainer = styled.div`
`

export const OtherDiscussionInnerBox = styled.div`
`

export const SeeAllButton = styled.div`
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  padding-top: 20px;

  &:hover {
    color: ${props => props.theme.colors.lightgrey};
  }
`

const EmptyAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: ${props => props.theme.colors.brand};
`

// const extractDiscussionCategories = (props: [DiscussionData]) => {
//   let categoriesArray: any = [{
//     Title: 'All',
//     Slug: 'all'
//   }];
//   props.forEach((d: any) => {
//     d.attributes.Category.data.forEach((category: any) => {
//       if (!categoriesArray.some((item: any) => item.Slug === category.attributes.Slug)) {
//         categoriesArray.push({
//           Title: category.attributes.Title,
//           Slug: category.attributes.Slug
//         });
//       }
//     });
//   });
//   return categoriesArray
// }

export const ActionButtons = (props: any) => {
  return (
    <ButtonsContainer className='flex flex-row gap-4 justify-start items-center'>
      <div className='flex flex-row items-center'>
        <FAIcon
          icon={'fa-heart'}
          width={16}
          height={16}
        />
        <span>
          {props.impressions}
        </span>
      </div>
      <div className='flex flex-row items-center'>
        <FAIcon
          icon={'fa-comment'}
          width={16}
          height={16}
        />
        <span>
          {props.comments}
        </span>
      </div>
      <FAIcon
        icon={'fa-share'}
        width={16}
        height={16}
      />
    </ButtonsContainer>
  )
}

const CommentContent = (props: any) => {
  let comment = props?.comment;
  if (!comment) return <></>
  return (
    <CommentInnerBox className={`${props.className} ${props.expand ? "!visible hidden" : ""}`} {...props.expand && { 'id': 'expand-discussion', 'data-twe-collapse-item': true }}>
      <CommentAuthor className='flex flex-row items-center gap-4'>
        <SpeakerImage>
          {comment.profilePic
            ?
            <StyledNextImage
              src={comment.profilePic}
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
          {comment.responseBy} | {moment(comment.datePosted).fromNow()}
        </AuthorDetails>
      </CommentAuthor>
      <CommentText className=''
        dangerouslySetInnerHTML={{
          __html: comment.text,
        }}
      />
      {/* <CommentActionButtons>
        <ActionButtons impressions={comment.attributes.Impressions} comments={0} />
      </CommentActionButtons> */}
    </CommentInnerBox>
  )
}

// export const OtherDiscussion = (props: any) => {
//   let discussion = props?.discussion;
//   if (!discussion) return <></>
//   return (
//     <OtherDiscussionInnerBox className={`${props.className}`}>
//       <CommentAuthor className='flex flex-row items-center gap-4'>
//         <SpeakerImage>
//           <StyledNextImage
//             src={IMAGE_DOMAIN + discussion.attributes?.Author?.data?.attributes?.Image?.data?.attributes?.url}
//             className=''
//             alt={discussion.attributes?.Author?.data?.attributes?.Image?.data?.attributes?.alternativeText ?? ""}
//             width={40}
//             height={40}
//           />
//         </SpeakerImage>
//         <AuthorDetails className=''>
//           {discussion.attributes?.Author?.data?.attributes?.Name} | {moment(discussion.attributes.createdAt).fromNow()}
//         </AuthorDetails>
//       </CommentAuthor>
//       <OtherDiscussionCommentText className=''>
//         {discussion.attributes?.Content}
//       </OtherDiscussionCommentText>
//       <OtherDiscussionActionButtons>
//         <ActionButtons impressions={discussion.attributes.Impressions} comments={0} />
//       </OtherDiscussionActionButtons>
//     </OtherDiscussionInnerBox>
//   )
// }

const Discussion = ({
  data,
  title,
}: DiscussionDataProps) => {

  const [activeDiscussion, setActiveDiscussion] = useState<any>(data.data[0]);
  // const [otherDiscussions, setOtherDiscussions] = useState<any>(data.OtherDiscussions.data);
  // const [activeFilter, setActiveFilter] = useState("all");
  // const [discussionCategories, setDiscussionCategories] = useState([]);
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

  // useEffect(() => {
  //   setDiscussionCategories(extractDiscussionCategories(data.OtherDiscussions.data));
  // }, []);

  // function setActiveCategory(e: any) {
  //   let value = e.target.getAttribute('data-value');
  //   setActiveFilter(value);

  //   let initialOtherDiscussions = data.OtherDiscussions.data;
  //   if (value == 'all') {
  //     setOtherDiscussions(initialOtherDiscussions);
  //   } else {
  //     let filteredOtherDiscussions = initialOtherDiscussions.filter((discussion: any) => {
  //       let categoriesArray = discussion.attributes.Category.data;
  //       if (categoriesArray.some((category: any) => category.attributes.Slug === value)) return discussion;
  //     });
  //     setOtherDiscussions(filteredOtherDiscussions);
  //   }
  // }

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
              {data.data.map((discussion: Discussion) => (
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
            {!isMobile &&
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
            {activeDiscussion.responses?.map((comment: Response, index: number) => (
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
          {/* <FiltersContainer className='flex flex-row gap-2'>
            {discussionCategories.map((category: CategoryItem, index: number) => (
              <Category className='' data-value={category.Slug} onClick={e => setActiveCategory(e)} active={activeFilter == category.Slug ? 'true' : 'false'} key={index}>
                {category.Title}
              </Category>
            ))
            }
          </FiltersContainer>
          <OtherDiscussionsContainer className='flex flex-col'>
            {otherDiscussions.map((discussion: DiscussionData, index: number) => (
              <div key={index} className='flex flex-col gap-4'>
                <Divider />
                <OtherDiscussion discussion={discussion} />
              </div>
            ))
            }
          </OtherDiscussionsContainer>
          <Divider />
          <SeeAllButton as='a' href='#' className='w-fit'>
            See all
          </SeeAllButton> */}
        </SecondColumn>
      </DiscussionInnerContainer>
    </DiscussionContainer >
  )
}

export default Discussion