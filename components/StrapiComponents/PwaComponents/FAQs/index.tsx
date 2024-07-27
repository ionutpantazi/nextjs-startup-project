import React, { useState, useEffect } from 'react'
import {
  Container,
  Title,
} from 'components/Bootstrap/Common'
import FAIcon from 'components/Bootstrap/FAIcon'
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

  return (
    <Container className=''>
      <StyledInnerContainer className='flex flex-col gap-4' hasinfobox={'false'}>
        {title &&
          <Title>
            {title}
          </Title>
        }
        <FiltersContainer className='flex flex-row gap-2'>
        </FiltersContainer>
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
        </div>
      </StyledInnerContainer>
    </Container>
  )
}

export default ComponentSectionsFaQs