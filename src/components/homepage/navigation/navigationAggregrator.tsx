import React from "react"

import NavigationItem from "./navigationItem"

const Navigation: React.FC = () => {
  return (
    <React.Fragment>
      <div className="flex h-3 bg-red fixed top-0 left-0 w-full justify-end items-center text-white z-50">
        <NavigationItem link="#about">About</NavigationItem>
        <NavigationItem link="#faq">FAQ</NavigationItem>
        <NavigationItem link="#schedule">Schedule</NavigationItem>
        <NavigationItem link="#sponsors">Sponsors</NavigationItem>
        <NavigationItem link="#contact">Contact</NavigationItem>
      </div>
    </React.Fragment>
  )
}

export default Navigation