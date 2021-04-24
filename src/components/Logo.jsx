import React from 'react'
import styled from '@emotion/styled'
import { visuallyHiddenCss, mediaQueries } from './Foundation'
import childrensHealthLogo from "../assets/childrens-health-logo.png"

export const Logo = () => {
  return (
    <LogoContainer>
      <VisuallHiddenTitle>
        Children's Health: The Virtual Innov8 4 Kids Challenge - A Mixed Reality and Gamification Challenge 
      </VisuallHiddenTitle>
      <Image src={childrensHealthLogo} alt="Children's Health Logo"/>
      <div style={{ marginTop: "36px", gap: "8px", display: "grid" }}>
        <Subtitle>The Virtual Innov8 4 Kids Challenge</Subtitle>
        <Subtitle>A Mixed Reality and Gamification Challenge</Subtitle>
      </div>
    </LogoContainer>
  )
}

const Image = styled.img`
  height: 54px;
  transition: height 200ms;
  ${mediaQueries[2]} {
    height: 100px;
  }
`

const Subtitle = styled.p`
  font-size: 18px;
  transition: font-size 200ms;
  ${mediaQueries[2]} {
    font-size: 26px;
  }
`

const LogoContainer = styled.div`

`

const VisuallHiddenTitle = styled.h1`
  ${visuallyHiddenCss}
`