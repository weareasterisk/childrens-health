import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import css from '@emotion/css'

export const breakpoints = [576, 768, 992, 1200, 1440]

export const mediaQueries = breakpoints.map(bp => `@media (min-width: ${bp}px)`)
export const ieMediaQuery = `@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)`
export const edgeMediaQuery = `@supports (-ms-ime-align:auto)`

export const  visuallyHiddenCss = css`
  position: absolute !important;
  height: 1px; 
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap; /* added line */
`

export const Text = styled.p`
  line-height: 1.5;
  font-size: 16px; // 18px
  font-weight: 300;
  ${mediaQueries[2]} {
    font-size: 18px;
  }

`

export const SectionHeading = styled.h2`
  font-size: 48px;
  font-weight: 300;
  padding-top: 52px;
  padding-bottom: 52px;
  @media (min-width: 480px) {
    font-size: 77px;
  }
`

export const SubHeading = styled.h3`
  font-size: 18px;
  font-weight: 500px;
  color: inherit;
  ${mediaQueries[2]} {
    font-size: 24px;
  }
`

export const FancyLink = styled.a(({backgroundColor = "#ddd"}) => {
  return `
    padding: 12px 24px;
    font-size: 18px;
    color: #FFFFFF;
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;
    // max-width: 200px;
    border-radius: 10px;
    background: ${backgroundColor};
    text-align: center;
    white-space: nowrap;
  `
})

export const Link = styled.a`
  border-bottom: black 1px solid;
  border-bottom-color: inherit;
  text-decoration: none;
  font-weight: 500;
  color: inherit;
`

export const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: ${breakpoints[0]}px;
  ${mediaQueries[2]} {
    max-width: 1440px;
  }
`

const ImageContainer = styled.div(({ height = "150px", width = "100%", columnPos, ieMaxWidth, ieMaxHeight, iePadding }) => `
  position: relative;  
  height: ${height};
  width: ${width};
  ${ieMediaQuery} {
    -ms-grid-column: ${columnPos};
    max-width: ${ieMaxWidth};
    max-height: ${ieMaxHeight};
    padding: ${iePadding};
  }
  ${edgeMediaQuery} {
    -ms-grid-column: ${columnPos};
    max-width: ${ieMaxWidth};
    max-height: ${ieMaxHeight};
    padding: ${iePadding};
  }
`)

const ContainedImage = styled.img(({fit = "cover"}) => `
  object-fit: ${fit};
  height: 100%;
  width: 100%;
`)

export const Image = ({ height, width, fit, imgSrc, imgAlt, columnPos, ieMaxWidth, ieMaxHeight, iePadding }) => {
  return (
    <ImageContainer
      height={height}
      width={width}
      ieMaxWidth={ieMaxWidth}
      ieMaxHeight={ieMaxHeight}
      iePadding={iePadding}
      columnPos={columnPos}
    >
      <ContainedImage src={imgSrc} fit={fit} alt={imgAlt} />
    </ImageContainer>
  )
}

Image.propTypes = {
  fit: PropTypes.oneOf([ 'cover', 'contain' ]),
  height: PropTypes.string,
  imgAlt: PropTypes.string,
  imgSrc: PropTypes.string,
  width: PropTypes.string,
}

const StyledSection = styled.section(({ backgroundColor = "white", fontColor="#333" }) => {
  return `
    background: ${backgroundColor};
    color: ${fontColor};
    padding: 90px 36px; // 140px
  `
})

export const SmartSection = ({ children, backgroundColor, fontColor, id }) => {
  return (
    <StyledSection backgroundColor={backgroundColor} fontColor={fontColor} id={id}>
      <ContentContainer>
        {children}
      </ContentContainer>
    </StyledSection>
  )
}