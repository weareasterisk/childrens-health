import React from 'react'
import content from '../content'
import css from '@emotion/css'
import { SectionHeading, Image, mediaQueries, ieMediaQuery, edgeMediaQuery, Text, FancyLink } from '../components/Foundation'
import styled from '@emotion/styled'

const SponsorsContainer = styled.div`
  display: grid;
  display: -ms-grid;
  margin: 0 auto;
  margin-top: 54px;
  grid-gap: 54px;
  justify-content:;
  align-content: center;
  ${mediaQueries[2]} {
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    -ms-grid-columns: (minmax(250px, 1fr))[auto-fit]
  }
  ${ieMediaQuery} {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  ${edgeMediaQuery} {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`

const SponsorImage = styled(Image)`
  ${mediaQueries[2]} {
    padding: 16px;
  }
`

export const Sponsors = () => {

  const sponsors = content.sponsors ? content.sponsors.map((sponsor, i) => {
    const key = `${sponsor.name}#${i}`
    return <SponsorImage
      key={key}
      imgSrc={sponsor.imageSrc}
      imgAlt={sponsor.sponsorName}
      height="120px"
      ieMaxWidth="300px"
      ieMaxHeight="150px"
      iePadding="16px"
      fit="contain"
      />
  }) : ""

  return <>
    <SectionHeading>
      Sponsors
    </SectionHeading>
    <Text style={{ marginBottom: "12px" }}>
      Virtual challenges help bring your brand to future decision-makers. Showcase your
      company at the Virtual Innov8 4 Kids Challengeand meet student participants and 
      young professionals passionate about innovative technology. Our attendees represent
      some of the greatest talent hubs from across the country, and they are excited to
      learn about your company.
    </Text>
    <Text><b>Interested in partnering?</b></Text>
    <Text style={{ marginTop: "16px", fontSize: "22px", fontWeight: "medium" }}>
      <FancyLink 
        href="https://viewer.weareasterisk.com/web/viewer.html?file=https://cdn.weareasterisk.net/documents/childrens21/2021-Virtual-Innov8-4-Kids-Challenge_SponsorOutline.pdf"
        target="_blank"
        rel="noopener noreferrer"
        backgroundColor="#62B4C5"
      >
        Sponsor
      </FancyLink>
    </Text>
    <SponsorsContainer>
      {sponsors}
    </SponsorsContainer>
  </>
}
