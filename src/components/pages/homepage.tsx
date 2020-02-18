import React from "react"

import Landing from "../homepage/landing/landingAggregrator"

export default class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section id="landing">
          <Landing/>
        </section>
      </React.Fragment>
    )
  }
}