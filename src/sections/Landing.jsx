import React from 'react'
import { ImageFrame } from '../components/ImageFrame'
import { FancyLink, visuallyHiddenCss, mediaQueries, ieMediaQuery, edgeMediaQuery } from '../components/Foundation'
import { Logo } from '../components/Logo'
import styled from '@emotion/styled'
import ReactPixel from "react-facebook-pixel"
import landingPhoto from "../assets/child-1.png"

const LandingImageContainer = styled.div`
  -ms-grid-column: 2;
  
  ${ieMediaQuery} {
    width: 420px;
    height: 300px;
    margin-left: 160px;
  }

  ${edgeMediaQuery} {
    width: 420px;
    height: 300px;
    margin-left: 160px;
  }
`

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
    display: -ms-grid;
    grid-gap: 150px;
    grid-template-columns: 2fr 3fr;
    -ms-grid-columns: 2fr 3fr;
  }
`

const DesktopLeftColumn = styled.div`
  > * {
    margin-bottom: 33px;
  }
`

const MobileView = styled.div`
  grid-gap: 24px;
  grid-row-gap: 36px;
  display: grid;
  display: -ms-grid;
  // grid-template-columns: 1fr;
  align-items: flex-start;
  ${ieMediaQuery} {
    display: block;
    > * {
      margin-bottom: 24px;
    }
  }
  ${edgeMediaQuery} {
    display: block;
    > * {
      margin-bottom: 24px;
    }
  }
  ${mediaQueries[2]} {
    grid-row-gap: 64px;
    display: none;
  }
`

const date = <DateContainer>
  {/* <div><span css={visuallyHiddenCss}>Date: </span>March 28-29, 2020</div> */}
  {/* <div><span css={visuallyHiddenCss}>Location: </span>Mavs Gaming Hub, Texas</div> */}
</DateContainer>

const Links = () => {
  return (
    <FancyLinks>
      <FancyLink href="https://astr.sk/childrens-apply" backgroundColor="#ED2939" id="apply">
        Apply here!
      </FancyLink>
      <FillerDiv />
      <FancyLink href="https://astr.sk/childrens-volunteer" backgroundColor="#62B4C5" id="volunteer">
        Volunteering
      </FancyLink>
      {/* <FancyLink href="https://astr.sk/childrens-mentor" backgroundColor="#9C8DC3" id="mentor">
        Mentoring
      </FancyLink> */}
    </FancyLinks>
  )
}

const FancyLinks = styled.div`
  display: grid;
  display: -ms-grid;
  grid-gap: 16px;
  @media (min-width: 370px) {
    grid-template-columns: 1fr 1fr;
    -ms-grid-columns: 1fr 1fr;
  }
  ${ieMediaQuery} {
    display: flex;
    > * {
      margin-right: 16px;
    }
  }
  ${edgeMediaQuery} {
    display: block;
    > * {
      margin-bottom: 24px;
    }
  }
  ${mediaQueries[2]} {
    display: flex;
    > * {
      margin-right: 16px;
    }
  } 
`

const FillerDiv = styled.div`
  display: none;
  @media (min-width: 370px) {
    display: block;
  }
  ${mediaQueries[2]} {
    display: none;
  }
  ${ieMediaQuery} {
    display: none;
  }
  ${edgeMediaQuery} {
    display: none;
  }
`

export class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.setupPixelEvent = this.setupPixelEvent.bind(this)
  }

  componentDidMount() {
    const attend = document.getElementById("apply")
    const volunteer = document.getElementById("volunteer")
    // const mentor = document.getElementById("mentor")

    this.setupPixelEvent(attend, "attend")
    this.setupPixelEvent(volunteer, "volunteer")
    // this.setupPixelEvent(mentor, "mentor")
  }

  setupPixelEvent(element, name) {
    element.addEventListener(
      'click',
      () => {
        ReactPixel.trackCustom(name, {})
      }
    )
  }

  render() {
    return (
      <>
        <DesktopView>
          <DesktopLeftColumn>
            <Logo />
            {date}
            {/* <Links/> */}
          </DesktopLeftColumn>
          <LandingImageContainer>
            <ImageFrame imgSrc={landingPhoto}/>
          </LandingImageContainer>
        </DesktopView>
        <MobileView>
          <Logo />
          {date}
          <Links/>
          <ImageFrame imgSrc={landingPhoto}/>
        </MobileView>
      </>
    )
  }

}