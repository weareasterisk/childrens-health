import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { ieMediaQuery, edgeMediaQuery } from './Foundation'

const imagePlaceholder = "https://via.placeholder.com/150"

const Root = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 470px;
  margin: 0 auto;
  ${ieMediaQuery} {
    height: 300px;
    width: 400px;
  }
  ${edgeMediaQuery} {
    height: 300px;
    width: 400px;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 5px solid #62B4C5; 
  position: relative;
  margin-top: ${12}px;
  z-index: 2;
  overflow: hidden;
  display: flex;
`

const ContainedImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  ${ieMediaQuery} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ${edgeMediaQuery} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const Backframe = styled.div`
  width: 100%;
  height: 100%;
  border: 5px solid #FFB819; 
  position: absolute;
  top: -12px;
  right: -12px;
  z-index: 1;
`

export const ImageFrame = ({ imgSrc = imagePlaceholder }) => {
  return (
    <Root>
      <ImageContainer>
        <ContainedImage src={imgSrc} alt="" />
      </ImageContainer>
      <Backframe />
    </Root>
  )
}

ImageFrame.propTypes = {
  imgSrc: PropTypes.string,
}