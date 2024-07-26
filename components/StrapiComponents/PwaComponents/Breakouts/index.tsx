import React, { useState } from 'react'
import NextImage from 'next/image'
import FAIcon from 'components/Bootstrap/FAIcon'
import SortAndSearch from '../Common/SortAndSearch'
import {
  Title,
  SubTitle,
  BreakoutContainer,
  BreakoutContainerTitle,
  BreakoutItem,
  BreakoutImage,
  BreakoutIcons,
  BreakoutTag,
  BreakoutDetailsContainer,
  BreakoutDetails,
  BreakoutTitle,
  BreakoutSubtitle,
  BreakoutInfo,
  BreakoutButton,
  BreakoutTagsContainer,
  BreakoutTopContainer,
  BreakoutButton2,
} from './styles'

const Breakouts = ({
  data,
  title,
  subtitle,
  type,
}: any) => {

  data.breakouts = {
    title: 'Breakouts',
    data: [
      { image: '/images/breakouts.png', tags: ['Event Technology', 'Hybrid'], title: 'Breakout 1', subtitle: 'Hosted by: Jim Smith', info: 'Click join to access the Zoom call and start networking' },
      { image: '/images/breakouts.png', tags: ['Event Technology', 'Hybrid'], title: 'Breakout 2', subtitle: 'Hosted by: Catherine Fox', info: 'Click join to access the Zoom call and start networking' },
    ]
  }
  data.campfires = {
    title: 'Campfires',
    data: [
      { image: '/images/campfire.png', tags: ['Virtual'], title: 'Breakout 3', subtitle: 'Hosted by: Sally Linx', info: 'Click join to access the Zoom call and start networking' },
      { image: '/images/campfire.png', tags: ['Hybrid'], title: 'Breakout 4', subtitle: 'Hosted by: Catherine Fox', info: 'Click join to access the Live Chat call and start networking' },
      { image: '/images/campfire.png', tags: ['Hybrid'], title: 'Breakout 5', subtitle: 'Hosted by: Sophie Banks', info: 'Click join to access the Live Chat call and start networking' },
      { image: '/images/campfire.png', tags: ['Hybrid'], title: 'Breakout 6', subtitle: 'Hosted by: Jamie Lori', info: 'Click join to access the Live Chat call and start networking' },
    ]
  }
  data.exhibitors = {
    title: 'Meet the Exhibitors',
    data: [
      { image: '/images/chatter.png', tags: ['Event Technology', 'Virtual'], title: 'Chatter', subtitle: 'Hosted by: Shannon Marais', info: 'Click join to access the Webex call and start networking' },
      { image: '/images/nsa.png', tags: ['Hybrid'], title: 'National Space Association', subtitle: 'Hosted by: Laura Whittington', info: 'Click join to access the Zoom call and start networking' },
    ]
  }

  const dropdownValues = [
    { label: 'Default', slug: 'default' },
    { label: 'Newest first', slug: 'newest' },
    { label: 'Oldest first', slug: 'oldest' },
    { label: 'Most popular', slug: 'popular' },
    { label: 'Category', slug: 'category' },
  ]
  return (
    <div className='flex flex-col'>
      <SubTitle>
        {subtitle}
      </SubTitle>
      <SortAndSearch title='Sort by:' dropdownValues={dropdownValues} />

      {/* breakouts */}

      {data.breakouts.data.length &&
        <div className=''>
          <BreakoutContainerTitle>
            {data.breakouts.title}
          </BreakoutContainerTitle>
          <div className='grid grid-cols-1 gap-6'>
            {data.breakouts.data.map((breakout: any, index: number) => (
              <BreakoutContainer key={index}>
                <BreakoutItem>
                  <BreakoutImage>
                    <NextImage
                      src={breakout.image}
                      className=''
                      alt={''}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </BreakoutImage>
                  <BreakoutTopContainer>
                    <BreakoutIcons>
                      <FAIcon
                        icon={'fa-regular fa-user'}
                        width={22}
                        height={22}
                      />
                      <FAIcon
                        icon={'fa-share-nodes'}
                        width={22}
                        height={22}
                      />
                      <FAIcon
                        icon={'fa-regular fa-heart'}
                        width={22}
                        height={22}
                      />
                    </BreakoutIcons>
                    <BreakoutTagsContainer>
                      {breakout.tags.map((tag: any, index: number) => (
                        <BreakoutTag key={index}>
                          {`#${tag}`}
                        </BreakoutTag>
                      ))
                      }
                    </BreakoutTagsContainer>
                  </BreakoutTopContainer>
                  <BreakoutDetailsContainer>
                    <BreakoutDetails>
                      <BreakoutTitle>
                        {breakout.title}
                      </BreakoutTitle>
                      <BreakoutSubtitle>
                        {breakout.subtitle}
                      </BreakoutSubtitle>
                      <BreakoutButton2>
                        {'Join'}
                      </BreakoutButton2>
                      <BreakoutInfo>
                        {breakout.info}
                      </BreakoutInfo>
                    </BreakoutDetails>
                    <BreakoutButton>
                      {'Join'}
                    </BreakoutButton>
                  </BreakoutDetailsContainer>
                </BreakoutItem>
              </BreakoutContainer>
            ))
            }
          </div>
        </div>
      }

      {/* campfires */}

      {data.campfires.data.length &&
        <div className='pt-20'>
          <BreakoutContainerTitle>
            {data.campfires.title}
          </BreakoutContainerTitle>
          <div className='grid md:grid-cols-1  xl:grid-cols-4 lg:grid-cols-2 grid-flow-row gap-6'>
            {data.campfires.data.map((breakout: any, index: number) => (
              <BreakoutContainer key={index}>
                <BreakoutItem>
                  <BreakoutImage>
                    <NextImage
                      src={breakout.image}
                      className=''
                      alt={''}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </BreakoutImage>
                  <BreakoutTopContainer>
                    <BreakoutIcons>
                      <FAIcon
                        icon={'fa-regular fa-user'}
                        width={22}
                        height={22}
                      />
                      <FAIcon
                        icon={'fa-share-nodes'}
                        width={22}
                        height={22}
                      />
                      <FAIcon
                        icon={'fa-regular fa-heart'}
                        width={22}
                        height={22}
                      />
                    </BreakoutIcons>
                    <BreakoutTagsContainer>
                      {breakout.tags.map((tag: any, index: number) => (
                        <BreakoutTag key={index}>
                          {`#${tag}`}
                        </BreakoutTag>
                      ))
                      }
                    </BreakoutTagsContainer>
                  </BreakoutTopContainer>
                  <BreakoutDetailsContainer>
                    <BreakoutDetails>
                      <BreakoutTitle>
                        {breakout.title}
                      </BreakoutTitle>
                      <BreakoutSubtitle>
                        {breakout.subtitle}
                      </BreakoutSubtitle>
                      <BreakoutButton2>
                        {'Join'}
                      </BreakoutButton2>
                      <BreakoutInfo>
                        {breakout.info}
                      </BreakoutInfo>
                    </BreakoutDetails>
                    <BreakoutButton>
                      {'Join'}
                    </BreakoutButton>
                  </BreakoutDetailsContainer>
                </BreakoutItem>
              </BreakoutContainer>
            ))
            }
          </div>
        </div>
      }

      {/* exhibitors */}

      {data.exhibitors.data.length &&
        <div className='pt-20'>
          <BreakoutContainerTitle>
            {data.exhibitors.title}
          </BreakoutContainerTitle>
          <div className='grid md:grid-cols-1 lg:grid-cols-2 grid-flow-row gap-6'>
            {data.exhibitors.data.map((breakout: any, index: number) => (
              <BreakoutContainer key={index}>
                <BreakoutItem>
                  <BreakoutImage>
                    <NextImage
                      src={breakout.image}
                      className=''
                      alt={''}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </BreakoutImage>
                  <BreakoutTopContainer>
                    <BreakoutIcons>
                      <FAIcon
                        icon={'fa-regular fa-user'}
                        width={22}
                        height={22}
                      />
                      <FAIcon
                        icon={'fa-share-nodes'}
                        width={22}
                        height={22}
                      />
                      <FAIcon
                        icon={'fa-regular fa-heart'}
                        width={22}
                        height={22}
                      />
                    </BreakoutIcons>
                    <BreakoutTagsContainer>
                      {breakout.tags.map((tag: any, index: number) => (
                        <BreakoutTag key={index}>
                          {`#${tag}`}
                        </BreakoutTag>
                      ))
                      }
                    </BreakoutTagsContainer>
                  </BreakoutTopContainer>
                  <BreakoutDetailsContainer>
                    <BreakoutDetails>
                      <BreakoutTitle>
                        {breakout.title}
                      </BreakoutTitle>
                      <BreakoutSubtitle>
                        {breakout.subtitle}
                      </BreakoutSubtitle>
                      <BreakoutButton2>
                        {'Join'}
                      </BreakoutButton2>
                      <BreakoutInfo>
                        {breakout.info}
                      </BreakoutInfo>
                    </BreakoutDetails>
                    <BreakoutButton>
                      {'Join'}
                    </BreakoutButton>
                  </BreakoutDetailsContainer>
                </BreakoutItem>
              </BreakoutContainer>
            ))
            }
          </div>
        </div>
      }

      <div className='h-20' />
    </div>
  )
}

export default Breakouts