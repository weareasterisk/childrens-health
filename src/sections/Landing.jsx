import React from 'react'
import css from '@emotion/css'
import { ImageFrame } from '../components/ImageFrame'
import { FancyLink, visuallyHiddenCss, mediaQueries } from '../components/Foundation'
import { Logo } from '../components/Logo'
import styled from '@emotion/styled'
import landingPhoto from "../assets/child-1.png"

const DateContainer = styled.div`
  font-size: 24px;
  font-weight: 300;
  ${mediaQueries[2]} {
    font-size: 36px;
  }
`

const SpanTwoColumns = styled.div`
  grid-column: 1 / 3;
`

const DesktopView = styled.div`
  display: none;
  ${mediaQueries[2]} {
    display: grid;
    grid-gap: 150px;
    grid-template-columns: 2fr 3fr;
  }
`

const DesktopLeftColumn = styled.div`
  display: grid;
  grid-gap: 33px;
  justify-content: flex-start;
  align-content: flex-start;
`

const MobileView = styled.div`
  grid-gap: 24px;
  grid-row-gap: 64px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  ${mediaQueries[2]} {
    display: none;
  }
`

const date = <DateContainer>
  <div><span css={visuallyHiddenCss}>Date: </span>April 2020</div>
  <div><span css={visuallyHiddenCss}>Location: </span>Dallas, Texas</div>
</DateContainer>

const FancyLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  align-items: flex-start;
  justify-content: flex-start;
`

export const Landing = () => {

  return (
    <>
      <DesktopView>
        <DesktopLeftColumn>
          <Logo />
          {date}
          <FancyLinks>
            <FancyLink backgroundColor="#ED2939">
              Apply here!
            </FancyLink>
            <FancyLink backgroundColor="#62B4C5">
              Volunteering
            </FancyLink>
            <FancyLink backgroundColor="#9C8DC3">
              Mentoring
            </FancyLink>
          </FancyLinks>
        </DesktopLeftColumn>
        <ImageFrame imgSrc={landingPhoto}/>

      </DesktopView>
      <MobileView>
        <SpanTwoColumns>
          <Logo />
        </SpanTwoColumns>
        {date}
        <FancyLink backgroundColor="#ED2939">
          Apply here!
        </FancyLink>
        <SpanTwoColumns>
          <ImageFrame imgSrc={landingPhoto}/>
        </SpanTwoColumns>
        <FancyLink backgroundColor="#62B4C5">
          Volunteering
        </FancyLink>
        <FancyLink backgroundColor="#9C8DC3">
          Mentoring
        </FancyLink>
       
      </MobileView>
    </>
  )
}