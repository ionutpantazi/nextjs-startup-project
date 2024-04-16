import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'lib/theme'
import { IMAGE_DOMAIN } from 'lib/constants'
import { Swiper, SwiperSlide } from 'swiper/react';
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

export type SectionsFaQs = {
  id: string,
  Title: string;
  FAQs: {
    data: [
      FAQs
    ]
  }
}

const Container = styled.div`
  padding: ${theme.margins.homepage_large};
  color: ${theme.colors.white};
  overflow: hidden;
  margin-bottom: 40px;

  @media screen and (max-width: ${theme.screens.sm}) {
    padding: ${theme.margins.homepage_small};
    margin-bottom: 20px;
  }
`

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: ${theme.pageWidth};
`

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  margin-bottom: 10px;
`

const Category = styled.div <{ active?: any }>`
  ${({ active }) => css`
    ${active == 'true' ? 'background-color: ' + theme.colors.brand : 'background-color: ' + theme.colors.grey};
  `}

  border-radius: 12px;
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

const FaqsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const FaqItem = styled.div`
  border-radius: 6px;
  background-color: ${theme.colors.grey};
  padding: 20px 30px;
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
    <svg width="25px" height="25px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Icon-Set" transform="translate(-464.000000, -1087.000000)" fill="white">
          <path d="M480,1117 C472.268,1117 466,1110.73 466,1103 C466,1095.27 472.268,1089 480,1089 C487.732,1089 494,1095.27 494,1103 C494,1110.73 487.732,1117 480,1117 L480,1117 Z M480,1087 C471.163,1087 464,1094.16 464,1103 C464,1111.84 471.163,1119 480,1119 C488.837,1119 496,1111.84 496,1103 C496,1094.16 488.837,1087 480,1087 L480,1087 Z M486,1102 L481,1102 L481,1097 C481,1096.45 480.553,1096 480,1096 C479.447,1096 479,1096.45 479,1097 L479,1102 L474,1102 C473.447,1102 473,1102.45 473,1103 C473,1103.55 473.447,1104 474,1104 L479,1104 L479,1109 C479,1109.55 479.447,1110 480,1110 C480.553,1110 481,1109.55 481,1109 L481,1104 L486,1104 C486.553,1104 487,1103.55 487,1103 C487,1102.45 486.553,1102 486,1102 L486,1102 Z">

          </path>
        </g>
      </g>
    </svg>
  )
}

const MinusIcon = () => {
  return (
    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 12.75C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H15Z" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="#1C274C" />
    </svg>
  )
}

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

  const { width } = useWindowSize();
  const isMobile = width && width < Number(theme.screens['md'].replace('px', '')) ? true : false;
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
      <InnerContainer className='flex flex-col gap-4'>
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
        <FaqsContainer id='accordionExample' key={`faq_accordion_${activeFilter}`}>
          {faqs.map((faq: FAQs) => (
            <FaqItem
              key={faq.id}
              data-twe-collapse-init
              data-twe-target={`#faq_collapse_${faq.id}_${activeFilter}`}
              aria-expanded="false"
              aria-controls={`faq_collapse_${faq.id}_${activeFilter}`}
              id={`faq_item_${faq.id}_${activeFilter}`}
              data-twe-collapse-collapsed
            >
              <div className='flex flex-row gap-6'>
                <PlusIcon />
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
      </InnerContainer>
    </Container>
  )
}

export default ComponentSectionsFaQs