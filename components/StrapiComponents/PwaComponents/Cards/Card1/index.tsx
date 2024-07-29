import React from 'react'
import FAIcon from 'components/Bootstrap/FAIcon'
import NextImage from 'next/image'
import {
  CardContainer,
  ImageContainer,
  CardTitle,
  CardSubTitle,
  ExpandButton,
  Badge,
} from './styles'

const Delegates = ({
  data,
  isExpanded,
}: any) => {

  const imageStyle = (isExpanded: any) => ({
    width: isExpanded ? '160px' : '200px',
    height: isExpanded ? '180px' : '300px',
    // transition: 'all 0.6s ease',
  });

  const titleAndSubtitleStyle = (isExpanded: any) => ({
    display: isExpanded ? 'none' : '',
  }) as React.CSSProperties;

  const detailsStyle = (isExpanded: any) => ({
    display: isExpanded ? '' : 'none',
  }) as React.CSSProperties;

  return (
    <>
      <CardContainer>
        <div className='flex flex-row'>
          <ImageContainer style={imageStyle(isExpanded)} className='relative' hidebackground={data.profilePic ? 'true' : 'false'}>
            {data.profilePic &&
              <>
                <NextImage
                  src={data.profilePic}
                  className=''
                  alt={''}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </>
            }
          </ImageContainer>
          <div style={detailsStyle(isExpanded)} className='flex flex-col gap-2 px-8'>
            <CardTitle>
              {`${data.firstName} ${data.surname}`}
            </CardTitle>
            <CardSubTitle>
              {data.company}
            </CardSubTitle>
            <CardSubTitle>
              {data.bio}
            </CardSubTitle>
            <div className='flex flex-row gap-2'>
              <Badge active={'true'}>
                <span>
                  Adventurer
                </span>
              </Badge>
              <Badge as='a' href='#' active={'true'}>
                <FAIcon
                  icon={'fa-plus'}
                  width={10}
                  height={10}
                />
                <span>
                  Follow on LinkedIn
                </span>
              </Badge>
            </div>
          </div>
        </div>
        <div style={titleAndSubtitleStyle(isExpanded)} className='pb-4'>
          <CardTitle>
            {`${data.firstName} ${data.surname}`}
          </CardTitle>
          <CardSubTitle>
            {data.company}
          </CardSubTitle>
        </div>
      </CardContainer>
      <ExpandButton>
        {isExpanded
          ?
          <FAIcon
            icon={'fa-circle-minus'}
            width={40}
            height={40}
          />
          :
          <FAIcon
            icon={'fa-circle-plus'}
            width={40}
            height={40}
          />
        }
      </ExpandButton>
    </>
  )
}

export default Delegates