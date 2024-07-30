import React, { useState, useEffect, Children } from 'react'
import dynamic from 'next/dynamic'
import styled, { css } from 'styled-components'
import ComponentExhibitorsPanel from '@/components/StrapiComponents/ComponentExhibitorsPanel'
import Header from '@/components/StrapiComponents/PwaComponents/Header'

export const components = {
  ComponentExhibitorsPanel: dynamic(() => import('@/components/StrapiComponents/ComponentExhibitorsPanel/index')),
};

const PwaContentContainer = styled.div`
`

const Exhibitors = ({
  data,
  senddatatolayout,
  isdefaulttheme,
  themedata,
  themeMeta,
  navigationData,
}: any) => {
  console.log(data)
  return (
    <>
      <PwaContentContainer>
      <Header headerImage={data.event.homeBanner} hideBody={true} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} themeMeta={themeMeta} />
        {data &&
          <ComponentExhibitorsPanel data={data.exhibitors} />
        }
      </PwaContentContainer>
    </>
  )
}

export default Exhibitors