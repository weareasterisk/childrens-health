import React from "react";
import ContentWrapper from "../../common/contentWrapper"
import config from "../../../config"
import Button from "../../common/button"
import ShadowedImage from "../../common/shadowedImage"


const Landing: React.FC = () => {
  return (
    <React.Fragment>
      <div className="min-h-screen pt-3">
        <ContentWrapper className="lg:mt-5 mt-3">
          <div className="flex lg:flex-no-wrap flex-wrap justify-between pb-10">
            <div>
              <img className="max-w-26.5" src={config.images.childrens_logo}/>
              <h2 className="text-4xl font-normal pb-2">Hackathon</h2>
              <h2 className="text-4xl font-normal pb-2">March 28-29, 2020 <br/> Mavs Gaming Hub, Dallas</h2>
              <div className="flex justify-between">
                <Button color="#ED2939" text="Apply here!" link="https://astr.sk/childrens-apply"/>
                <Button color="#62B4C5" text="Volunteering" link="https://astr.sk/childrens-volunteer"/>
                <Button color="#9C8DC3" text="Mentoring" link="https://astr.sk/childrens-mentor"/>
              </div>
            </div>
            <div className="max-w-12 w-10"/>
            <div className="w-full h-auto relative">
              <div className="w-full border-yellow border-10 absolute -top-2 left-2 h-full -z-1"/>
              <img className="w-full border-teal border-10" src={config.images.landing_image.url} alt={config.images.landing_image.alt}/>
            </div>
          </div>
          <div className="hidden xl:flex">
            <div className="relative h-11">
              <div className="absolute top-1 left-1 bg-lightblue h-full w-full -z-1"/>
              <ShadowedImage 
                className="h-auto w-16 inline mr-1"
                src={config.images.child_dog.url} alt={config.images.child_dog.alt}
              />
              <ShadowedImage 
                className="h-auto w-16 inline mr-1"
                src={config.images.medical_equipment.url} alt={config.images.medical_equipment.alt}
              />
              <ShadowedImage 
                className="h-auto w-16 inline mr-1"
                src={config.images.cot_child_observed.url} alt={config.images.cot_child_observed.alt}
              />
              <ShadowedImage 
                className="h-auto w-16 inline"
                src={config.images.microscope_doctor.url} alt={config.images.microscope_doctor.alt}
              />
            </div>
          </div>
        </ContentWrapper>
      </div>
    </React.Fragment>
  )
}

export default Landing
