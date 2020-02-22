import React from 'react'
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
  grid-row-gap: 36px;
  display: grid;
  // grid-template-columns: 1fr;
  align-items: flex-start;
  ${mediaQueries[2]} {
    grid-row-gap: 64px;
    display: none;
  }
`

const date = <DateContainer>
  <div><span css={visuallyHiddenCss}>Date: </span>March 28-29, 2020</div>
  <div><span css={visuallyHiddenCss}>Location: </span>Mavs Gaming Hub, Texas</div>
</DateContainer>

const FancyLinks = styled.div`
  display: grid;
  grid-gap: 16px;
  @media (min-width: 370px) {
    grid-template-columns: 1fr 1fr;
  }
  ${mediaQueries[2]} {
    align-items: flex-start;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: flex-start;
  } 
`

const FillerDiv = styled.div`
  display: none;
  @media (min-width: 370px) {
    display: block;
  }
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
        <Logo />
        {date}
        <FancyLinks>
          <FancyLink backgroundColor="#ED2939">
            Apply here!
          </FancyLink>
          <FillerDiv></FillerDiv>
          <FancyLink backgroundColor="#62B4C5">
            Volunteering
          </FancyLink>
          <FancyLink backgroundColor="#9C8DC3">
            Mentoring
          </FancyLink>
        </FancyLinks>
        <ImageFrame imgSrc={landingPhoto}/>
      </MobileView>
    </>
  )
}