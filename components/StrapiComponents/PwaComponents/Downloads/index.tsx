import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import NextImage from 'next/image'

import { useWindowSize } from '@/lib/hooks/useWindowSize';
import { ComponentContainer, Container, InnerContainer, OuterContainer, RadialContainer } from '@/components/Bootstrap/Common'
import { Download, DownloadCategory, DownloadPageType, DownloadType } from '@/components/Pages/ContentPages'
import SortAndSearch from '../Common/SortAndSearch'
import { LeftEventTitle } from '../Header/styles';
import Ruler from '../Common/Ruler';

export interface ContentTabDownloadsProps {
  data: Downloads
}

export type Downloads = {
  id: string,
  title: string,
  type: DownloadPageType,
  categories: DownloadCategory[]
}

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
  
  &:hover {
    cursor: pointer;
  }
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


const ContentTabDownloads = ({
  data
}: ContentTabDownloadsProps) => {

  const { width } = useWindowSize();

  const [ search, setSearch ] = useState('');
  
  const dropdownValues = data.categories.map((category: any) => {
    return { label: category.title, slug: category.title }
  })

  const [categories, setCategories] = useState(data.categories);
  const [selectedValue, setSelectedValue] = useState<{label: string, slug: string} | undefined>(undefined);
  
  useEffect(() => {
    if (selectedValue && selectedValue.label) {
      let filteredCategories = data.categories.filter((x: any) => x.title === selectedValue.label);
      if (filteredCategories.length > 0) {
        setCategories(filteredCategories);
      }
    } else {
      setCategories(data.categories);
    }
  }, [selectedValue])

  const navigateToDownload = (download: Download) => {
    switch (download.type) {
      case DownloadType.Link:
        window.open(download.title, '_blank');
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

  return (
    <OuterContainer className=''>
      <Container className=''>
        <InnerContainer className=''>
          <ComponentContainer className='flex flex-col'>
            <LeftEventTitle>
              {data.title}
            </LeftEventTitle>
            <Ruler />
            <SortAndSearch title='Choose a category:' dropDownPlaceholder={"Select Category"} dropdownValues={dropdownValues} selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
            {categories && categories.map((category: DownloadCategory, i) => (
              <Container key={i}>
                <InnerContainer className='flex flex-col gap-4'>
                  <Title>
                    {category.title}
                  </Title>
                  <DownloadContainer>
                    {category.downloads && category.downloads.map((download: Download, i) => (
                      <DownloadCard key={i} style={applyDownloadCardStyle()} onClick={() => navigateToDownload(download)}>
                        <DownloadIcon className='row-span-1 grid content-end relative'>
                          {download?.upload &&
                            <>
                              <RadialContainer />
                              <StyledNextImage
                                src={download.upload.path ?? ""}
                                className=''
                                alt={download.upload.alt ?? ""}
                                fill
                                style={{objectFit:'cover'}}
                              />
                            </>
                          }
                          <DownloadDetails>
                            <DownloadTitle>
                              {download.shortDesc}
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
          </ComponentContainer>
        </InnerContainer>
      </Container>
    </OuterContainer>
  )
}

export default ContentTabDownloads