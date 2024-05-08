import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import FAIcon from 'components/Bootstrap/FAIcon'
import { Speaker, Workshop } from '../ComponentSectionsSpeakersCarousel'

export type ListProps = {
  id: string
  Title: string
  Visible: string
  Speakers: {
    data: [
      Speaker
    ]
  }
  Workshops: {
    data: [
      Workshop
    ]
  }
}

export type ListsProps = {
  id: string
  Title: string
  List: [ListProps]
}

export interface ListsDataProps {
  data: ListsProps
}

const ListsContainer = styled.div`
`

const ListsTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
`

const ListsInnerContainer = styled.div`
`

const List = styled.div`
`

const ListTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`

const RoundedImage = styled(NextImage)`
  border-radius: 50%;
  width: 60px;
  height: 60px;
`

const ItemTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`

const Itemposition = styled.div`
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
  color: ${props => props.theme.colors.lightgrey};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 32px;
`

const ReadMore = styled.div`
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  padding-top: 20px;
  color: ${props => props.theme.components?.Lists?.ReadMoreColor};
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.brandlight};
  }
`

const Spacer = styled.div`
  height: 40px
`

const ShowAll = styled.div`
  span {
    font-size: 12.8px;
    font-weight: 700;
    line-height: 16px;
    padding-bottom: 10px;
    color: ${props => props.theme.components?.Lists?.ShowAllColor};
    &:hover {
      cursor: pointer;
      color: ${props => props.theme.components?.Lists?.ShowAllHoverColor};
    }
  }
`

const ImageIcon = styled.div`
  background: ${props => props.theme.colors.brand};
  border-radius: 50%;
  height: 24px;
  width: 24px;
  svg {
    padding: 4px;
    color: ${props => props.theme.components?.Lists?.ImageIconSvgColor};
  }

  &:hover {
    cursor: pointer;
    background: ${props => props.theme.colors.brandlight};
    svg {
      color: ${props => props.theme.components?.Lists?.ImageIconSvgHoverColor};
    
  }
`

const StyledImageIcon = styled(ImageIcon)`
  background: ${props => props.theme.components?.Lists?.StyledImageIconBackground};
`

const StyledTextImageIcon = styled(ImageIcon)`
  border-radius: ${props => props.theme.borderRadius.components.medium};
  padding: 8px 10px;
  background: ${props => props.theme.components?.Lists?.StyledTextImageIconBackground};
  width: auto;
  span {
    font-size: 11px;
    font-weight: 500;
    line-height: 16px;
  }

  &:hover {
    color: ${props => props.theme.components?.Lists?.StyledTextImageIconHoverColor};
  }
`

const Lists = ({
  data
}: ListsDataProps) => {

  return (
    <ListsContainer className=''>
      <ListsTitle className='mb-8'>
        {data.Title}
      </ListsTitle>
      <ListsInnerContainer className='flex md-flex-row flex-row flex-wrap justify-between gap-y-10'>
        {data.List.map((list: ListProps, index: number) => (
          <List key={index} className='flex flex-col gap-2'>
            <ListTitle className='mb-6'>
              {list.Title}
            </ListTitle>
            <div className='sm:grid sm:grid-rows-3 flex flex-col grid-flow-col gap-10 gap-x-10'>
              {list.Speakers?.data.map((speaker: Speaker, index: number) => (
                <div key={index} className='flex flex-row gap-6'>
                  <div className='flex'>
                    <RoundedImage
                      src={IMAGE_DOMAIN + speaker.attributes?.Image?.data?.attributes?.url}
                      className=''
                      alt={speaker.attributes?.Image?.data?.attributes?.alternativeText ?? ""}
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className='flex flex-col gap-2 max-w-60'>
                    <ItemTitle className=''>
                      {speaker.attributes.Name}
                    </ItemTitle>
                    <Itemposition className=''>
                      {speaker.attributes.Position}
                    </Itemposition>
                    <div className='flex flex-row gap-1'>
                      <ImageIcon className=''>
                        <FAIcon
                          icon={'fa-leaf'}
                          width={16}
                          height={16}
                        />
                      </ImageIcon>
                      <StyledImageIcon className=''>
                        <FAIcon
                          icon={'fa-brands fa-linkedin-in'}
                          width={16}
                          height={16}
                        />
                      </StyledImageIcon>
                    </div>
                  </div>
                </div>
              ))
              }
              {list.Workshops?.data.map((workshop: Workshop, index: number) => (
                <div key={index} className='flex flex-row gap-6'>
                  <div className='flex'>
                    <RoundedImage
                      src={IMAGE_DOMAIN + workshop.attributes?.Image?.data?.attributes?.url}
                      className=''
                      alt={workshop.attributes?.Image?.data?.attributes?.alternativeText ?? ""}
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className='flex flex-col gap-2 max-w-60'>
                    <ItemTitle className=''>
                      {workshop.attributes.Title}
                    </ItemTitle>
                    <Itemposition className=''>
                      {workshop.attributes.Intro}
                    </Itemposition>
                    <div className='flex flex-row gap-1'>
                      <ImageIcon className=''>
                        <FAIcon
                          icon={'fa-leaf'}
                          width={16}
                          height={16}
                        />
                      </ImageIcon>
                      <StyledTextImageIcon className='flex items-center'>
                        <span>
                          Book your place
                        </span>
                        <FAIcon
                          icon={'fa-arrow-right'}
                          width={16}
                          height={16}
                        />
                      </StyledTextImageIcon>
                    </div>
                  </div>
                </div>
              ))
              }
            </div>
            <ReadMore className='w-fit'>
              View more
            </ReadMore>
          </List>
        ))
        }
      </ListsInnerContainer>
      <Spacer />
      <ShowAll className='flex flex-col items-center justify-center'>
        <span className='w-fit'>Show All</span>
      </ShowAll>
    </ListsContainer>
  )
}

export default Lists