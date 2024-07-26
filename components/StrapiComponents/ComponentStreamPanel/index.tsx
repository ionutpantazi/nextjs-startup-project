import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import NextImage from 'next/image'
import { useRouter } from 'next/router'
import useSession from "lib/use-session";

import { useWindowSize } from '@/lib/hooks/useWindowSize';
import { RadialContainer } from '@/components/Bootstrap/Common'
import { Download, DownloadCategory, DownloadType } from '@/components/Pages/Downloads'

export interface ComponentStreamPanelProps {
  data: ComponentStream
}

export type ComponentStream = {
  id: string,
  title: string,
  streams: Stream[]
}

export type Stream = {
  id: string,
  title: string,
  url?: string,
  placeholder?: string,
  slido?: Slido,
  categories?: DownloadCategory[]
}

export type Slido = {
  code: string,
  username: string,
  userEmail: string
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

const ComponentStreamPanel = ({
  data
}: ComponentStreamPanelProps) => {
  
  const router = useRouter()
  
  const { session, isLoading } = useSession();

  const { width } = useWindowSize();

  const [ selectedStream, setSelectedStream ] = useState<Stream>(data.streams[0]);
  
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

  const applyStreamContainerStyle = () => {
    if(width && width < Number(theme.screens['xl'].replace('px', '')))
    {
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
    if(width && width < Number(theme.screens['xl'].replace('px', '')))
    {
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
    <>
      <Container>
        <InnerContainer className='flex flex-col gap-4'>
          <Title>
            {data.title}
          </Title>
          <StreamContainer className='w-full grid gap-4'>
            <StreamToggleContainer>
              {data.streams.map(x => {
                return (
                  <StreamToggle key={x.id} style={isCurrentStream(x.id)} onClick={() => setSelectedStream(x)}>
                      {x.title}
                  </StreamToggle>
                )
              })}
            </StreamToggleContainer>
            {(selectedStream.placeholder || selectedStream.slido) &&
              <StreamInnerContainer>
                {selectedStream.placeholder &&
                <Stream style={applyStreamContainerStyle()}>
                  { selectedStream.placeholder && <div style={applyPlaceholderStyle()} dangerouslySetInnerHTML={{ __html: selectedStream.placeholder }} /> }
                </Stream>
                }
                {selectedStream.slido &&
                  <StreamChat style={applyStreamChatStyle()}>
                    {/* <iframe id="li4holder" width="100%" height="600px" src={`https://app.sli.do/event/${selectedStream.slido?.code}${session.isLoggedIn ? `/?user_name=${session.username}` : ""}${session.isLoggedIn ? `&user_email=${session.username}` : ""}`}></iframe> */}
                    <iframe id="li4holder" width="100%" height="600px" src={`https://app.sli.do/event/${selectedStream.slido?.code}/?user_name=RW%20Dev%20LG&user_email=developer@livegroup.co.uk`}></iframe>
                  </StreamChat>
                }
              </StreamInnerContainer>
            }
          </StreamContainer>
        </InnerContainer>
      </Container>
      {selectedStream.categories && selectedStream.categories.map((category: DownloadCategory) => (
        <>
        <Container>
          <InnerContainer className='flex flex-col gap-4'>
            <Title>
              {category.title}
            </Title>
            <DownloadContainer>
              {category.downloads && category.downloads.map((download: Download) => (
                <DownloadCard key={download.id} style={applyDownloadCardStyle()} onClick={() => navigateToDownload(download)}>
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
        </>
      ))}
    </>
  )
}

export default ComponentStreamPanel