import React, { useState, useEffect, Children } from 'react'
import dnmc from 'next/dynamic'
import styled, { css } from 'styled-components'

const Header = dnmc(() => import('@/components/StrapiComponents/PwaComponents/Header'));
const Speakers = dnmc(() => import('@/components/StrapiComponents/PwaComponents/Speakers'));
const Delegates = dnmc(() => import('@/components/StrapiComponents/PwaComponents/Delegates'));

const PwaContentContainer = styled.div`
`

const Faqs = ({
  data,
  senddatatolayout,
  isdefaulttheme,
  themedata,
  themeMeta,
  navigationData,
}: any) => {

  return (
    <>
      <PwaContentContainer>
        <Header title={data.speakers?.data?.length ? 'Speakers' : 'Delegates'} headerImage={data.event.homeBanner} hideBody={true} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} themeMeta={themeMeta} />
        {data.speakers?.data?.length &&
          <Speakers data={data.speakers} title={'Speakers'} subtitle={'Meet our thought leaders'} type={'speaker'} />
        }
        {data.delegates?.data?.length &&
          <Delegates data={data.delegates} title={'Delegates'} subtitle={'Get to know other like-minded people'} type={'delegate'} />
        }
      </PwaContentContainer>
    </>
  )
}

export default Faqs