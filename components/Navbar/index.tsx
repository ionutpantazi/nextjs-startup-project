import { useEffect } from 'react'
import { IMAGE_DOMAIN } from 'lib/constants'
import { NavigationData, NavigationItem } from 'lib/queries/nav-data'

export interface NavbarProps {
  isOpen?: boolean
  navigationData: NavigationData
}

const Navbar: React.FC<NavbarProps> = ({
  isOpen,
  navigationData,
}) => {
  console.log(navigationData.navigationData)
  useEffect(() => {
    const init = async () => {
      const {
        Collapse,
        Dropdown,
        initTWE,
      } = await import("tw-elements");
      initTWE({ Collapse, Dropdown });
    };
    init();
  }, []);

  const RightButtons = (props: any) => {
    return (
      <div className={`flex items-center gap-x-1 ${props.className}`}>
        <button className="bg-gray-300 bg-neutral-100 hover:bg-neutral-300 text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center gap-x-1">
          <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0.684326H14.6313V15.3157H0V0.684326Z" fill="white" fillOpacity="0.01" />
            <path d="M7.316 6.78068C8.66278 6.78068 9.75456 5.6889 9.75456 4.34212C9.75456 2.99534 8.66278 1.90356 7.316 1.90356C5.96922 1.90356 4.87744 2.99534 4.87744 4.34212C4.87744 5.6889 5.96922 6.78068 7.316 6.78068Z" stroke="#B97ECF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.8026 14.0964C12.8026 11.0661 10.3461 8.60962 7.31586 8.60962C4.28561 8.60962 1.8291 11.0661 1.8291 14.0964" stroke="#B97ECF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Register</span>
        </button>
        {/* Hamburger button for mobile view */}
        <button
          className="bg-brandColor hover:bg-brandColorLight text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center gap-x-1 lg:hidden"
          type="button"
          data-twe-collapse-init
          data-twe-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.631348 0.297363H18.0367V17.7027H0.631348V0.297363Z" fill="white" fillOpacity="0.01" />
            <path d="M3.51416 4.63049H15.1177" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.51416 8.98181H15.1177" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.51416 13.3331H15.1177" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Menu</span>
        </button>
        <button className="bg-brandColor hover:bg-brandColorLight text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center gap-x-1 max-sm:hidden">
          <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.631348 0.297363H18.0367V17.7027H0.631348V0.297363Z" fill="white" fillOpacity="0.01" />
            <path d="M3.51416 4.63049H15.1177" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.51416 8.98181H15.1177" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.51416 13.3331H15.1177" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>More</span>
        </button>
      </div>
    )
  }

  return (
    <>
      {/* Main navigation container */}
      <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          {/* Logo  */}
          {navigationData?.siteLogo &&
            <a
              className="mb-4 me-5 ms-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
              href="/">
              <img
                src={IMAGE_DOMAIN + navigationData.siteLogo.url}
                alt={navigationData.siteLogo.alternativeText ?? ""}
                loading="lazy"
              />
            </a>
          }
          <RightButtons className={"lg:hidden"} />
          {/* Collapsible navigation container */}
          <div
            className="!visible mt-2 hidden flex-grow basis-[100%] items-center justify-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent1"
            data-twe-collapse-item>
            <>
              {navigationData?.navigationData?.length &&
                <ul className="list-style-none flex flex-col ps-0 lg:mt-1 lg:flex-row" data-twe-navbar-nav-ref>
                  {navigationData?.navigationData.map((navItem: NavigationItem) => (
                    <li className="mb-4 lg:mb-0 lg:pe-2" key={navItem.id} data-twe-nav-item-ref>
                      <a
                        className="text-gray-800 font-bold transition duration-200 hover:text-gray-500 hover:ease-in-out focus:text-gray-500 active:text-gray-500 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                        href={navItem.externalPath}
                        data-twe-nav-link-ref
                      >
                        {navItem.title}
                      </a>
                    </li>
                  ))
                  }
                </ul>
              }
            </>
          </div>
          <RightButtons className={"max-sm:hidden"} />
        </div>
      </nav>
    </>
  )
}

export default Navbar