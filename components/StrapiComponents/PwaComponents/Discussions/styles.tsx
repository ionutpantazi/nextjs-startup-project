import styled, { css } from 'styled-components'
import NextImage from 'next/image'

export const DiscussionContainer = styled.div`
`

export const DiscussionTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
`

export const DiscussionInnerContainer = styled.div`
`

export const FirstColumn = styled.div`
  padding: 10px 20px 20px 20px;
  background: ${props => props.theme.colors.darkestgrey};
  border-radius: ${props => props.theme.borderRadius.components?.small};
  filter: -webkit-box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.75);
  box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.75);
`

export const SecondColumn = styled.div`
`

export const FeaturedDiscussionCarousel = styled.div`
  
`

export const CardContainer = styled.div`
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

export const Author = styled.div`
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

export const CustomPagination = styled.div`
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

export const StyledInputContainer = styled.div`
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

export const UserAvatar = styled.div`
`

export const DiscussionFilter = styled.div`
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

export const CommentAuthor = styled.div`
`

export const SpeakerImage = styled.div`
  position: relative;
  img {
    object-fit: cover;
  }
`

export const CommentText = styled.div`
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

export const CommentInnerBox = styled.div`
`

export const LoadMore = styled.div`
  padding-top: 10px;
  color: ${props => props.theme.colors.grey1}; 
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;

  &:hover {
    color: ${props => props.theme.colors.lightgrey};
  }
`

export const CommentActionButtons = styled.div`
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

export const FiltersContainer = styled.div`
  padding: 10px 0px 5px;
`

export const Category = styled.div <{ active?: any }>`
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

export const EmptyAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: ${props => props.theme.colors.brand};
`