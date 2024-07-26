import React, { useState, useEffect, Children } from 'react'
import dynamic from 'next/dynamic'
import styled, { css } from 'styled-components'
import ComponentStreamPanel from '@/components/StrapiComponents/ComponentStreamPanel'
import Header from '@/components/StrapiComponents/PwaComponents/Header'

export const components = {
  ComponentStreamPanel: dynamic(() => import('@/components/StrapiComponents/ComponentStreamPanel/index')),
};

const PwaContentContainer = styled.div`
`

const Stream = ({
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
        <Header title={'Live Stream'} headerImage={data.event.homeBanner} hideBody={true} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} themeMeta={themeMeta} />
        {data &&
          <ComponentStreamPanel data={data.stream} />
        }
      </PwaContentContainer>
    </>
  )
}

export default Stream