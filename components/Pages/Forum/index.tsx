import React, { useState, useEffect, Children } from 'react'
import styled, { css } from 'styled-components'
import ForumComponent from '@/components/StrapiComponents/PwaComponents/Forum';
import Header from '@/components/StrapiComponents/PwaComponents/Header'
import useSession from "lib/use-session";
import LoginPrompt from '@/components/StrapiComponents/PwaComponents/LoginPrompt';

const PwaContentContainer = styled.div`
`

const Forum = ({
  data,
  senddatatolayout,
  isdefaulttheme,
  themedata,
  themeMeta,
  navigationData,
}: any) => {
  const { session } = useSession();
  console.log(data)
  console.log("logged in", session.isLoggedIn)
  return (
    <>
      <PwaContentContainer>
        <Header headerImage={data.banner ? data.banner.upload : data.event.homeBanner} hideBody={true} senddatatolayout={senddatatolayout} isdefaulttheme={isdefaulttheme?.toString()} themedata={themedata} themeMeta={themeMeta} />
        {data?.discussions && data?.discussions?.data?.length > 0 && session?.isLoggedIn &&
          <ForumComponent data={data.discussions} userId={data.resource.user.userID}  />
        }
        {!session.isLoggedIn &&
          <LoginPrompt title={'Get involved in the discussion'} message={'To view the forum'} />
        }
      </PwaContentContainer>
    </>
  )
}

export default Forum