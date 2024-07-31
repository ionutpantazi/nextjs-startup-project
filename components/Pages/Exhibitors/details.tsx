import React, { useState, useEffect, Children } from 'react'
import styled, { css } from 'styled-components'
import ComponentExhibitorPanel from '@/components/StrapiComponents/ComponentExhibitorPanel'
import Header from '@/components/StrapiComponents/PwaComponents/Header'

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