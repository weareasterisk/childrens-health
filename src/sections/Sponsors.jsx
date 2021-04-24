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
    <Text style={{ marginBottom: "12px" }}>Sponsoring demonstrates support for pediatric innovation, see real-time capabilities of potential hires, and get your product in hands of future influencers.</Text>
    <Text><b>Interested in partnering?</b></Text>
    <Text style={{ marginTop: "16px", fontSize: "22px", fontWeight: "medium" }}>
      <FancyLink 
        href="https://viewer.weareasterisk.com/web/viewer.html?file=https://cdn.weareasterisk.net/documents/childrens21/2021_virtual_innov8_kids_challenge_sponsor_outline.pdf"
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
