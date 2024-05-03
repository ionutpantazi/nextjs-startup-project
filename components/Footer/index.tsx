import { useEffect } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import { FooterNavigationProps, PillarsProps } from 'lib/queries/nav-data'
import Link from 'next/link'
import Text from 'components/Bootstrap/Text'
import NextImage from 'next/image'

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.components?.Footer?.FooterContainerBackground};
  margin: ${theme.margins.homepage_large};
  padding: 50px 40px;
  border-radius: 20px 20px 0px 0px;
  margin: 0 auto;
  max-width: ${theme.pageWidth};

  color: ${theme.colors.white};
  font-family: ReadexProRegular;

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
`

export interface FooterProps {
  navigationData: FooterNavigationProps
}

const Footer: React.FC<FooterProps> = ({
  navigationData,
}) => {

  return (
    <FooterContainer className='flex flex-col sm:flex-row gap-y-8'>
      <LeftColumn className='sm:w-1/2 w-auto grid gap-y-4 content-between'>
        {navigationData?.Logo?.data &&
          <LogoContainer as='a' href='#' className='flex items-center'>
            <>
              {navigationData?.Logo?.data.attributes?.url &&
                <NextImage
                  src={IMAGE_DOMAIN + navigationData.Logo.data.attributes.url}
                  className=''
                  alt={navigationData.Logo.data.attributes.alternativeText ?? ""}
                  width={64}
                  height={20}
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
        {navigationData.Pillars?.length &&
          <>
            {navigationData.Pillars.map((navItem: PillarsProps) => (
              <NavigationContainer className="w-1/3 flex" key={navItem.id}>
                {navItem.Title &&
                  <NavigationParentContainer className="flex flex-col sm:gap-y-4 gap-y-2">
                    <NavigationParentTitle className="font-semibold sm:mb-4 mb-2">
                      {navItem.Title}
                    </NavigationParentTitle>
                    {navItem.Items?.length &&
                      <>
                        {navItem.Items.map((navItemChild: any) => (
                          <NavigationChildrenTitle className="font-medium" key={navItemChild.id}>
                            <a
                              className="transition duration-200 hover:text-gray-500 hover:ease-in-out focus:text-gray-500 active:text-gray-500 motion-reduce:transition-none"
                              href={'#'}
                            >
                              {navItemChild.Title}
                            </a>
                          </NavigationChildrenTitle>
                        ))
                        }
                      </>
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