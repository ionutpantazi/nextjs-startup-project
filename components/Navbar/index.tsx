import { useEffect } from 'react'
import { IMAGE_DOMAIN } from 'lib/constants'
import { HeaderNavigationProps, PillarsProps } from 'lib/queries/nav-data'
import NextImage from 'next/image'
import FAIcon from 'components/Bootstrap/FAIcon'
import styled, { css } from 'styled-components'
import LoginModal from './LoginModal'
import useSession from "lib/use-session";
import { defaultSession } from "lib/session";
import { Registration_Questions } from 'lib/queries/settings'

export interface NavbarProps {
  isOpen?: boolean
  navigationData: HeaderNavigationProps
  questions?: [Registration_Questions]
}

const NavigationContainer = styled.nav`
  z-index: 99;
  background-color: ${props => props.theme.components?.Navbar?.NavigationContainerBackground};
  @media screen and (min-width: ${props => props.theme.screens.md}) {
    height: 80px;
  }
  @media screen and (max-width: ${props => props.theme.screens.md}) {
    position: fixed;
    top: 0px;
    background-color: ${props => props.theme.colors.white};
  }
`

const LogoContainer = styled.div`
  position: absolute;
  top: 1px;

  @media screen and (max-width: ${props => props.theme.screens.md}) {
    display: none;
  }
`

const RightButtonsContainer = styled.div <{ show?: any }>`
 
  @media screen and (max-width: ${props => props.theme.screens.md}) {
    ${({ show }) => css`
      ${props => show == 'hidemobile' ? 'display: none' : ''};
    `}
  }

  @media screen and (min-width: ${props => props.theme.screens.md}) {
    ${({ show }) => css`
      ${props => show == 'hidedesktop' ? 'display: none' : ''};
    `}
  }
`

const RegisterBtn = styled.div`
  border-radius: ${props => props.theme.components?.Navbar?.BtnRadius};
  background-color: ${props => props.theme.colors.grey1};
  padding: 10px 20px;
  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: ${props => props.theme.colors.black};
  }
  svg {
    color: ${props => props.theme.colors.brand};
  }

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.lightgrey};
    svg {
      color: ${props => props.theme.colors.brandlight};
    }
  }
`

const MenuBtn = styled.div`
  border-radius: ${props => props.theme.components?.Navbar?.BtnRadius};
  background-color: ${props => props.theme.colors.brand};
  padding: 10px 20px;
  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: ${props => props.theme.colors.black};
  }
  svg {
    color: ${props => props.theme.colors.darkestgrey};
  }

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.brandlight};
    svg {
      color: ${props => props.theme.colors.darkgrey};
    }
  }
`

const MenuBtnMobile = styled(MenuBtn)`
  @media screen and (max-width: ${props => props.theme.screens.md}) {
    display: none;
  }
`

const MenuBtnDesktop = styled(MenuBtn)`
  @media screen and (min-width: ${props => props.theme.screens.md}) {
    display: none;
  }
`

const Pillar = styled.div`
  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: ${props => props.theme.colors.black};
  }
  svg {
    color: ${props => props.theme.colors.brand};
  }
  &:hover {
    cursor: pointer;
    span {
      color: ${props => props.theme.colors.darkgrey};
    }
    svg {
      color: ${props => props.theme.colors.brandlight};
    }
  }
  @media screen and (min-width: ${props => props.theme.screens.md}) {
    justify-content: left;
  }
`

const CollapsibleMenu = styled.div`
  @media screen and (min-width: ${props => props.theme.screens.md}) {
    // display: none;
  }
`

const Navbar: React.FC<NavbarProps> = ({
  isOpen,
  navigationData,
  questions,
}) => {

  const { session, isLoading, logout } = useSession();

  useEffect(() => {
    const init = async () => {
      const {
        Collapse,
        Dropdown,
        initTWE,
        Modal,
      } = await import("tw-elements");
      initTWE({ Collapse, Dropdown, Modal });
    };
    init();
  }, []);

  const RightButtons = (props: any) => {
    return (
      <RightButtonsContainer show={props.show} className={`flex items-center gap-x-1`}>
        {session.isLoggedIn
          ? <RegisterBtn className='flex items-center justify-center gap-x-1'
            onClick={(event) => {
              event.preventDefault();
              logout(null, {
                optimisticData: defaultSession,
              });
            }}
          >
            <FAIcon
              icon={'fa-user'}
              width={20}
              height={20}
            />
            <span>Logout</span>
          </RegisterBtn>
          : <RegisterBtn className='flex items-center justify-center gap-x-1'
            data-twe-toggle="modal"
            data-twe-target="#loginModal"
          >
            <FAIcon
              icon={'fa-user'}
              width={20}
              height={20}
            />
            <span>Login</span>
          </RegisterBtn>
        }

        {/* Hamburger button for mobile view */}
        <MenuBtnDesktop
          className='flex items-center justify-center gap-x-1'
          data-twe-collapse-init
          data-twe-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FAIcon
            icon={'fa-bars'}
            width={20}
            height={20}
          />
          <span>Menu</span>
        </MenuBtnDesktop>
        <MenuBtnMobile className='flex items-center justify-center gap-x-1'>
          <FAIcon
            icon={'fa-bars'}
            width={20}
            height={20}
          />
          <span>More</span>
        </MenuBtnMobile>
      </RightButtonsContainer>
    )
  }

  return (
    <>
      <NavigationContainer className='flex-no-wrap relative flex w-full items-center justify-between py-2 shadow-dark-mild lg:flex-wrap lg:justify-start lg:py-4'>
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          {/* Logo  */}
          {navigationData?.Logo?.Image?.data &&
            <LogoContainer as='a' href='#' className='flex items-center'>
              <>
                {navigationData?.Logo?.Image?.data?.attributes &&
                  <NextImage
                    src={IMAGE_DOMAIN + navigationData.Logo.Image.data.attributes.url}
                    className=''
                    alt={navigationData.Logo.Image.data.attributes.alternativeText ?? ""}
                    width={Number(navigationData.Logo.Width)}
                    height={Number(navigationData.Logo.Height)}
                  />
                }
              </>
            </LogoContainer>
          }
          <div>

          </div>
          <RightButtons show={'hidedesktop'} />
          <CollapsibleMenu className='!visible mt-2 hidden flex-grow basis-[100%] items-center justify-center md:mt-0 md:!flex md:basis-auto' id="navbarSupportedContent1" data-twe-collapse-item>
            {navigationData?.Pillars?.length &&
              <ul className="list-style-none flex flex-col ps-0 md:mt-1 mt-4 md:flex-row" data-twe-navbar-nav-ref>
                {navigationData?.Pillars.map((navItem: PillarsProps) => (
                  <li className="mb-4 md:mb-0 md:pe-10" key={navItem.id} data-twe-nav-item-ref>
                    <Pillar className='flex gap-2' data-twe-nav-link-ref>
                      <FAIcon
                        icon={navItem.FAIcon.Icon}
                        width={Number(navItem.FAIcon.Width)}
                        height={Number(navItem.FAIcon.Height)}
                      />
                      <span>
                        {navItem.Title}
                      </span>
                    </Pillar>
                  </li>
                ))
                }
              </ul>
            }
          </CollapsibleMenu>
          <RightButtons show={'hidemobile'} />
        </div>
      </NavigationContainer>
      <LoginModal data={undefined} questions={questions} />
    </>
  )
}

export default Navbar