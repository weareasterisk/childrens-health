import React from 'react'
import content from '../content'
import { SectionHeading, mediaQueries, Text, SubHeading, ieMediaQuery, edgeMediaQuery } from '../components/Foundation'
import { ImageFrameAlt } from '../components/ImageFrameAlt'
import aboutImage from "../assets/vr-helmet-pill.jpg"
import styled from '@emotion/styled'

const AboutContentContainer = styled.div`
  display: grid;
  display: -ms-grid;
  padding: 32px 0px;
  justify-content: flex-start;
  grid-gap: 56px;
  -ms-grid-row-gap: 90px;
  -ms-grid-row-gap: 90px;
  align-content: flex-start;
  ${mediaQueries[2]} {
    grid-template-columns: 420px 1fr;
  }
  ${ieMediaQuery} {
    display: flex;
  }
  ${edgeMediaQuery} {
    display: flex;
  }
`

const AboutContent = styled.div`
  display: grid;
  grid-gap: 32px;
  max-width: 600px;
  ${ieMediaQuery} {
    -ms-grid-column: 2;
    margin-left: 32px;
    max-width: 520px;
    > * {
      margin-bottom: 24px;
    }
  }
  ${edgeMediaQuery} {
    -ms-grid-column: 2;
    margin-left: 32px;
    max-width: 520px;
    > * {
      margin-bottom: 24px;
    }
  }
`

export const About = () => {
  const [firstParagraph, ...everythingElse] = content.about.body
  const aboutContent = everythingElse.map((paragraph, i) => <Text key={`aboutContent#${i}`}>
    {paragraph}
  </Text>)
  return <>
    <SectionHeading>
      About
    </SectionHeading>
    <AboutContentContainer>
      <ImageFrameAlt imgSrc={aboutImage} border />
      <AboutContent>
        <SubHeading>{content.about.heading}</SubHeading>
        <Text>
          {firstParagraph}
        </Text>
        {aboutContent}
      </AboutContent>
      <SubHeading>Mini Challenges</SubHeading>
      <Text>
        <b>No Code Challenge:</b> Challenge participants to find software to create games, AR, or VR that doesn't require programming skills. Individuals would record a short video showing how to use the platform (validates it doesn't require programming) and explain how the software could be used to create something that helps patients or staff. This list will be added to our portal for the final weekend event.
        <br/>
        <br/>
        <b>Gamifying the Outdoors Challenge:</b> Individuals pitch ideas (don't have to create) on how to get kids outside by gamifying local parks and public areas.
      </Text>
    </AboutContentContainer>
  </>
}
