import React from 'react'
import content from '../content'
import { SectionHeading, mediaQueries, Text, SubHeading } from '../components/Foundation'
import { ImageFrameAlt } from '../components/ImageFrameAlt'
import aboutImage from "../assets/child-2.png"
import styled from '@emotion/styled'

const AboutContentContainer = styled.div`
  display: grid;
  padding: 32px 0px;
  justify-content: flex-start;
  grid-gap: 56px;
  grid-row-gap: 90px;
  align-content: flex-start;
  ${mediaQueries[2]} {
    grid-template-columns: 420px 1fr;
  }
`

const AboutContent = styled.div`
  display: grid;
  grid-gap: 32px;
  max-width: 600px;
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
      <ImageFrameAlt imgSrc={aboutImage} />
      <AboutContent>
        <SubHeading>{content.about.heading}</SubHeading>
        <Text>
          {firstParagraph}
        </Text>
        {aboutContent}
      </AboutContent>
    </AboutContentContainer>
  </>
}
