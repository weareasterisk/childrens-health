import React from 'react'
import { Link } from './components/Foundation'
import images from "./assets/*.png"
import jpg from "./assets/*.jpg"

export default {
  about: {
    heading: <>
      Help us innovate the next generation of patient care through technology
    </>,
    body: [
      <>
        The Virtual Innov8 4 Kids Challenge is an event where teams rapidly create 
        innovative solutions to common pediatric challenges while competing for prizes.
        Teams consist of high school / college students and professionals. Children’s Health
        invites you to join our first virtual challenge, partnering to advocate for innovation
        at Dallas-Fort Worth.
      </>,
      <>
        The challenge is from <b><Link href="#schedule">July 16<sup>th</sup> – 18<sup>th</sup></Link></b>, with optional mini-challenges starting on <b><Link href="#schedule">June 28<sup>th</sup></Link></b>, leading up to the main event.
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
        First place wins $1,000, with additional prizes for 2nd, 3rd, and for <u>optional</u> "mini-challenge"
        events. Prizes will also be offered for the best high school team and the best college team.
      </>
    },
    {
      question: <>
        Who can participate?
      </>,
      answer: <>
        The event is open to anyone in 9th grade or above (high school or college) living in the United States and 
        not employed or otherwise affiliated with Children’s Health. 
      </>
    },
    {
      question: <>
        How can I get involved if I’m interested in mentoring and judging?
      </>,
      answer: <>
        Mentoring and judging are hugely important parts to this event. 
        We look forward to having you there! Simply fill out 
        the <Link href="https://architech-inc.typeform.com/to/Uyu5Ipsu">form here</Link> and
        we’ll be in touch.
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
        Shoot us an email at <Link href="mailto:hello@weareasterisk.com?subject=Hello! I have a few questions about the Children's Health Challenge...">hello@weareasterisk.com</Link> and we'll be happy to help you!
      </>
    },
  ],
  fridaySchedule: [
    {
      time: "7:00 - 7:30 PM",
      details: "Opening Ceremony"
    },
    {
      time: "8:00 - 9:00 PM",
      details: "Workshop - Howie Gurr (VR)"
    },
    {
      time: "9:00 - 10:00 PM",
      details: "Team Formation & Ideation"
    },
    {
      time: "10:00 - 11:00 PM",
      details: "Workshop - Human Centered Design"
    }
  ],
  saturdaySchedule: [
    {
      details: "Rise and Shine: Coffee / Breakfast",
      time: "8:00 - 9:00 AM"
    },
    {
      details: "Workshop - Pamela Guillory",
      time: "9:00 - 10:00 AM",
    },
    {
      details: "Mentorship Office Hours",
      time: "10:00 - 11:00 AM"
    },
    {
      time: "12:00 - 1:00 PM",
      details: "Workshop - Unity XR",
    },
    {
      details: "Workshop",
      time: "1:00 - 2:00 PM"
    },
    {
      details: "Workshop - BMT HCD/Gamification",
      time: "2:00 - 3:00 PM"
    },
    {
      time: "3:00 - 4:00 PM",
      details: "Workshop - Mixed Reality",
    },
    {
      time: "4:00 - 5:00 PM",
      details: "Mentorship Office Hours",
    },
    {
      time: "6:00 - 8:00 PM",
      details: "Asterisk Mukbang",
    },
    {
      details: "Fun Activity",
      time: "8:00 - 9:00 PM"
    },
    {
      details: "Hot Bytes",
      time: "9:00 - 10:00 PM"
    },
    {
      details: "Mentorship Office Hours",
      time: "10:00 - 11:00 PM"
    },
    {
      details: "Game Time (Jackbox / Among Us)",
      time: "11:00 PM - 12:00 AM"
    },
    
  ],
  sundaySchedule: [
    {
      time: "12:00 - 1:00 AM",
      details: "Bob Ross MS Paint Party",
    },
    {
      time: "8:00 - 8:30 AM",
      details: "Rise & Shine"
    },
    {
      time: "8:30 - 9:00 AM",
      details: "Workshop - How to Submit"
    },
    {
      time: "9:00 - 10:00 AM",
      details: "Mentorship Office Hours"
    },
    {
      time: "10:00 AM",
      details: "⚠️🚨~Submission Deadline~🚨⚠️"
    },
    {
      time: "10:30 AM - 12:30 PM",
      details: "Judging"
    },
    {
      time: "12:30 - 1:00 PM",
      details: "Failure Party"
    },
    {
      time: "1:00 - 2:00 PM",
      details: "Final Presentations"
    },
    {
      time: "2:00 - 2:30 PM",
      details: "Mini-Event Prize Ceremony"
    },
    {
      time: "2:30 - 3:00 PM",
      details: "Closing Ceremony"
    },
    
  ],
  extraScheduleDetails: 
    <>
      <i><b>Mini-Challenge Events: June 28<sup>th</sup> &mdash; July 15<sup>th</sup></b></i><br />
      <u>Optional Challenges</u> leading up to the main event <br />
      Avg 8 hours each*<br/>
      <br />
      <i><b>Main Event: July 16<sup>th</sup> &mdash; July 18<sup>th</sup></b></i><br />
      Minimum 16 hour time commitment*<br />
      <br />
      *There is <u>no limit</u> on how much time teams can spend on the submission.  Some teams choose to work late nights to polish and refine the submission.  We can provide documentation recognizing all hours spent on your idea, to count towards student volunteer requirements.
    </>,
  sponsors: [
    {
      imageSrc: images["Microsoft-logo_rgb_c-gray (1)"],
      sponsorName: "Microsoft",
    },
    {
      imageSrc: jpg['GPARD_Logo_PROCESS (1)'],
      sponsorName: "Grapevine Parks & Rec",
    },
    {
      imageSrc: images["image001"],
      sponsorName: "Persistent"
    },
    {
      imageSrc: images["salesforce-logo (1)"],
      sponsorName: "Salesforce"
    },
    {
      imageSrc: images["5daf0f8f2b639693bfe5d974_Allata_Color (1)"],
      sponsorName: "Allata"
    }
  ]
}
