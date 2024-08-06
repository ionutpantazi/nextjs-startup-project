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
import Toggle from 'components/StrapiComponents/PwaComponents/Common/Toggle';

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
  const [agendaItemsList, setAgendaItemsList] = useState(sortData);
  const [personalizedToggle, setPersonalizedToggle] = useState(false);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    setAgendaItemsList(sortData)
    // setPersonalizedToggle(false)
  }, [data])

  useEffect(() => {
    if (width && width < Number(theme.screens['md'].replace('px', ''))) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [])

  useEffect(() => {
    setRefresh(refresh + 1)
    let list = sortData.filter((agenda: any) => {
      return agenda.isAttending
    })
    if (personalizedToggle) {
      setPersonalizedToggle(true)
      setAgendaItemsList(list)
    } else {
      setPersonalizedToggle(false)
      setAgendaItemsList(sortData)
    }
  }, [selectedAgendaData])

  const generateAgendaPageLink = () => {
    const path = router.asPath;
    return `${path}/agenda/`
  }

  async function addOrRemoveAgendaItem(e: any, agendaItemId: any, method: any, index: number) {
    e.preventDefault()
    let linkElement = e.target?.closest('a')
    let agendaMethod = linkElement?.getAttribute('data-mode')
    let response = await post('/api/agenda/agendaitems', { eventId: 'hivedemo', agendaItemId: agendaItemId, method: agendaMethod }, {})
    if (response.data?.id) {
      setRefresh(refresh + 1)
      if (agendaMethod == 'add') {
        updateAgendaItemsList(index, true)
      } else {
        updateAgendaItemsList(index, false)
      }
    }
  }

  function updateAgendaItemsList(index: any, state: boolean) {
    agendaItemsList[index]['isAttending'] = state
    setAgendaItemsList(agendaItemsList)

  }

  function togglePersonalizedAgenda(e: any) {
    e?.preventDefault()
    let list = agendaItemsList.filter((agenda: any) => {
      return agenda.isAttending
    })
    if (personalizedToggle) {
      setPersonalizedToggle(false)
      setAgendaItemsList(sortData)
    } else {
      setPersonalizedToggle(true)
      setAgendaItemsList(list)
    }
  }

  const handleChildData = (state: any) => {
    let list = agendaItemsList.filter((agenda: any) => {
      return agenda.isAttending
    })
    if (!state) {
      setPersonalizedToggle(false)
      setAgendaItemsList(sortData)
    } else {
      setPersonalizedToggle(true)
      setAgendaItemsList(list)
    }
  };

  return (
    <AgendaContainer key={refresh} className=''>
      <AgendaTitle className='mb-4'>
        {title}
      </AgendaTitle>
      <button
        onClick={(e: any) => togglePersonalizedAgenda(e)}
      >
        {userLoggedInFromApi && !isHomepage &&
          <div className='py-8'>
            <Toggle onText={'full agenda'} offText={'personalized'} switchstate={handleChildData} isactive={personalizedToggle} />
          </div>
        }
      </button>
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
        {agendaItemsList.map((agenda: any, index: number) => (
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
            </DetailsBox>
            {!isHomepage && userLoggedInFromApi &&
              <Button2 as='a' href={'#'} data-mode={agenda.isAttending ? 'remove' : 'add'} className='flex md:hidden flex-row md:gap-4 gap-2 items-center w-[180px] justify-center' onClick={(e) => addOrRemoveAgendaItem(e, agenda.agendaItemId, agenda.isAttending, index)}>
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
                <Button2 as='a' href={'#'} data-mode={agenda.isAttending ? 'remove' : 'add'} className='md:flex hidden flex-row gap-4 items-center w-[180px] justify-center' onClick={(e) => addOrRemoveAgendaItem(e, agenda.agendaItemId, agenda.isAttending, index)}>
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