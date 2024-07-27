var moment = require('moment');
import {
  StyledNextImage,
  AuthorDetails,
  CommentAuthor,
  SpeakerImage,
  CommentText,
  CommentInnerBox,
} from './styles'

export const CommentContent = (props: any) => {
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