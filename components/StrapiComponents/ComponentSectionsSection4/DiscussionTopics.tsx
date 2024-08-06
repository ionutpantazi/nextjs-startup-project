import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import FAIcon from 'components/Bootstrap/FAIcon'
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import {
  OtherDiscussionsContainer,
  Divider,
  OtherDiscussionInnerBox,
  CommentAuthor,
  StyledNextImage,
  AuthorDetails,
  OtherDiscussionCommentText,
  ButtonsContainer,
  OtherDiscussionActionButtons,
  SeeAllButton,
  DiscussionData
} from '../ComponentSectionsSection1/Discussion'
var moment = require('moment');
import { CommentsProps } from '../ComponentSectionsSection1/Discussion'

export type DiscussionTopicsProps = {
  id: string,
  Title: string
  Discussions: {
    data: [
      DiscussionData
    ]
  }
}

export interface DiscussionTopicsDataProps {
  data: DiscussionTopicsProps
}

const DiscussionTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
`

const StyledOtherDiscussionsContainer = styled(OtherDiscussionsContainer)`
  overflow-Y: scroll;
  max-height: 320px;

  @media screen and (max-width: ${props => props.theme.screens.md}) {
    max-height: 400px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`

const DiscussionTopicsContainer = styled.div`
  padding: 40px;
`

const CommenterImage = styled(NextImage)`
  margin-left: -10px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  z-index: 2;
  position: relative;
  img {
    object-fit: cover;
  }
`

const SpeakerImage = styled.div`
  position: relative;
  img {
    object-fit: cover;
  }
`

const ActionButtons = (props: any) => {
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
      <FAIcon
        icon={'fa-share'}
        width={16}
        height={16}
      />
      <div className='flex flex-row ml-6'>
        {props.discussion.attributes.Comments.data.map((participant: CommentsProps, index: number) => (
          <CommenterImage
            key={index}
            src={IMAGE_DOMAIN + participant.attributes?.Author?.data?.attributes?.Image?.data?.attributes?.url}
            className=''
            alt={participant.attributes?.Author?.data?.attributes?.Image?.data?.attributes?.alternativeText ?? ""}
            width={40}
            height={40}
          />
        ))
        }
      </div>
    </ButtonsContainer>
  )
}

const OtherDiscussion = (props: any) => {
  let discussion = props?.discussion;
  if (!discussion) return <></>
  return (
    <OtherDiscussionInnerBox className={`${props.className}`}>
      <CommentAuthor className='flex flex-row items-center gap-4'>
        <SpeakerImage>
          <StyledNextImage
            src={IMAGE_DOMAIN + discussion.attributes?.Author?.data?.attributes?.Image?.data?.attributes?.url}
            className=''
            alt={discussion.attributes?.Author?.data?.attributes?.Image?.data?.attributes?.alternativeText ?? ""}
            width={40}
            height={40}
          />
        </SpeakerImage>
        <AuthorDetails className=''>
          {discussion.attributes?.Author?.data?.attributes?.Name} / Event Name | {moment(discussion.attributes.createdAt).format('ddd')} {moment(discussion.attributes.createdAt, moment.HTML5_FMT.TIME_MS).format('h:mma')}
        </AuthorDetails>
      </CommentAuthor>
      <OtherDiscussionCommentText className=''>
        {discussion.attributes?.Content}
      </OtherDiscussionCommentText>
      <OtherDiscussionActionButtons>
        <ActionButtons impressions={discussion.attributes.Impressions} discussion={discussion} hideComments={true} />
      </OtherDiscussionActionButtons>
    </OtherDiscussionInnerBox>
  )
}

const DiscussionTopics = ({
  data
}: DiscussionTopicsDataProps) => {

  return (
    <DiscussionTopicsContainer className=''>
      <DiscussionTitle>
        {data.Title}
      </DiscussionTitle>
      <StyledOtherDiscussionsContainer className='flex flex-col pt-4'>
        {data.Discussions.data.map((discussion: DiscussionData, index: number) => (
          <div key={index} className='flex flex-col gap-4'>
            <Divider />
            <OtherDiscussion discussion={discussion} />
          </div>
        ))
        }
      </StyledOtherDiscussionsContainer>
      <Divider className='mb-2' />
      <SeeAllButton as='a' href='#' className='w-fit'>
        See all
      </SeeAllButton>
    </DiscussionTopicsContainer>
  )
}

export default DiscussionTopics