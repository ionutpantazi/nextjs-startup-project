import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import NextImage from 'next/image'
import { useRouter } from 'next/router'
import useSession from "lib/use-session";

import { useWindowSize } from '@/lib/hooks/useWindowSize';
import { ComponentContainer, Container, InnerContainer, OuterContainer, RadialContainer } from '@/components/Bootstrap/Common'
import { Download, DownloadCategory, DownloadType } from '@/components/Pages/ContentPages'
import Ruler from '@/components/StrapiComponents/PwaComponents/Common/Ruler'
import {
  LeftEventTitle,
} from '@/components/StrapiComponents/PwaComponents/Header/styles'

export interface ContentTabStreamProps {
  data: Stream[]
}

export type Stream = {
  id: string,
  title: string,
  header: string,
  footer: string,
  type: DownloadType,
  streamUrl?: string,
  placeholder?: string,
  streamLiveInteractiveCode: string,
  linkedAgendaItem: string,
  categories?: DownloadCategory[]
}

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  margin-bottom: 10px;
`

const StreamContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;
`

const StreamInnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StreamToggleContainer = styled.div`
  display: flex;
  height: 56px;
  gap: 12px;
`
const StreamToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 140px;
  height: 56px;
  border-radius: 6px;
  border: 1px solid ${props => props.theme.colors.brandlight};
  
  &:hover {
    cursor: pointer;
  }
`

const Stream = styled.div`
  display: flex;
  margin: 0 auto;
  height: 600px;
  overflow: hidden;
`

const StreamChat = styled.div`
  height: 600px;
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
  margin: 0 auto;
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

const ContentTabStream = ({
  data
}: ContentTabStreamProps) => {

  const router = useRouter()

  const { session, isLoading } = useSession();

  const { width } = useWindowSize();

  const [selectedStream, setSelectedStream] = useState<Stream>(data[0]);

  const isCurrentStream = (id: string) => {
    if (id === selectedStream.id) {
      return {
        'background-color': theme.colors.brandlight,
        color: theme.colors.black
      }
    }
  }

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
    if (width && width < Number(theme.screens['lg'].replace('px', ''))) {
      return {
        flex: '0 0 100%',
      };
    } else {
      return {
        flex: '0 0 calc(50% - 8px)',
      };
    }
  }

  const applyStreamContainerStyle = () => {
    if (width && width < Number(theme.screens['xl'].replace('px', ''))) {
      return {
        flex: '0 0 100%',
      };
    } else {
      return {
        flex: '0 0 75%',
      };
    }
  }

  const applyPlaceholderStyle = () => {
    return {
      flex: `0 0 100%;`
    };
  }

  const applyStreamChatStyle = () => {
    if (width && width < Number(theme.screens['xl'].replace('px', ''))) {
      return {
        flex: '0 0 100%',
      };
    } else {
      return {
        flex: '0 0 25%',
      };
    }
  }

  return (
    <OuterContainer className=''>
      <Container className=''>
        <InnerContainer className=''>
          <ComponentContainer className='flex flex-col'>
            <LeftEventTitle>
              {data[0].title}
            </LeftEventTitle>
            <Ruler />
            <Container className=''>
              <InnerContainer className=''>
                <StreamContainer className='w-full grid gap-4'>
                  <StreamToggleContainer>
                    {data.map(x => {
                      return (
                        <StreamToggle key={x.id} style={isCurrentStream(x.id)} onClick={() => setSelectedStream(x)}>
                          {x.title}
                        </StreamToggle>
                      )
                    })}
                  </StreamToggleContainer>
                  {(selectedStream.header || selectedStream.streamLiveInteractiveCode) &&
                    <StreamInnerContainer>
                      {selectedStream.header &&
                        <Stream style={applyStreamContainerStyle()}>
                          {selectedStream.header && <div style={applyPlaceholderStyle()} dangerouslySetInnerHTML={{ __html: selectedStream.header }} />}
                        </Stream>
                      }
                      {selectedStream.streamLiveInteractiveCode &&
                        <StreamChat style={applyStreamChatStyle()}>
                          <iframe id="li4holder" width="100%" height="600px" src={`https://app.sli.do/event/${selectedStream.streamLiveInteractiveCode}${session.isLoggedIn ? `/?user_name=${session.username}` : ""}${session.isLoggedIn ? `&user_email=${session.username}` : ""}`}></iframe>
                        </StreamChat>
                      }
                    </StreamInnerContainer>
                  }
                </StreamContainer>
              </InnerContainer>
            </Container>
            {selectedStream.categories && selectedStream.categories.map((category: DownloadCategory, i: number) => (
              <Container key={i}>
                <InnerContainer className='flex flex-col gap-4'>
                  <Title>
                    {category.title}
                  </Title>
                  <DownloadContainer>
                    {category.downloads && category.downloads.map((download: Download) => (
                      <DownloadCard key={download.id} style={applyDownloadCardStyle()} onClick={() => navigateToDownload(download)}>
                        <DownloadIcon className='row-span-1 grid content-end relative'>
                          {download?.upload &&
                            <>
                              <RadialContainer />
                              <StyledNextImage
                                src={download.upload.path ?? ""}
                                className=''
                                alt={download.upload.alt ?? ""}
                                fill
                                style={{ objectFit: 'cover' }}
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

export default ContentTabStream