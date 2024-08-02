import React, { useState, useEffect } from 'react'
import {
  Container,
  ComponentContainer,
  Title,
} from 'components/Bootstrap/Common'
import FAIcon from 'components/Bootstrap/FAIcon'
import { parseContent } from 'utils/helpers'
import {
  StyledInnerContainer,
  Category,
  FiltersContainer,
  FaqsContainer,
  FaqItem,
  FaqQuestion,
  FaqAnswer,
  InfoBoxContainer,
  InfoBoxTitle,
  InfoBoxSubTitle,
} from './styles'
import Ruler from '@/components/StrapiComponents/PwaComponents/Common/Ruler'
import {
  LeftEventTitle,
} from '@/components/StrapiComponents/PwaComponents/Header/styles'

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

const ComponentSectionsFaQs = ({
  faqs,
  title,
  open,
  isHomepage,
}: any) => {

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

  const FAQsContent = ({ faqs, activeFilter }: any) => {
    return (
      <div className='flex justify-between lg:flex-row flex-col gap-x-24 gap-y-6 '>
        <FaqsContainer id='accordionExample' className='flex lg:w-4/5 w-full' key={`faq_accordion_${activeFilter}`} hasinfobox={'false'}>
          {faqs.map((faq: any, index: number) => (
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
                <FaqQuestion
                  dangerouslySetInnerHTML={{
                    __html: parseContent(faq.title),
                  }}
                />
              </div>

              <FaqAnswer
                id={`faq_collapse_${index}_${activeFilter}`}
                className={`${open ? '' : '!visible hidden'}`}
                data-twe-collapse-item
                aria-labelledby={`faq_item_${index}_${activeFilter}`}
                data-twe-parent="#accordionExample"
              >
                <br />
                <div
                  dangerouslySetInnerHTML={{
                    __html: parseContent(faq.longDesc),
                  }}
                />
              </FaqAnswer>
            </FaqItem>
          ))
          }
        </FaqsContainer>
      </div>
    )
  }

  return (
    <Container className=''>
      <StyledInnerContainer className='flex flex-col gap-4' hasinfobox={'false'}>
        {isHomepage
          ?
          <>
            <Title>
              {title}
            </Title>
            <FAQsContent faqs={faqs} activeFilter={activeFilter} />
          </>
          :
          <ComponentContainer className='flex flex-col'>
            <LeftEventTitle>
              {title}
            </LeftEventTitle>
            <Ruler />
            <FAQsContent faqs={faqs} activeFilter={activeFilter} />
          </ComponentContainer>
        }
      </StyledInnerContainer>
    </Container>
  )
}

export default ComponentSectionsFaQs