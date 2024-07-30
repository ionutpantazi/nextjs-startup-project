import React, { useState, useEffect, Children } from 'react'
import styled, { css } from 'styled-components'
import ComponentStreamPanel from '@/components/StrapiComponents/PwaComponents/Stream'
import Header from '@/components/StrapiComponents/PwaComponents/Header'

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
        <Header headerImage={data.event.homeBanner} hideBody={true} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} themeMeta={themeMeta} />
        {data &&
          <ComponentStreamPanel data={data.stream} />
        }
      </PwaContentContainer>
    </>
  )
}

export default Stream