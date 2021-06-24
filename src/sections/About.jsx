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
        <b>No Code Challenge:</b>
        <ul style={{
          paddingLeft: "24px"
        }}>
          <li>
          Identify an existing application that would allow for people with zero-to-limited coding ability to create a game, AR, or VR experience. 
          </li>
          <li>
          Demonstrate how to use the application in a short video and show how it does not require programming experience. In this video, explain an example of how the application could be used to create something that helps patients or staff.
          </li>
          <li>
            The application will be added to our portal for the final event weekend.
          </li>
        </ul>
        <br/>
        <br/>
        <b>Gamifying the Outdoors Challenge:</b>
        <ul style={{
          paddingLeft: "24px"
        }}>
          <li>
            How might we leverage gamification to get kids outside in local parks and public areas?
          </li>
          <li>
            Pitch an idea that satisfies the challenge in a short video. You don’t have to actually create this idea, a pitch is all that is required.
          </li>
        </ul>
      </Text>
    </AboutContentContainer>
  </>
}
