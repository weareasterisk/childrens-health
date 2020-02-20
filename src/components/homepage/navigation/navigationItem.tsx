import React from "react"
import {Link} from "react-router-dom"

export interface NavigationItemProps {
  children?: string,
  link: string
}

const NavigationItem: React.FC<NavigationItemProps> = (props) => {
  return (
    <React.Fragment>
      <div className="w-11 text-center">
        <h2 className="text-xl font-bold capitalize leading-none w-full">
          <a href={props.link} className="hover:text-white hover:underline leading-none">
            {props.children}
          </a>
        </h2>
      </div>
    </React.Fragment>
  )
}

export default NavigationItem