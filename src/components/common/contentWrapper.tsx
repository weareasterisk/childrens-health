import React from "react"
import {Children} from "../../types/props"

interface IContentWrapper {
  className?: string,
  children?: Children
}

const ContentWrapper: React.FC<IContentWrapper> = ({className, children}) => {
  return (
    <div className={`${className}`}>
      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default ContentWrapper