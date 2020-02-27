import React from 'react'
import styled from '@emotion/styled'
import { visuallyHiddenCss, mediaQueries } from './Foundation'
import childrensHealthLogo from "../assets/childrens-health-logo.png"

const Image = styled.img`
  height: 54px;
  transition: height 200ms;
  ${mediaQueries[2]} {
    height: 100px;
  }
`

const Subtitle = styled.p`
  font-size: 24px;
  transition: font-size 200ms;
  margin-top: ${96/2}px;
  ${mediaQueries[2]} {
    font-size: 36px;
  }
`

const LogoContainer = styled.div`

`

const VisuallHiddenTitle = styled.h1`
  ${visuallyHiddenCss}
`

export const Logo = () => {
  return (
    <LogoContainer>
      <VisuallHiddenTitle>
        Children's Health Hackathon
      </VisuallHiddenTitle>
      <Image src={childrensHealthLogo} alt="Children's Health Logo"/>
      <Subtitle>Hackathon</Subtitle>
    </LogoContainer>
  )
}