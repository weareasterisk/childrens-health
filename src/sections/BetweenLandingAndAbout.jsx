import React from 'react'
import css from '@emotion/css'
import { Circle, Triangle } from '../components/Shapes'
import styled from '@emotion/styled'
import { mediaQueries } from '../components/Foundation'
import balloonImg from '../assets/balloon.png'
import images from "../assets/*.jpg"
import { PhotoGallery } from '../components/PhotoGallary'

const Container = styled.div`
  height: 0;
  position: relative;
  ${mediaQueries[2]} {
    height: 100px;
    margin: 0;
  }
`

const ShapesContainer = styled.div`
  width: 100%;
  position: absolute;
  right: -30px;
  top: -100px;
`

const Balloon = styled.img`
  display: none;
  position: absolute;
  right: 100px;
  top: 510px;
  ${mediaQueries[4]} {
    display: block;
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
  images['couch-mobile-phone'],
  images['child-cardboard-vr'],
  images['blue-shirt-vr-headset'],
  images['anatomy-ipad-app'],
]

export const BetweenLandingAndAbout = () => {


  return (
    <Container>
      <PhotoGallaryContainer>
        <PhotoGallery imgSrcs={imgSrcs}/>
      </PhotoGallaryContainer>
      <Balloon src={balloonImg} />
      <ShapesContainer>
        <Circle override={css`
          position: absolute;
          height: 250px;
          width: 250px;
          right: -50px;
          background: #6629B7;
          ${mediaQueries[2]} {
            height: 555px;
            width: 555px;
            right: -173px;
          }
        `} />
        <Triangle override={css`
          position: absolute;
          border-bottom-color: #ED2939;
          transform: rotate(-35.29deg);
          right: -33px;
          margin-top: 170px;
          ${mediaQueries[2]} {
            display: none;
          }
        `} />
      </ShapesContainer>
    </Container>
  )
}