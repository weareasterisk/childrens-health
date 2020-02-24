import React from 'react'
import css from '@emotion/css'
import PropTypes from 'prop-types'
import Chevron from "../assets/chevron.png"
import { keyframes } from '@emotion/core'
import { Text, SubHeading, mediaQueries, breakpoints } from './Foundation'
import styled from '@emotion/styled'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const FaqItemContent = styled.div`
  padding-top: 8px;
`

const FaqItemContainer = styled.div`
  display: grid;
  grid-template-columns: 52px 1fr;
  grid-gap: 8px;
  align-content: flex-start;
  ${mediaQueries[2]} {
    grid-template-columns: 1fr;
  }

  p {
    opacity: 0;
    animation: ${fadeIn} 400ms ease forwards;
    animation-delay: 100ms;
    padding: 24px 0;
  }
`

const ChevronButton = styled.button`
    height: 40px;
    padding: 0;
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
    ${mediaQueries[2]} {
      display: none;
    }
    img {
      transition: transform 200ms;
      &.active {
        transform: rotate(90deg);
      }
    }
  `

const FaqAnswerText = styled(Text)`
  display: none;
  ${mediaQueries[2]} {
    display: block;
  }

  &.is-expanded {
    display: block;
  }
`

export const FaqItem = ({ question, answer }) => {

  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <FaqItemContainer>
      <ChevronButton onClick={e => setIsExpanded(!isExpanded)}>
        <img src={Chevron} className={isExpanded ? "active" : ""} alt=""/>
      </ChevronButton>
      <FaqItemContent>
        <SubHeading onClick={e => setIsExpanded(!isExpanded)}>{question}</SubHeading>
        <FaqAnswerText className={isExpanded ? "is-expanded" : ""}>{answer}</FaqAnswerText>
      </FaqItemContent>
    </FaqItemContainer>
  )
}

FaqItem.propTypes = {
  value: PropTypes.string,
}