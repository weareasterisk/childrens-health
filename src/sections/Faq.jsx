import React from 'react'
import { SectionHeading, mediaQueries, ieMediaQuery, breakpoints, edgeMediaQuery } from '../components/Foundation'
import { FaqItem } from '../components/FaqItem'
import content from '../content'
import styled from '@emotion/styled'

const FaqItems = styled.div`
  display: grid;
  ${mediaQueries[2]} {
    grid-gap: 42px;
    grid-template-columns: 1fr 1fr;
  }
  ${mediaQueries[3]} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  ${ieMediaQuery} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    > * {
      width: ${breakpoints[2]}px;
    }
  }
  ${edgeMediaQuery} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    > * {
      width: ${breakpoints[2]}px;
    }
  }
`

const faqItems = content.faqs
    .map((faq, i) => <FaqItem key={`faqitem#${i}`} question={faq.question} answer={faq.answer} />)

export const Faq = () => {
  return (
    <>
      <SectionHeading>
        FAQ
      </SectionHeading>
      <FaqItems>
        {faqItems}
      </FaqItems>
    </>
    )
  }
  