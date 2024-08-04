import React, { useContext, useEffect, useState } from 'react'
import NextImage from 'next/image'
import FAIcon from 'components/Bootstrap/FAIcon'
import SortAndSearch from '../Common/SortAndSearch'
import { useWindowSize } from '@/lib/hooks/useWindowSize'
import { ModalContext } from '../Common/Modal';
import {
  SubTitle,
  BreakoutContainer,
  BreakoutCategoryTitle,
  BreakoutItem,
  BreakoutImage,
  BreakoutIcons,
  BreakoutTag,
  BreakoutDetailsContainer,
  BreakoutDetails,
  BreakoutTitle,
  BreakoutSubtitle,
  BreakoutInfo,
  BreakoutButton,
  BreakoutTagsContainer,
  BreakoutTopContainer,
  BreakoutCategoryContainer,
  BreakoutOuterContainer,
} from './styles'
import { theme } from '@/lib/theme'
import JoinModal from './Modal/JoinModal'
import { post } from '@/lib/httpClient'
import { useRouter } from 'next/router'
import { ToastType } from '../Common/Toast/Toast'

const Breakouts = ({
  data,
  title,
  subtitle,
  type,
}: any) => {
  const [categories, setCategories] = useState(data.breakoutCategories);
  const [selectedValue, setSelectedValue] = useState<{ label: string, slug: string } | undefined>(undefined);

  const router = useRouter();

  const modalContext = useContext(ModalContext)

  const { width } = useWindowSize();

  const dropdownValues = [
    { label: 'Default', slug: 'default' },
    { label: 'Newest first', slug: 'newest' },
    { label: 'Oldest first', slug: 'oldest' },
    { label: 'Most popular', slug: 'popular' },
    { label: 'Category', slug: 'category' },
  ]

  useEffect(() => {
    const init = async () => {
      const {
        initTWE,
        Modal,
      } = await import("tw-elements");
      initTWE({ Modal });
    };
    init();
  }, []);

  useEffect(() => {
    const sortedCategories: any[] = data.breakoutCategories.map((category: any) => {
      const sortedCategory = { ...category };

      switch (selectedValue ? selectedValue.label : 'Default') {
        case 'Newest first':
          sortedCategory.breakouts.sort(
            (a: any, b: any) => new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
          );
          break;
        case 'Oldest first':
          sortedCategory.breakouts.sort(
            (a: any, b: any) => new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime()
          );
          break;
        case 'Most popular':
          sortedCategory.breakouts.sort((a: any, b: any) => b.breakoutRating - a.breakoutRating);
          break;
        case 'Default':
        default:
          sortedCategory.breakouts.sort((a: any, b: any) => a.order - b.order);
          break;
      }

      return sortedCategory;
    });

    setCategories(sortedCategories);
  }, [selectedValue, data.breakoutCategories]);

  const applyBreakoutCardStyle = (columnSize: number) => {
    switch (columnSize) {
      case 12:
        return {
          flex: '0 0 100%',
        };
      case 6:
        if(width && width < Number(theme.screens['lg'].replace('px', '')))
        {
          return {
            flex: '0 0 100%',
          };
        } else {
          return {
            flex: '0 0 calc(50% - 12px)',
            'min-width': '360px',
          };
        }
      case 3:
        if (width &&  width > Number(theme.screens['sm'].replace('px', '')) && width < Number(theme.screens['lg'].replace('px', '')))
        {
          return {
            flex: '0 0 calc(50% - 12px)',
          };
        } else if (width && width < Number(theme.screens['sm'].replace('px', ''))) {
          return {
            flex: '0 0 100%',
          };
        } else {
          return {
            flex: '0 0 calc(25% - 18px)',
          };
        }
    }
  }
  
  useEffect(() => {
    // Ensure addToast is available on window after component mounts
    window.addToast = (message: string, type: ToastType) => {};
  }, []);

  const shareLink = (breakout: any) => {
    const baseUrl = window.location.href.split('#')[0];

    const url = `${baseUrl}#breakout-${breakout.id}`;

    navigator.clipboard.writeText(url);

    window.addToast(url, ToastType.Information, 'Share link copied to clipboard:');
  }

  const toggleRating = (breakout: any) => {
    let method = breakout.breakoutRated ? 'remove' : 'add';
    let slugs = router.query;
    
    post(`/api/breakouts/${method}BreakoutRating`, { eventId: slugs.slug, breakoutId: breakout.id }, {})
    .then((res) => {
      if (res.err?.status === 401) {
        document.getElementById('login_button')?.click();
      } else {
        let updatedCategories = categories.map((category: any) => {
          let updatedBreakouts = category.breakouts.map((b: any) => {
            if (b.id === breakout.id) {
              b.breakoutRated = !b.breakoutRated;
              b.breakoutRating = method === 'add' ? b.breakoutRating + 1 : b.breakoutRating - 1;
            }
            return b;
          });
          return { ...category, breakouts: updatedBreakouts };
        });
        setCategories(updatedCategories);
      }
    });
  }
  
  const handleClick = (breakout: any) => {
    if (breakout.hasPassword) {
      modalContext.setModalContent(<JoinModal data={{id: breakout.id, title: breakout.title}} />)
      modalContext.setModalIsOpen(true)
    } else {
      window.open(breakout.url, '_blank');
    }
  }

  return (
    <div className='flex flex-col'>
      <SubTitle>
        {subtitle}
      </SubTitle>
      <SortAndSearch title='Sort by:' showSearch={data.isSearchEnabled} showSort={data.isSortEnabled} dropDownPlaceholder={''} dropdownValues={dropdownValues} selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
      <div className='flex flex-col gap-20'>
      {categories &&
        categories.filter((x: any) => x.breakouts.length > 0).map((category: any, index: number) => (
          <BreakoutCategoryContainer key={index}>
            <BreakoutCategoryTitle>
              {category.title}
            </BreakoutCategoryTitle>
            <BreakoutOuterContainer>
              {category.breakouts.map((breakout: any, index: number) => (
                <BreakoutContainer key={index} id={`breakout-${breakout.id}`} style={applyBreakoutCardStyle(breakout.cardColumnSize)}>
                  <BreakoutItem>
                    <BreakoutImage>
                      <NextImage
                        src={breakout.upload.path ?? ""}
                        className=''
                        alt={breakout.upload.alt ?? ""}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </BreakoutImage>
                    <BreakoutTopContainer>
                      <BreakoutIcons>
                        <FAIcon
                          icon={'fa-regular fa-user'}
                          width={22}
                          height={22}
                        />
                        <div onClick={() => shareLink(breakout)}>
                          <FAIcon
                            icon={'fa-share-nodes'}
                            width={22}
                            height={22}
                          />
                        </div>
                        <div onClick={() => toggleRating(breakout)}>
                          <FAIcon
                            icon={`${breakout.breakoutRated ? 'fa-solid' : 'fa-regular'} fa-heart`}
                            width={22}
                            height={22}
                          />
                        </div>
                      </BreakoutIcons>
                      <BreakoutTagsContainer>
                        {breakout.tags.map((tag: any, index: number) => (
                          <BreakoutTag key={index}>
                            {`#${tag}`}
                          </BreakoutTag>
                        ))
                        }
                      </BreakoutTagsContainer>
                    </BreakoutTopContainer>
                    <BreakoutDetailsContainer>
                      <BreakoutDetails>
                        <BreakoutTitle>
                          {breakout.title}
                        </BreakoutTitle>
                        <BreakoutSubtitle>
                          {breakout.subtitle}
                        </BreakoutSubtitle>
                        <BreakoutInfo>
                          {breakout.bio}
                        </BreakoutInfo>
                      </BreakoutDetails>
                      <BreakoutButton onClick={() => handleClick(breakout)}>
                        {'Join'}
                      </BreakoutButton>
                    </BreakoutDetailsContainer>
                  </BreakoutItem>
                </BreakoutContainer>
              ))
              }
            </BreakoutOuterContainer>
          </BreakoutCategoryContainer>
        ))
      }</div>
      <div className='h-20' />
    </div>
  )
}

export default Breakouts