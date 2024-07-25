import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import NextImage from 'next/image'
import Button, { ButtonProps } from 'components/StrapiComponents/Button'
import {
  OuterContainer,
  Container,
  InnerContainer,
  Title,
  ComponentContainer,
} from 'components/Bootstrap/Common'
import FAIcon from 'components/Bootstrap/FAIcon'
import {
  StrapiFile
} from 'interfaces'

import 'swiper/css';
import { useWindowSize } from '@/lib/hooks/useWindowSize';

export type FAQs = {
  title: string;
  longDesc: string;
}

export interface ComponentSectionsFaQsProps {
  faqs: [FAQs]
  title?: string
  open?: boolean
}

const StyledInnerContainer = styled(InnerContainer) <{ hasinfobox?: any }>`
  ${({ hasinfobox }) => css`
    ${props => hasinfobox == 'false' ? 'max-width: 1000px; margin: 0 auto' : ''};
  `}
`

const Category = styled.div <{ active?: any }>`
  ${({ active }) => css`
    ${props => active == 'true' ? 'background-color: ' + props.theme?.components?.FAQs?.CategoryActiveBackground : 'background-color: ' + props.theme?.components?.FAQs?.CategoryBackground};
  `}

  border-radius: ${props => props.theme.borderRadius.components?.medium};
  padding: 4px 10px;
  width: fit-content;
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;

  &:hover {
    cursor: pointer;
  }
`

const FiltersContainer = styled.div`
`

const FaqsContainer = styled.div <{ hasinfobox?: any }>`
  ${({ hasinfobox }) => css`
    ${props => hasinfobox == 'false' ? 'width: 100%' : ''};
  `}

  display: flex;
  flex-direction: column;
  gap: 20px;
`

const FaqItem = styled.div`
  border-radius: ${props => props.theme.borderRadius.components?.small};
  background-color: ${props => props.theme.components?.FAQs?.FaqItemBackground};
  padding: 20px 10px;
  &:hover {
    cursor: pointer;
  }
`

const FaqQuestion = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
`

const FaqAnswer = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
`

const PlusIcon = () => {
  return (
    <div className='w-fit hidden transition-opacity duration-200 ease-in-out group-data-[twe-collapse-collapsed]:block'>
      <FAIcon
        icon={'fa-circle-plus'}
        width={26}
        height={26}
      />
    </div>
  )
}

const MinusIcon = () => {
  return (
    <div className='w-fit transition-opacity duration-200 ease-in-out group-data-[twe-collapse-collapsed]:hidden'>
      <FAIcon
        icon={'fa-circle-minus'}
        width={26}
        height={26}
      />
    </div>
  )
}

const InfoBoxContainer = styled.div`
  border-radius: 6px;
  background-color: ${theme.colors.grey};
  padding: 30px 40px;
`

const InfoBoxTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
`

const InfoBoxSubTitle = styled.div`
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
  text-align: center;
`

// const extractFaqCategories = (props: SectionsFaQs) => {
//   let categoriesArray: any = [{
//     Title: 'All',
//     Slug: 'all'
//   }];
//   props.FAQs.data.forEach((s: FAQs) => {
//     s.attributes.Categories.data.forEach((category: any) => {
//       if (!categoriesArray.some((item: any) => item.Slug === category.attributes.Slug)) {
//         categoriesArray.push({
//           Title: category.attributes.Title,
//           Slug: category.attributes.Slug
//         });
//       }
//     });
//   });
//   return categoriesArray
// }

const ComponentSectionsFaQs = ({
  faqs,
  title,
  open,
}: ComponentSectionsFaQsProps) => {

  const [faqsData, setFaqsData] = useState<any>(faqs);
  const [activeFilter, setActiveFilter] = useState("all");
  const [faqCategories, setFaqCategories] = useState([]);

  useEffect(() => {
    const init = async () => {
      const {
        Collapse,
        initTWE,
      } = await import("tw-elements");
      initTWE({ Collapse });
    };
    init();
  }, []);

  return (
    <Container className=''>
      <StyledInnerContainer className='flex flex-col gap-4' hasinfobox={'false'}>
        {title &&
          <Title>
            {title}
          </Title>
        }
        <FiltersContainer className='flex flex-row gap-2'>
          {/* {faqCategories.map((category: CategoryItem, index) => (
            <Category className='' data-value={category.Slug} onClick={e => setActiveCategory(e)} active={activeFilter == category.Slug ? 'true' : 'false'} key={index}>
              {category.Title}
            </Category>
          ))
          } */}
        </FiltersContainer>
        <div className='flex justify-between lg:flex-row flex-col gap-x-24 gap-y-6 '>
          <FaqsContainer id='accordionExample' className='flex lg:w-4/5 w-full' key={`faq_accordion_${activeFilter}`} hasinfobox={'false'}>
            {faqs.map((faq: FAQs, index: number) => (
              <FaqItem
                key={index}
                className='group'
                data-twe-collapse-init
                data-twe-target={open ? '#faq_collapse' : `#faq_collapse_${index}_${activeFilter}`}
                aria-expanded={open ? 'true' : 'false'}
                aria-controls={`faq_collapse_${index}_${activeFilter}`}
                id={`faq_item_${index}_${activeFilter}`}
                data-twe-collapse-collapsed
              >
                <div className='flex flex-row gap-6'>
                  {!open &&
                    <>
                      <PlusIcon />
                      <MinusIcon />
                    </>
                  }
                  <FaqQuestion>
                    {faq.title}
                  </FaqQuestion>
                </div>

                <FaqAnswer
                  id={`faq_collapse_${index}_${activeFilter}`}
                  className={`${open ? '' : '!visible hidden'}`}
                  data-twe-collapse-item
                  aria-labelledby={`faq_item_${index}_${activeFilter}`}
                  data-twe-parent="#accordionExample"
                >
                  <br />
                  <br />
                  <br />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: faq.longDesc,
                    }}
                  />
                </FaqAnswer>
              </FaqItem>
            ))
            }
          </FaqsContainer>
          {/* {data.Info_Box &&
            <InfoBoxContainer className='flex flex-col gap-6 items-center h-fit lg:w-60 w-full'>
              <div className=''>
                <NextImage
                  src={IMAGE_DOMAIN + data.Info_Box.Icon.data?.attributes?.url}
                  className=''
                  alt={data.Info_Box.Icon.data?.attributes?.alternativeText ?? ""}
                  width={72}
                  height={72}
                />
              </div>
              <InfoBoxTitle>
                {data.Info_Box.Title}
              </InfoBoxTitle>
              <InfoBoxSubTitle>
                {data.Info_Box.Sub_Title}
              </InfoBoxSubTitle>
              <Button data={data.Info_Box.Button} />
            </InfoBoxContainer>
          } */}
        </div>
      </StyledInnerContainer>
    </Container>
  )
}

export default ComponentSectionsFaQs