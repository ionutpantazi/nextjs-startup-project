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
  id: string,
  attributes: {
    Question: string,
    Answer: string,
    Categories: Category,
  }
}

export type Category = {
  data: [
    id: string,
    attributes: CategoryItem
  ]
}

export type CategoryItem = {
  Title: string,
  Slug: string,
}

export type InfoBox = {
  id: string,
  Title: string,
  Sub_Title: string,
  Icon: StrapiFile,
  Button: ButtonProps,
}

export type SectionsFaQs = {
  id: string,
  Title: string;
  FAQs: {
    data: [
      FAQs
    ]
  }
  Info_Box: InfoBox
}

const StyledInnerContainer = styled(InnerContainer) <{ hasinfobox?: any }>`
  ${({ hasinfobox }) => css`
    ${props => hasinfobox == 'false' ? 'max-width: 1000px; margin: 0 auto' : ''};
  `}
`

const Category = styled.div <{ active?: any }>`
  ${({ active }) => css`
    ${props => active == 'true' ? 'background-color: ' + props.theme.colors.brand : 'background-color: ' + props.theme.colors.grey};
  `}

  border-radius: ${props => props.theme.borderRadius.components.medium};
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
  border-radius: ${props => props.theme.borderRadius.components.small};
  background-color: ${props => props.theme.colors.grey};
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

const extractFaqCategories = (props: SectionsFaQs) => {
  let categoriesArray: any = [{
    Title: 'All',
    Slug: 'all'
  }];
  props.FAQs.data.forEach((s: FAQs) => {
    s.attributes.Categories.data.forEach((category: any) => {
      if (!categoriesArray.some((item: any) => item.Slug === category.attributes.Slug)) {
        categoriesArray.push({
          Title: category.attributes.Title,
          Slug: category.attributes.Slug
        });
      }
    });
  });
  return categoriesArray
}

export interface ComponentSectionsFaQsProps {
  data: SectionsFaQs
}

const ComponentSectionsFaQs = ({
  data
}: ComponentSectionsFaQsProps) => {

  const [faqs, setFaqs] = useState<any>(data.FAQs.data);
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

  useEffect(() => {
    setFaqCategories(extractFaqCategories(data));
  }, []);

  function setActiveCategory(e: any) {
    let value = e.target.getAttribute('data-value');
    setActiveFilter(value);

    setTimeout(function () {

    }, 1);

    let initialFaqs = data.FAQs.data;
    if (value == 'all') {
      setFaqs(initialFaqs);
    } else {
      let filteredFaqs = initialFaqs.filter((faq) => {
        let categoriesArray = faq.attributes.Categories.data;
        if (categoriesArray.some((category: any) => category.attributes.Slug === value)) return faq;
      });
      setFaqs(filteredFaqs);
    }
  }

  return (
    <Container className=''>
      <StyledInnerContainer className='flex flex-col gap-4' hasinfobox={data.Info_Box ? 'true' : 'false'}>
        <Title>
          {data.Title}
        </Title>
        <FiltersContainer className='flex flex-row gap-2'>
          {faqCategories.map((category: CategoryItem, index) => (
            <Category className='' data-value={category.Slug} onClick={e => setActiveCategory(e)} active={activeFilter == category.Slug ? 'true' : 'false'} key={index}>
              {category.Title}
            </Category>
          ))
          }
        </FiltersContainer>
        <div className='flex justify-between lg:flex-row flex-col gap-x-24 gap-y-6 '>
          <FaqsContainer id='accordionExample' className='flex lg:w-4/5 w-full' key={`faq_accordion_${activeFilter}`} hasinfobox={data.Info_Box ? 'true' : 'false'}>
            {faqs.map((faq: FAQs) => (
              <FaqItem
                key={faq.id}
                className='group'
                data-twe-collapse-init
                data-twe-target={`#faq_collapse_${faq.id}_${activeFilter}`}
                aria-expanded="false"
                aria-controls={`faq_collapse_${faq.id}_${activeFilter}`}
                id={`faq_item_${faq.id}_${activeFilter}`}
                data-twe-collapse-collapsed
              >
                <div className='flex flex-row gap-6'>
                  <PlusIcon />
                  <MinusIcon />
                  <FaqQuestion>
                    {faq.attributes.Question}
                  </FaqQuestion>
                </div>

                <FaqAnswer
                  id={`faq_collapse_${faq.id}_${activeFilter}`}
                  className="!visible hidden"
                  data-twe-collapse-item
                  aria-labelledby={`faq_item_${faq.id}_${activeFilter}`}
                  data-twe-parent="#accordionExample"
                >
                  <br />
                  <br />
                  <br />
                  {faq.attributes.Answer}
                </FaqAnswer>
              </FaqItem>
            ))
            }
          </FaqsContainer>
          {data.Info_Box &&
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
          }
        </div>
      </StyledInnerContainer>
    </Container>
  )
}

export default ComponentSectionsFaQs