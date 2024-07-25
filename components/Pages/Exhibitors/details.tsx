import React, { useState, useEffect, Children } from 'react'
import dynamic from 'next/dynamic'
import styled, { css } from 'styled-components'
import ComponentIntrosLandingNew from 'components/StrapiComponents/ComponentIntrosLandingNew/pwa'
import ComponentExhibitorPanel from '@/components/StrapiComponents/ComponentExhibitorPanel'

export const components = {
  ComponentIntrosLandingNew: dynamic(() => import('components/StrapiComponents/ComponentIntrosLandingNew/pwa')),
  ComponentExhibitorPanel: dynamic(() => import('@/components/StrapiComponents/ComponentExhibitorPanel/index')),
};

const PwaContentContainer = styled.div`
`

const Exhibitor = ({
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
          <ComponentExhibitorPanel data={data.exhibitor} />
        }
      </PwaContentContainer>
    </>
  )
}

export default Exhibitor