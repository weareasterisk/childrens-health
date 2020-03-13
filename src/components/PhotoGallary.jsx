import React from 'react'
import styled from '@emotion/styled'
import { Image, breakpoints } from './Foundation'

const Container = styled.div`
  position: absolute;
  display: grid;
  justify-content: center;
  width: 100%;
  `
  
  const Images = styled.div`
    display: grid;
    display: -ms-grid;
    width: ${breakpoints[2]}px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    -ms-grid-columns: 1fr 1fr 1fr 1fr;
    margin: 0 auto;
    position: relative;
    height: 165px;
    * {
      position: relative;
      z-index: 2;
    }
`

const Backdrop = styled.div(({ altMode = false}) => {
  return `
    background: ${altMode ? "#9C8DC3" : "#A2E7EB"};
    position: absolute;
    top: ${20}px;
    left: ${altMode ? -20 : 20}px;
    height: inherit;
    width: inherit;
    z-index: 1;
  `
})

export const PhotoGallery = ({ imgSrcs = [], altMode = false}) => {

  const images = imgSrcs.map((imgSrc, i) => {
    const key = `${imgSrc}#${i}`
    return <Image key={key} imgSrc={imgSrc} width="250px" height="165px" columnPos={i+1} />
  })

  return (
    <Container>
      <Images>
        <Backdrop altMode={altMode} />
        {images}
      </Images>
    </Container>
  )
}
