import React, { useState, useEffect, Children } from 'react'
import dynamic from 'next/dynamic'
import styled, { css } from 'styled-components'
import ComponentIntrosLandingNew from 'components/StrapiComponents/ComponentIntrosLandingNew/pwa'
import ComponentStreamPanel from '@/components/StrapiComponents/ComponentStreamPanel'

export const components = {
  ComponentIntrosLandingNew: dynamic(() => import('components/StrapiComponents/ComponentIntrosLandingNew/pwa')),
  ComponentStreamPanel: dynamic(() => import('@/components/StrapiComponents/ComponentStreamPanel/index')),
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
          <ComponentStreamPanel data={data.exhibitors} />
        }
      </PwaContentContainer>
    </>
  )
}

export default Exhibitors