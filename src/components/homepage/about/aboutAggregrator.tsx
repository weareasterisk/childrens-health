import React from "react"
import ContentWrapper from "../../common/contentWrapper"
import config from "../../../config"

const About: React.FC = () => {
  return (
    <React.Fragment>
      <ContentWrapper>
        <h2 className="text-6xl font-normal mb-4.5">About</h2>
        <div className="flex justify-between">
          <div className="min-w-26.25 h-31.25 bg-yellow relative">
            <img className="absolute -top-1 -left-1" src={config.images.about_image.url} alt={config.images.about_image.alt}/>
          </div>
          <div className="max-w-12 w-10"/>
          <div className="justify-left">
            <p ><strong>Help us innovate the next generation of patient care through technology.</strong></p>
            <p>As one of the largest healthcare systems in the United States dedicated solely to the care
              of children and adolescents under the age of 21, Childrens Health is seeking your help
              to continue innovating the next generation of patient care through hosting a hackathon designed
              to prototype and test solutions to some of the biggest problems in pediatric healthcare.
            </p>
            <p>
            Centering around the themes of access to care and improving patient throughput, Childrens
            is looking for your help! We invite all interested to apply for our hackathon and learn
            from our doctors, patient advocates, and other staff members about some of the challenges
            and problems encountered through our experience serving patients. Help us build prototypes
            and new ideas to solve some of the biggest problems we encounter during our quest to provide
            the best possible healthcare for our community.
            </p>
            <p>
            We look forward to welcoming you to the Mavs Gaming Hub in Dallas, TX on March 28th and 29th
            to help us innovate the future of healthcare for those who desperately need it - free food, snacks,
            drinks, and an innovative environment will be provided to help you come up with the ideas that
            could change our approach to solving some of the biggest problems in pediatric care!
            </p>
          </div>
        </div>
      </ContentWrapper>
    </React.Fragment>
  )
}

export default About;
