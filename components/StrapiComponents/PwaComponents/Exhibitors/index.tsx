import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router'
import {
  OuterContainer,
  Container,
  InnerContainer,
  RadialContainer,
  ComponentContainer,
} from 'components/Bootstrap/Common'
import Ruler from '@/components/StrapiComponents/PwaComponents/Common/Ruler'
import {
  LeftEventTitle,
} from '@/components/StrapiComponents/PwaComponents/Header/styles'

import 'swiper/css';
import { useWindowSize } from '@/lib/hooks/useWindowSize';
import { ExhibitorItem, CardWidth } from '../Exhibitor'
import SortAndSearch, { DropdownAndSearch, SearchButton, SearchContainer, SearchInput } from '../Common/SortAndSearch'
import FAIcon from '@/components/Bootstrap/FAIcon'

export type ComponentExhibitors = {
  id: string,
  title: string,
  header: string,
  items: {
    data: ExhibitorItem[]
  }
}

export interface ComponentExhibitorsPanelProps {
  data: ComponentExhibitors
}

const ExhibitorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 0 auto;
`

const ExhibitorCard = styled.div`
  margin: 0 auto;
  height: 308px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`

const ExhibitorDetails = styled.div`
  z-index: 2;
`

const StyledNextImage = styled(NextImage)`
`

const ExhibitorTitle = styled.div`
  z-index: 2;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`

const ExhibitorSubtitle = styled.div`
  z-index: 2;
  font-size: 14px;
  font-weight: 300;
  line-height: 29px;
`

const ExhibitorIcon = styled.div`
  z-index: 2;
  padding: 10px 10px 20px 10px;
  height: 100%;
`

export const SubTitle = styled.div`
  width: 100%;
  font-size: 25px;
  font-weight: 300;
  line-height: 22px;
  color: ${props => props.theme.colors.white};
  padding-top: 20px;
`

const ComponentExhibitorsPanel = ({
  data
}: ComponentExhibitorsPanelProps) => {

  const router = useRouter()

  const { width } = useWindowSize();

  const [exhibitors] = useState<any>(data.items);
  const [search, setSearch] = useState<string>("");

  const navigateToItem = (url: string, target: string) => {
    if (!url) return;
    
    const exhibitorUrlRegex = /exhibitor\.aspx\?eid=(\d+)/i;
    
    const isExhibitor = url.match(exhibitorUrlRegex);
    
    if (isExhibitor) {
      router.push(`${router.asPath}/${isExhibitor[1]}`);
    } else {
      window.open(url, target);
    }
  }
  
  const [windowWidth, setWindowWidth] = useState<number | undefined>();

  // TODO: Clean this up (temp because the initial load doesn't have the correct width when using const { width } = useWindowSize())
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    
    // Set the initial width
    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const applyExhibitorCardStyle = (columnSize: number, screenWidth: number | undefined) => {
    switch (columnSize) {
      case 12:
        return {
          flex: '0 0 100%',
          height: '600px',
          'border-radius': '10px'
        };
      case 6:
        if(screenWidth && screenWidth < Number(theme.screens['lg'].replace('px', '')))
        {
          return {
            flex: '0 0 100%',
            height: '320px',
            'border-radius': '10px'
          };
        } else {
          return {
            flex: '0 0 calc(50% - 8px)',
            'min-width': '360px',
            height: '320px',
            'border-radius': '10px'
          };
        }
      case 3:
        if (screenWidth &&  screenWidth > Number(theme.screens['sm'].replace('px', '')) && screenWidth < Number(theme.screens['lg'].replace('px', '')))
        {
          return {
            flex: '0 0 calc(50% - 8px)',
            height: '320px',
            'border-radius': '10px'
          };
        } else if (screenWidth && screenWidth < Number(theme.screens['sm'].replace('px', ''))) {
          return {
            flex: '0 0 100%',
            height: '320px',
            'border-radius': '10px'
          };
        } else {
          return {
            flex: '0 0 calc(25% - 12px)',
            height: '320px',
            'border-radius': '10px'
          };
        }
    }
  }

  return (
    <OuterContainer className=''>
      <Container>
        <InnerContainer className='flex flex-col gap-4'>
          <ComponentContainer>
            <LeftEventTitle>
              {data.title}
            </LeftEventTitle>
            <Ruler />
            <ExhibitorContainer className='w-full grid gap-4'>
              <SubTitle dangerouslySetInnerHTML={{ __html: data.header }} />
              <SortAndSearch showSearch={true} showSort={false} dropDownPlaceholder={''} selectedValue={search} setSelectedValue={setSearch} />
              {exhibitors.map((exhibitor: ExhibitorItem) => (
                <ExhibitorCard key={exhibitor.id} style={applyExhibitorCardStyle(exhibitor.cardColumnSize, windowWidth)} onClick={() => navigateToItem(exhibitor.url, exhibitor.target)}>
                  <ExhibitorIcon className='row-span-1 grid content-end relative'>
                    {exhibitor?.upload &&
                      <>
                        <RadialContainer />
                        <StyledNextImage
                          src={exhibitor.upload.path ?? ""}
                          className=''
                          alt={exhibitor.upload.alt ?? ""}
                          fill
                          style={{objectFit:'cover'}}
                        />
                      </>
                    }
                    <ExhibitorDetails>
                      <ExhibitorTitle>
                        {exhibitor.title}
                      </ExhibitorTitle>
                      <ExhibitorSubtitle>
                        {exhibitor.subtitle}
                      </ExhibitorSubtitle>
                    </ExhibitorDetails>
                  </ExhibitorIcon>
                </ExhibitorCard>
              ))
              }
            </ExhibitorContainer>
          </ComponentContainer>
        </InnerContainer>
      </Container >
    </OuterContainer>
  )
}

export default ComponentExhibitorsPanel