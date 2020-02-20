import React from "react"
import {Link} from "react-router-dom"

interface ButtonProps {
  link: string,
  color: string,
  text: string
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <a href={props.link} style={{backgroundColor: props.color}} className="px-1 py-.5 text-white text-lg rounded-xl">{props.text}</a>
  )
}

export default Button