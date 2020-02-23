import React from 'react'
import content from '../content'
import css from '@emotion/css'
import { SectionHeading, Image, mediaQueries } from '../components/Foundation'
import styled from '@emotion/styled'

const SponsorsContainer = styled.div`
  display: grid;
  margin: 0 auto;
  margin-top: 54px;
  grid-gap: 54px;
  justify-content:;
  align-content: center;
  ${mediaQueries[2]} {
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  }
`

export const Sponsors = () => {

  const sponsors = content.sponsors.map((sponsor, i) => {
    const key = `${sponsor.name}#${i}`
    return <Image
      key={key}
      imgSrc={sponsor.imageSrc}
      imgAlt={sponsor.sponsorName}
      height="120px"
      fit="contain"
      />
  })

  return <>
    <SectionHeading>
      Sponsors
    </SectionHeading>
    <SponsorsContainer>
      {sponsors}
    </SponsorsContainer>
  </>
}
