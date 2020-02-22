import React from 'react'
import css from '@emotion/css'
import { Circle } from '../components/Shapes'
import styled from '@emotion/styled'
import { mediaQueries } from '../components/Foundation'
import { PhotoGallery } from '../components/PhotoGallary'
import images from "../assets/*.png"

const Container = styled.div`
  // overflow: hidden;
  position: relative;
  ${mediaQueries[2]} {
    height: 300px;
  }
`

const PhotoGallaryContainer = styled.div`
  position: absolute;
  width: 100%;
  margin: 0 auto;
  display: none;
  ${mediaQueries[2]} {
    display: block;
  }
`

const imgSrcs = [
  images['research-2'],
  images['child-with-nurses'],
  images['research-1'],
  images['child-with-dog'],
]

export const BetweenSponsorsAndContact = () => {
  return (
    <Container>
      <PhotoGallaryContainer>
        <PhotoGallery imgSrcs={imgSrcs} altMode={true}/>
      </PhotoGallaryContainer>
      <Circle override={css`
        position: absolute;
        left: -50px;
        top: -125px;

        ${mediaQueries[2]} {
          left: -175px;
          top: -125px;
          height: 555px;
          width: 555px;
        }
      `}/>
    </Container>
  )
}