import React, { useState, useEffect, Children } from 'react'
import dynamic from 'next/dynamic'
import styled, { css } from 'styled-components'
import ComponentIntrosLandingNew from 'components/StrapiComponents/ComponentIntrosLandingNew/pwa'
import ComponentExhibitorsPanel from '@/components/StrapiComponents/ComponentExhibitorsPanel'

export const components = {
  ComponentIntrosLandingNew: dynamic(() => import('components/StrapiComponents/ComponentIntrosLandingNew/pwa')),
  ComponentExhibitorsPanel: dynamic(() => import('@/components/StrapiComponents/ComponentExhibitorsPanel/index')),
};

const PwaContentContainer = styled.div`
`

const Exhibitors = ({
  data,
  senddatatolayout,
  isdefaulttheme,
  themedata,
  navigationData,
}: any) => {
  console.log(data)
  return (
    <>
      <PwaContentContainer>
        <ComponentIntrosLandingNew data={data['event']} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} hideContentContainer={true} />
        {data &&
          <ComponentExhibitorsPanel data={data.exhibitors} />
        }
      </PwaContentContainer>
    </>
  )
}

export default Exhibitors