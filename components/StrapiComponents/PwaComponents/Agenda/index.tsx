import React, { useState, useEffect, useContext } from 'react'
import FAIcon from 'components/Bootstrap/FAIcon'
var moment = require('moment');
import { useWindowSize } from '@/lib/hooks/useWindowSize';
import { ThemeContext } from 'components/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router'
import useSession from "lib/use-session";
import {
  removeTime,
  removeMinutes,
  sortAgendaItemsByStartDate,
} from './utils'
import { post } from 'lib/httpClient'

import {
  AgendaContainer,
  AgendaTitle,
  AgendaInnerContainer,
  AgendaItem,
  DateBox,
  AgendaDateFrom,
  AgendaDateTo,
  DateAndRoomBox,
  AgendaDateRoom,
  DetailsBox,
  AgendaItemTitle,
  AgendaItemSubTitle,
  AgendaTag,
  ParticipantsBox,
  Participants,
  ParticipantsText,
  ImageIcon,
  StyledNextImage,
  ButtonsBox,
  Button1,
  Button2,
  StyledDateContainer,
  DatesContainer,
  AgendaDay,
  AgendaDayNumber,
} from './styles'

const Agenda = ({
  data,
  agendaItems,
  selectedAgendaData,
  handleAgendaDateChange,
  title,
  isHomepage,
  userLoggedInFromApi,
}: any) => {

  const theme = useContext(ThemeContext);
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);
  const sortData = sortAgendaItemsByStartDate(data);
  const router = useRouter();

  useEffect(() => {
    if (width && width < Number(theme.screens['md'].replace('px', ''))) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [])

  const generateAgendaPageLink = () => {
    const path = router.asPath;
    return `${path}/agenda/`
  }

  async function addOrRemoveAgendaItem(e: any, agendaItemId: any, method: any) {
    e.preventDefault()
    let linkElement = e.target?.closest('a')
    let agendaMethod = linkElement?.getAttribute('data-mode')
    let response = await post('/api/agenda/agendaitems', { eventId: 'hivedemo', agendaItemId: agendaItemId, method: agendaMethod }, {})
    if (response.data?.id) {
      if(agendaMethod == 'add'){
        linkElement.setAttribute('data-mode', 'remove')
        linkElement.innerText = 'Remove from agenda'
      } else {
        linkElement.setAttribute('data-mode', 'add')
        linkElement.innerText = 'Add to agenda'
      }
    }
  }

  return (
    <AgendaContainer className=''>
      <AgendaTitle className='mb-4'>
        {title}
      </AgendaTitle>
      <div className='md:hidden block'>
        <Swiper
          spaceBetween={10}
          slidesPerView={'auto'}
          className='w-full my-4'
        >
          <DatesContainer className=''>
            {agendaItems.map((agendaDate: any, index: number) => (
              <SwiperSlide key={index} style={{ 'width': 'fit-content' }}>
                <StyledDateContainer key={index} className='flex flex-row gap-2 items-center' style={{ 'width': 'fit-content' }} active={selectedAgendaData == agendaDate ? 'true' : 'false'}
                  onClick={() => { if (handleAgendaDateChange) handleAgendaDateChange(agendaDate) }}
                >
                  <AgendaDay className=''>
                    {moment(agendaDate).format('ddd')}
                  </AgendaDay>
                  <AgendaDayNumber className='agendaDayNumber'>
                    {moment(agendaDate).format('Do')}
                  </AgendaDayNumber>
                  <AgendaDay className=''>
                    {moment(agendaDate).format('MMMM')}
                  </AgendaDay>
                </StyledDateContainer>
              </SwiperSlide>
            ))
            }
          </DatesContainer>
        </Swiper>
      </div>
      <AgendaInnerContainer className='flex flex-col gap-4'>
        {sortData.map((agenda: any, index: number) => (
          <AgendaItem className='md:flex grid grid-cols-2 flex-row flex-wrap content-start justify-around gap-4' key={index}>
            <DateBox className='md:flex hidden flex-col gap-2 justify-center'>
              <AgendaDateFrom className=''>
                {removeMinutes(moment(agenda.start).format('h:mma'))}
              </AgendaDateFrom>
              <AgendaDateTo className=''>
                {`till ${removeMinutes(moment(agenda.end).format('h:mma'))}`}
              </AgendaDateTo>
            </DateBox>
            <DateAndRoomBox className='flex flex-col gap-2 md:justify-center justify-start md:w-fit w-full'>
              <AgendaDateRoom className='flex md:hidden flex-row items-center'>
                <FAIcon
                  icon={'fa-calendar-days'}
                  width={16}
                  height={16}
                />
                <span>
                  {`${removeMinutes(moment(agenda.start).format('h:mma'))} - ${removeMinutes(moment(agenda.end).format('h:mma'))}`}
                </span>
              </AgendaDateRoom>
              <AgendaDateRoom className='flex flex-row items-center'>
                <FAIcon
                  icon={'fa-calendar-days'}
                  width={16}
                  height={16}
                />
                <span>
                  {`${moment(agenda.start).format('ddd')}, ${moment(agenda.start).format('Do')} ${moment(agenda.start).format('MMMM')}`}
                </span>
              </AgendaDateRoom>
              {agenda.room &&
                <AgendaDateRoom className='flex flex-row items-center'>
                  <FAIcon
                    icon={'fa-house'}
                    width={16}
                    height={16}
                  />
                  <span>
                    {agenda.room}
                  </span>
                </AgendaDateRoom>
              }
            </DateAndRoomBox>
            <DetailsBox className='flex flex-col gap-2 justify-center md:w-6/12 w-full'>
              {agenda.title &&
                <AgendaItemTitle className=''>
                  {agenda.title}
                </AgendaItemTitle>
              }
              {agenda.shortDesc &&
                <AgendaItemSubTitle className=''
                  dangerouslySetInnerHTML={{
                    __html: agenda.shortDesc,
                  }}
                />
              }
              {/* <div className='flex flex-row gap-1'>
                {agenda.attributes.Tags.data.map((tag: Tagsprops, index: number) => (
                  <AgendaTag key={index} className=''>
                    {tag.attributes.Name}
                  </AgendaTag>
                ))
                }
              </div> */}
            </DetailsBox>
            {/* <ParticipantsBox className='md:flex hidden flex-col gap-3 justify-center md:w-fit w-full'>
              <Participants className='flex flex-row'>
                {isHomepage &&
                  <>
                    <ImageIcon className='flex justify-center items-center'>
                      <FAIcon
                        icon={'fa-leaf'}
                        width={20}
                        height={20}
                      />
                    </ImageIcon>
                  </>
                }
              </Participants>
            </ParticipantsBox> */}
            {!isHomepage && userLoggedInFromApi &&
              <Button2 as='a' href={generateAgendaPageLink()} data-mode={agenda.isAttending ? 'remove' : 'add'} className='flex md:hidden flex-row md:gap-4 gap-2 items-center w-fit' onClick={(e) => addOrRemoveAgendaItem(e, agenda.agendaItemId, agenda.isAttending)}>
                {agenda.isAttending
                  ?
                  <>
                    Remove from agenda
                  </>
                  :
                  <>
                    Add to agenda
                  </>
                }
              </Button2>
            }
            <ButtonsBox className='flex flex-col gap-4 justify-center md:w-fit w-full'>
              {!isHomepage && userLoggedInFromApi &&
                <Button2 as='a' href={generateAgendaPageLink()} data-mode={agenda.isAttending ? 'remove' : 'add'} className='md:flex hidden flex-row gap-4 items-center w-fit' onClick={(e) => addOrRemoveAgendaItem(e, agenda.agendaItemId, agenda.isAttending)}>
                  {agenda.isAttending
                    ?
                    <>
                      Remove from agenda
                    </>
                    :
                    <>
                      Add to agenda
                    </>
                  }
                </Button2>
              }
              {isHomepage &&
                <Button2 as='a' href={generateAgendaPageLink()} className='w-fit'>
                  <span>
                    View more details
                  </span>
                </Button2>
              }
            </ButtonsBox>
          </AgendaItem>
        ))
        }
      </AgendaInnerContainer>
    </AgendaContainer >
  )
}

export default Agenda