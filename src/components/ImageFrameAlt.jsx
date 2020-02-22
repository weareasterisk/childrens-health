import React from 'react'
import styled from '@emotion/styled'
import { ContentContainer } from './Foundation'

const imagePlaceholder = "https://via.placeholder.com/150"

const Root = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 420px;
`

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
  display: flex;
`

const ContainedImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  display: block;
`

const Backframe = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #FFB819;
  left: -19px;
  top: 19px;
  z-index: 1;
`

export const ImageFrameAlt = ({ imgSrc = imagePlaceholder }) => {
  return (
    <Root>
      <ImageContainer>
        <ContainedImage src={imgSrc} alt="" />
      </ImageContainer>
      <Backframe />
    </Root>
  )
}

