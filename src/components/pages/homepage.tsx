import React from "react"

import Landing from "../homepage/landing/landingAggregrator"
import Navigation from "../homepage/navigation/navigationAggregrator"
import About from "../homepage/about/aboutAggregrator"

export default class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <Navigation/>
        </header>
        <section id="landing" className="mb-8">
          <Landing/>
        </section>
        <section id="about" className="pt-6">
          <About/>
        </section>
      </React.Fragment>
    )
  }
}