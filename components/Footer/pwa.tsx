import { useEffect } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import { FooterNavigationProps, PillarsProps } from 'lib/queries/nav-data'
import Link from 'next/link'
import Text from 'components/Bootstrap/Text'
import NextImage from 'next/image'
import { redirectToEventRoot, generateMenuHref } from 'utils/helpers'

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.components?.Footer?.FooterContainerBackground};
  margin: ${theme.margins.homepage_large};
  padding: 50px 40px;
  border-radius: 20px 20px 0px 0px;
  margin: 0 auto;
  max-width: ${theme.pageWidth};

  color: ${theme.colors.white};
  font-family: "greycliff-cf", sans-serif;

  @media screen and (max-width: ${theme.screens.sm}) {
    padding: 20px 20px;
    border-radius: 0px;
  }
`
const LeftColumn = styled.div`
`

const RightColumn = styled.div`
`

const FooterText = styled(Text)`
  font-size: 12px;
  line-height: 16px;
`

const NavigationContainer = styled.div`
`

const NavigationParentContainer = styled.div`
`

const NavigationParentTitle = styled.div`
  font-size: 14px;
  line-height: 20px;
`

const NavigationChildrenContainer = styled.div`
`

const NavigationChildrenTitle = styled.div`
  font-size: 12px;
  line-height: 16px;
`
const LogoContainer = styled.div`
  // margin-top: -50px;

  // @media screen and (max-width: ${theme.screens.sm}) {
  //   margin-top: -20px;
  // }
`

export interface FooterProps {
  navigationData: any
  logo: any
}

const Footer: React.FC<FooterProps> = ({
  navigationData,
  logo,
}) => {

  return (
    <FooterContainer className='flex flex-col sm:flex-row gap-y-8'>
      <LeftColumn className='sm:w-1/2 w-auto grid gap-y-4 content-between'>
        {logo?.path &&
          <LogoContainer as='a' href={redirectToEventRoot()} className='flex items-center'>
            <>
              {logo.path &&
                <NextImage
                  src={logo.path}
                  className=''
                  alt={logo.alt ?? ""}
                  width={80}
                  height={80}
                />
              }
            </>
          </LogoContainer>
        }
        <FooterText>
          {navigationData.Disclaimer}
        </FooterText>
      </LeftColumn>
      <RightColumn className='sm:w-1/2 w-auto flex flex-row justify-between'>
        {navigationData.length &&
          <>
            {navigationData.map((navItem: any, index: any) => (
              <NavigationContainer className="w-1/3 flex" key={index}>
                {navItem.title &&
                  <NavigationParentContainer className="flex flex-col sm:gap-y-4 gap-y-2">
                    <NavigationParentTitle className="font-semibold sm:mb-4 mb-2">
                      {navItem.title}
                    </NavigationParentTitle>
                    {navItem.items?.length
                      ?
                      <>
                        {navItem.items.map((navItemChild: any, index: any) => (
                          <div key={index}>
                            {navItemChild &&
                              <NavigationChildrenTitle className="font-medium" >
                                <a
                                  className="transition duration-200 hover:text-gray-500 hover:ease-in-out focus:text-gray-500 active:text-gray-500 motion-reduce:transition-none"
                                  href={generateMenuHref(navItemChild.url)}
                                >
                                  {navItemChild.title}
                                </a>
                              </NavigationChildrenTitle>
                            }
                          </div>
                        ))
                        }
                      </>
                      : <></>
                    }
                  </NavigationParentContainer>
                }
              </NavigationContainer>
            ))
            }
          </>
        }
      </RightColumn>
    </FooterContainer >
  )
}

export default Footer