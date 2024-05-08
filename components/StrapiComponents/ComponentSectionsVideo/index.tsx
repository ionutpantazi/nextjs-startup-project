import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import {
  Container,
  InnerContainer,
  Title,
} from 'components/Bootstrap/Common'
import NextImage from 'next/image'
import {
  StrapiFile
} from 'interfaces'
import axios from 'axios'
import { get_youtube_thumbnail } from 'utils/helpers'


export type VideoProps = {
  id: string,
  Title: string;
  Videos: [
    Videos
  ]
}

export type Videos = {
  id: string,
  Title: string;
  Sub_Title: string
  YouTubeID: string
  Categories: {
    data: [
      Category
    ]
  }
}

export type Category = {
  data: [
    id: string,
    attributes: CategoryItem
  ]
}

export type CategoryItem = {
  Title: string,
  Slug: string,
}

const ComponentVideoContainer = styled.div`
`

const VideoContainer = styled.div`
  border-radius: 8px;
  background-color: ${props => props.theme.components?.Video?.VideoContainerBackground};
  padding: 10px;
  max-height: 520px;

  @media screen and (max-width: ${props => props.theme.screens.lg}) {
    padding: 8px;
    max-height: 700px;
  }
`

const VideoPlayerContainer = styled.div`
  background: ${props => props.theme.colors.brand};
  border-radius: 6px;
  height: 500px;
  overflow: hidden;

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    height: 200px;
  }
`

const VideoListing = styled.div`
  @media screen and (max-width: ${props => props.theme.screens.lg}) {
    max-height: 350px;
  }
`

const FiltersContainer = styled.div`
  padding: 10px 10px 5px;
`

const Category = styled.div <{ active?: any }>`
  ${({ active }) => css`
    ${props => active == 'true' ? 'background-color: ' + props.theme.colors.brand : 'background-color: ' + props.theme.components?.Video?.CategoryBackground};
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

const List = styled.div`
  padding: 10px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    padding: 0px;
  }
`

const ListItem = styled.div <{ active?: any }>`
  ${({ active }) => css`
    ${props => active == 'true' ?
      'filter: -webkit-box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.15); -moz-box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.15); box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.15); border-radius: 8px; background-color: ' + props.theme.components?.Video?.ListItemBackground + ';'
      : 'unset'
    };
  `}
  transition: 0.5s;
  padding: 8px;
  min-height: 100px;

  &:hover {
    cursor: pointer;
    filter: -webkit-box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.15);
    box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.15);
    border-radius: 8px;
    background-color: ${props => props.theme.components?.Video?.ListItemHoverColor};
  }

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    padding: 6px 0px 0px;
  }
`

const ListItemVideo = styled.div`
  background: ${props => props.theme.colors.brand};
  border-radius: 6px;
  height: auto;
  width: 140px;
  overflow: hidden;
`

const ListItemInfo = styled.div`
`

const InfoPlaying = styled.div <{ active?: any }>`
  ${({ active }) => css`
    ${active == 'true' ? 'visibility: visible;' : 'visibility: hidden;'};
  `}

  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  color: ${props => props.theme.colors.lightgrey};
`

const InfoTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`

const InfoDetails = styled.div`
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
  color: ${props => props.theme.colors.lightgrey};
`

const ShowAll = styled.div`
  span {
    font-size: 12.8px;
    font-weight: 700;
    line-height: 16px;
    padding-bottom: 10px;
    color: ${props => props.theme.components?.Video?.ShowAllColor};
    &:hover {
      cursor: pointer;
      color: ${props => props.theme.components?.Video?.ShowAllHoverColor};
    }
  }
`

const VideoPlayer = (props: any) => {
  if(!props?.activeVideo?.YouTubeID) return <></>
  return (
    <iframe
      src={`https://www.youtube.com/embed/${props?.activeVideo?.YouTubeID}`}
      frameBorder='0'
      allow='autoplay; encrypted-media'
      allowFullScreen
      width={'100%'}
    />
  )
}

const extractVideoCategories = (props: VideoProps) => {
  let categoriesArray: any = [{
    Title: 'All',
    Slug: 'all'
  }];
  props.Videos.forEach((s: Videos) => {
    s.Categories.data.forEach((category: any) => {
      if (!categoriesArray.some((item: any) => item.Slug === category.attributes.Slug)) {
        categoriesArray.push({
          Title: category.attributes.Title,
          Slug: category.attributes.Slug
        });
      }
    });
  });
  return categoriesArray
}

const selectFirstVideo = (props: VideoProps) => {
  if (props.Videos.length) {
    return props.Videos[0];
  }
  return null;
}

export interface ComponentSectionsVideoProps {
  data: VideoProps
}

const ComponentSectionsVideo = ({
  data
}: ComponentSectionsVideoProps) => {

  const [videos, setVideos] = useState<any>(data.Videos);
  const [activeFilter, setActiveFilter] = useState("all");
  const [videoCategories, setVideoCategories] = useState([]);
  const [activeVideo, setActiveVideo] = useState(selectFirstVideo(data));

  useEffect(() => {
    setVideoCategories(extractVideoCategories(data));
  }, []);

  function setActiveCategory(e: any) {
    let value = e.target.getAttribute('data-value');
    setActiveFilter(value);

    let initialVideos = data.Videos;
    if (value == 'all') {
      setVideos(initialVideos);
    } else {
      let filteredVideos = initialVideos.filter((video) => {
        let categoriesArray = video.Categories.data;
        if (categoriesArray.some((category: any) => category.attributes.Slug === value)) return video;
      });
      setVideos(filteredVideos);
    }
  }

  return (
    <ComponentVideoContainer className='flex flex-col gap-4'>
      <Title>
        {data.Title}
      </Title>
      <VideoContainer className='flex justify-between lg:flex-row flex-col gap-x-4 gap-y-4 '>
        <VideoPlayerContainer className='flex lg:w-2/3 w-full'>
          {/* {activeVideo &&
            <NextImage
              src={get_youtube_thumbnail(`https://youtu.be/${activeVideo.YouTubeID}`, 'low')}
              className=''
              alt={''}
              width={809}
              height={100}
              quality={80}
            />
          } */}
          <VideoPlayer activeVideo={activeVideo} />
        </VideoPlayerContainer>
        <VideoListing className='flex flex-col gap-2 lg:w-1/3 w-full'>
          <FiltersContainer className='flex flex-row gap-2'>
            {videoCategories.map((category: CategoryItem, index) => (
              <Category className='' data-value={category.Slug} onClick={e => setActiveCategory(e)} active={activeFilter == category.Slug ? 'true' : 'false'} key={index}>
                {category.Title}
              </Category>
            ))
            }
          </FiltersContainer>
          <List className='flex flex-col gap-3'>
            {videos.map((video: Videos) => (
              <ListItem key={video.id} className='flex flex-row gap-4 drop-shadow-md' onClick={() => setActiveVideo(video)} active={activeVideo?.id == video.id ? 'true' : 'false'}>
                <ListItemVideo className='w-1/3'>
                  <NextImage
                    src={get_youtube_thumbnail(`https://youtu.be/${video.YouTubeID}`, 'low')}
                    className=''
                    alt={''}
                    width={140}
                    height={100}
                    quality={10}
                  />
                </ListItemVideo>
                <ListItemInfo className='flex flex-col w-2/3'>
                  <InfoPlaying active={activeVideo?.id == video.id ? 'true' : 'false'}>
                    Currently Playing
                  </InfoPlaying>
                  <InfoTitle>
                    {video.Title}
                  </InfoTitle>
                  <InfoDetails>
                    {video.Sub_Title}
                  </InfoDetails>
                </ListItemInfo>
              </ListItem>
            ))}
          </List>
        </VideoListing>
      </VideoContainer>
      <ShowAll className='flex flex-col items-center justify-center'>
        <span className='w-fit'>Show All</span>
      </ShowAll>
    </ComponentVideoContainer>
  )
}

export default ComponentSectionsVideo