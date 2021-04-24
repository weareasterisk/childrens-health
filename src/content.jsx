import React from 'react'
import { Link } from './components/Foundation'
import images from "./assets/*.png"

export default {
  about: {
    heading: <>
      Help us innovate the next generation of patient care through technology
    </>,
    body: [
      <>
        Children’s Health System of Texas is proud to launch our first Innov8 4 Kids Virtual Challenge!  
        This is a fun, interactive virtual event where we encourage students and professionals 
        to create technology prototypes that can have an impact on Children's Health.
      </>,
      <>
        The challenge will span <b>3 weeks</b>, leading with a series of mini-challenges and culminating with a <b>3 day virtual hackathon</b>.
      </>,
      <>
        It’s an opportunity to showcase your skills, compete for prizes, and build something that can truly make a difference. 
        Areas of interest include: mobile apps, augmented reality, virtual reality, gamification, to name a few.
      </>
    ]
  },
  faqs: [
    {
      question: <>
        Where is the event located?
      </>,
      answer: <>
        The event will be held virtually.
      </>
    },
    {
      question: <>
        What can I win?
      </>,
      answer: <>
        Prizes will be awarded for the best projects, as well as for mini challenges. 
        You’ll be able to see a full list of prizes on our submission platform.
      </>
    },
    {
      question: <>
        Who can participate?
      </>,
      answer: <>
        The event is open to anyone 13 or older living in the United States and 
        not employed or otherwise affiliated with Children’s Health. 
      </>
    },
    {
      question: <>
        How can I get involved if I’m interested in mentoring and judging?
      </>,
      answer: <>
        Mentoring and judging are hugely important parts to this event. 
        We look forward to having you there! Simply fill out the 
        <Link href="https://architech-inc.typeform.com/to/Uyu5Ipsu">form here</Link> 
        and we’ll be in touch (link to form).
      </>
    },
    {
      question: <>
        Do I need to know how to code?
      </>,
      answer: <>
        Not necessarily! There are many ways you can be a valuable contributor to a team, 
        such as design, business, market analysis, etc. If you have questions feel free to ask in the Discord!
      </>
    },
    {
      question: <>
        What if I don't have teammates?
      </>,
      answer: <>
        If you want to collaborate but don't have any partners yet, fear not! We will be hosting a team 
        building session at the beginning of the event. Along with that you can reach out and form teams through the Discord!
      </>
    },
    {
      question: <>
        How big are the teams?
      </>,
      answer: <>
        Teams are composed of 1-<b>5</b> people. We recommend finding teammates with diverse skill sets to cover all the bases of a great idea.
      </>
    },
    {
      question: <>
        I still have questions...
      </>,
      answer: <>
        Shoot us an email at <Link href="mailto:hello@weareasterisk.com?subject=Hello! I have a few questions about the Children's Health Hackathon...">hello@weareasterisk.com</Link> and we'll be happy to help you!
      </>
    },
  ],
  saturdaySchedule: [
    {
      time: "8:45 - 10:15 AM",
      details: "Breakfast"
    },
    {
      time: "9:00 - 10:15 AM",
      details: "Registration"
    },
    {
      time: "10:00 - 10:30 AM",
      details: "Opening Ceremony"
    },
    {
      time: "10:45 - 11:45 AM",
      details: "Challenge Overview Session"
    },
    {
      time: "12:00 PM",
      details: "Hacking Begins"
    },
    {
      time: "12:30 - 1:30 PM",
      details: "Lunch"
    },
    {
      time: "12:45 - 1:15 PM",
      details: "Team Building Session"
    },
    {
      time: "1:15 - 1:45 PM",
      details: "Ideation Session"
    },
    {
      time: "3:00 - 3:30 PM",
      details: "Workshop"
    },
    {
      time: "4:00 - 4:30 PM",
      details: "Workshop"
    },
    {
      time: "5:00 - 6:00 PM",
      details: "Activity: Free Throw Competition"
    },
    {
      time: "6:00 - 7:30 PM",
      details: "Dinner"
    },
    {
      time: "8:00 - 9:00 PM",
      details: "Activity: Trivia/Kahoot"
    }
  ],
  sundaySchedule: [
    {
      time: "8:00 AM",
      details: "Venue Re-Opens"
    },
    {
      time: "8:00 - 9:30 AM",
      details: "Light Refreshments"
    },
    {
      time: "9:30 - 10:00 AM",
      details: "Pitch Workshop"
    },
    {
      time: "11:00 AM",
      details: "Submissions Due"
    },
    {
      time: "11:15 - 11:45 AM",
      details: "Judges Briefing"
    },
    {
      time: "12:00 PM",
      details: "Hacking Ends"
    },
    {
      time: "11:30 AM - 1:00 PM",
      details: "Brunch"
    },
    {
      time: "12:30 - 1:30 PM",
      details: "Expo (1h for judging)"
    },
    {
      time: "1:15 - 1:45 PM",
      details: "Final Judges Briefing"
    },
    {
      time: "1:45 - 2:15 PM",
      details: "Final Pitch Briefing"
    },
    {
      time: "2:30 - 3:30 PM",
      details: "Final Pitches"
    },
    {
      time: "3:15 - 3:30 PM",
      details: "Closing Ceremony"
    },
    {
      time: "3:30 - 3:45 PM",
      details: "Awards"
    }
  ],
  sponsors: [
    // {
    //   imageSrc: images['childrens-health-logo'],
    //   sponsorName: "Children's Health"
    // },
    // {
    //   imageSrc: images['childrens-health-logo'],
    //   sponsorName: "Children's Health"
    // },
    // {
    //   imageSrc: images['childrens-health-logo'],
    //   sponsorName: "Children's Health"
    // },
    // {
    //   imageSrc: images['childrens-health-logo'],
    //   sponsorName: "Children's Health"
    // },
    // {
    //   imageSrc: images['childrens-health-logo'],
    //   sponsorName: "Children's Health"
    // },
    // {
    //   imageSrc: images['childrens-health-logo'],
    //   sponsorName: "Children's Health"
    // },
    // {
    //   imageSrc: images['childrens-health-logo'],
    //   sponsorName: "Children's Health"
    // },
    // {
    //   imageSrc: images['childrens-health-logo'],
    //   sponsorName: "Children's Health"
    // },
  ]
}