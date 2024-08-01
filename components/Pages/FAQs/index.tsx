import React, { useState, useEffect, Children } from 'react'
import dnmc from 'next/dynamic'
import styled, { css } from 'styled-components'

const Header = dnmc(() => import('@/components/StrapiComponents/PwaComponents/Header'));
const ComponentSectionsFaQs = dnmc(() => import('components/StrapiComponents/ComponentSectionsFaQs/pwa'));

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

  console.log("data", data)

  return (
    <PwaContentContainer>
      <Header headerImage={data.faqs.pageBanner ? data.faqs.pageBanner : data.event.homeBanner} hideBody={true} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} themeMeta={themeMeta} />
      {data.faqs?.faQs?.length &&
        <ComponentSectionsFaQs faqs={data.faqs.faQs} title={'FAQs'} open={true} />
      }
    </PwaContentContainer>
  )
}

export default Faqs