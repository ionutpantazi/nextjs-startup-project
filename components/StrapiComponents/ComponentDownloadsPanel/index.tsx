import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import NextImage from 'next/image'
import { useRouter } from 'next/router'
import useSession from "lib/use-session";

import { useWindowSize } from '@/lib/hooks/useWindowSize';
import { RadialContainer } from '@/components/Bootstrap/Common'
import { Download, DownloadCategory, DownloadPageType, DownloadType } from '@/components/Pages/Downloads'
import Dropdown from 'components/StrapiComponents/PwaComponents/Common/Dropdown'
import FAIcon from '@/components/Bootstrap/FAIcon'

export interface ComponentDownloadsPanelProps {
  data: ComponentDownloads
}

export type ComponentDownloads = {
  id: string,
  title: string,
  type: DownloadPageType,
  categories: DownloadCategory[]
}

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto 40px auto;
  padding: ${theme.margins.homepage_large};
  color: ${theme.colors.white};
  overflow: hidden;
  background-color: #1E1E1E;
  border-radius: 24px;

  @media screen and (max-width: ${theme.screens.sm}) {
    padding: ${theme.margins.homepage_small};
    margin: 0 auto 20px auto;
  }
`

const InnerContainer = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  max-width: ${theme.pageWidth};
`

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  margin-bottom: 10px;
`

const StyledNextImage = styled(NextImage)`
`

const DownloadContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 0 auto;
  gap: 16px;
`

const DownloadCard = styled.div`
  flex: 0 0 calc(50% - 8px);
  height: 308px;
  overflow: hidden;
  border-radius: 10px;
`

const DownloadDetails = styled.div`
  z-index: 2;
`

const DownloadTitle = styled.div`
  z-index: 2;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`

const DownloadIcon = styled.div`
  z-index: 2;
  padding: 10px 10px 20px 10px;
  height: 100%;
`

export const DropdownAndSearch = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  margin: 40px auto 30px;
  gap: 20px;
  justify-content: space-between;
  color: black;

  @media screen and (max-width: ${props => props.theme.screens.md}) {
    margin: 10px 0 30px;
    flex-direction: column;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: fit-content;
  flex-grow: 2;
  height: auto;
  padding-left: 40px;
  max-width: 30%;
  margin-right: -28px;

  @media screen and (max-width: ${props => props.theme.screens.md}) {
    padding-left: 0px;
    width: 100%;
    max-width: 100%;
  }
`

export const SearchInput = styled.div`
  color: #fff;
  width: 100%;
  padding: 8px;
  background: transparent;
  border-radius: ${props => props.theme.borderRadius?.components?.small};
  border: 1px solid ${props => props.theme.colors.white};
`

export const SearchButton = styled.div`
  position: relative;
  right: 36px;
  border-radius: 100%;
  background: ${props => props.theme.colors.brand};
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    cursor: pointer;
    background: ${props => props.theme.colors.brandlight};
  }

  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    position: absolute;
  }
`


const ComponentDownloadsPanel = ({
  data
}: ComponentDownloadsPanelProps) => {

  const { width } = useWindowSize();

  const [ search, setSearch ] = useState('');

  const navigateToDownload = (download: Download) => {
    switch (download.type) {
      case DownloadType.Link:
        window.open(download.url, '_blank');
        break;
      default:
        break;
    }
  }
  
  const applyDownloadCardStyle = () => {
    if(width && width < Number(theme.screens['lg'].replace('px', '')))
    {
      return {
        flex: '0 0 100%',
      };
    } else {
      return {
        flex: '0 0 calc(50% - 8px)',
      };
    }
  }

  const dropdownValues = [
    { label: 'Select Category', slug: '' },
    { label: 'Client Websites', slug: 'client_websites' },
    { label: 'Event Footage', slug: 'event_footage' },
    { label: 'The Highlights', slug: 'the_highlights' },
    { label: 'Additional Resources', slug: 'additional_resources' },
  ]
  
  return (
    <>
    <DropdownAndSearch>
      <Dropdown values={dropdownValues} />
      <SearchContainer>
        <SearchInput as='input' onChange={(x) => setSearch(x.target.value || "")}/>
        <SearchButton>
          <FAIcon
            icon={'fa-magnifying-glass'}
            width={16}
            height={16}
          />
        </SearchButton>
      </SearchContainer>
    </DropdownAndSearch>
      {data.categories && data.categories.map((category: DownloadCategory) => (
        <Container key={category.id}>
          {/* {category.id === data.categories[0].id && (
          )} */}
          <InnerContainer className='flex flex-col gap-4'>
            <Title>
              {category.title}
            </Title>
            <DownloadContainer>
              {category.downloads && category.downloads.map((download: Download) => (
                <DownloadCard key={`${category.id}${download.id}`} style={applyDownloadCardStyle()} onClick={() => navigateToDownload(download)}>
                  <DownloadIcon className='row-span-1 grid content-end relative'>
                    {download?.image &&
                      <>
                        <RadialContainer />
                        <StyledNextImage
                          src={download.image ?? ""}
                          className=''
                          alt={download.image ?? ""}
                          fill
                          style={{objectFit:'cover'}}
                        />
                      </>
                    }
                    <DownloadDetails>
                      <DownloadTitle>
                        {download.title}
                      </DownloadTitle>
                    </DownloadDetails>
                  </DownloadIcon>
                </DownloadCard>
              ))
              }
            </DownloadContainer>
          </InnerContainer>
        </Container >
      ))}
    </>
  )
}

export default ComponentDownloadsPanel