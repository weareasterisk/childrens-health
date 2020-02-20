import React from "react"

interface IShadowedImage {
  className: string
  src: string
  alt?: string
}

const ShadowedImage: React.FC<IShadowedImage> = (props) => {
  return (
    <React.Fragment>
      <img className={props.className} src={props.src} alt={props.alt}/>
    </React.Fragment>
  )
}

export default ShadowedImage