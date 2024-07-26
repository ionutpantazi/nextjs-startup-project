import React, { useState, useEffect, Children } from 'react'
import dynamic from 'next/dynamic'
import styled, { css } from 'styled-components'
import ComponentExhibitorPanel from '@/components/StrapiComponents/ComponentExhibitorPanel'
import Header from '@/components/StrapiComponents/PwaComponents/Header'

export const components = {
  ComponentExhibitorPanel: dynamic(() => import('@/components/StrapiComponents/ComponentExhibitorPanel/index')),
};

const PwaContentContainer = styled.div`
`

const Exhibitor = ({
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
      <Header title={data.exhibitor.title} headerImage={data.event.homeBanner} hideBody={true} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} themeMeta={themeMeta} />
        {data &&
          <ComponentExhibitorPanel data={data.exhibitor} />
        }
      </PwaContentContainer>
    </>
  )
}

export default Exhibitor