import React, { useState, useEffect, Children } from 'react'
import dynamic from 'next/dynamic'
import styled, { css } from 'styled-components'
import ComponentExhibitorsPanel from '@/components/StrapiComponents/PwaComponents/Exhibitors'
import Header from '@/components/StrapiComponents/PwaComponents/Header'
import useSession from "lib/use-session";
import LoginPrompt from '@/components/StrapiComponents/PwaComponents/LoginPrompt'

const PwaContentContainer = styled.div`
`

const Exhibitors = ({
  data,
  senddatatolayout,
  isdefaulttheme,
  themedata,
  themeMeta,
  loginRequired
}: any) => {
  const { session } = useSession();
  console.log(data)
  return (
    <>
        <PwaContentContainer>
          <Header headerImage={data.exhibitors && data.exhibitors.pageBanner ? data.exhibitors.pageBanner : data.event.homeBanner} hideBody={true} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} themeMeta={themeMeta} />

          {!loginRequired && (data.exhibitors || data.exhibitors.length > 0) &&
            <ComponentExhibitorsPanel data={data.exhibitors} />
          }
          {loginRequired &&
              <LoginPrompt title={'Get involved in the discussion'} message={'To view the forum'} />
          }
        </PwaContentContainer>
    </>
  )
}

export default Exhibitors