import React from 'react'
import css from '@emotion/css'

export const Triangle = ({override = css``}) => {
  const style = css`
    width: 0; 
    height: 0; 
    border-left: 75px solid transparent;
    border-right: 75px solid transparent;
    border-bottom: 120px solid black;
    ${override}
  `
  return <div css={style}></div>  
}

export const Circle = ({ override = css`` }) => {
  const style = css`
    height: 200px;
    width: 200px;
    border-radius: 100%;
    background: #ED2939;
    margin-left: -100px;
    ${override}
  `
  return <div css={style}></div>
}