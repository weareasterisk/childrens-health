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
        As the eighth-largest pediatric health care provider in the country, Children’s 
        Health has a long-standing commitment to the North Texas community that includes 
        not only high-quality patient care but also advocacy, education and preventative 
        care. As part of our ongoing promise to the community, Children’s Health has 
        created the Children’s Health Care Delivery Lab to seek newer and more innovative 
        ways of providing care to our patients. 
      </>,
      <>
        Centering around the themes of <b>access to care and improving patient throughput</b>, 
        the Care Innovation Delivery Lab is looking for your ideas! We invite all those 
        who are interested to apply for our hackathon and learn from our doctors, 
        patient advocates, and other team members about how we can make life better 
        for children by generating innovative solutions that transform how children 
        receive care.  We want your help building prototypes and creating new ideas that 
        will lead to the next wave of clinical breakthroughs in pediatric care. 
      </>,
      <>
        We look forward to welcoming you to the <Link href="https://g.page/mavsgg?share">
        Mavs Gaming Hub in Dallas, TX</Link> on Saturday, 
        March 28 and Sunday, March 29 to help us improve the future of pediatric health care. 
        Meals, snacks, drinks, and an innovative environment will be provided to help you 
        come up with the ideas needed to problem-solve current challenges within the 
        pediatric health care landscape.
      </>
    ]
  },
  faqs: [
    {
      question: <>
        Where is the event located?
      </>,
      answer: <>
        The event will be held at the <Link href="https://g.page/mavsgg?share">
          Mavs Gaming Hub in Deep Ellum (2909 Taylor St, Dallas, TX 75226)
        </Link>
      </>
    },
    {
      question: <>
        How do I get there?
      </>,
      answer: <>
        Please consider the environment (and the lack of parking in Deep Ellum) and
        use the DART to arrive at the event. We suggest parking at the <Link href="https://goo.gl/maps/oaiSbB17865meQqw5">
          Mockingbird station 
        </Link> if you need somewhere closer to park!
      </>
    },
    {
      question: <>
        What can I win?
      </>,
      answer: <>
        Prizes will be awarded for the best projects, including the Patient Family Prize
        (best solution for patients and families), the Quick Win prize
        (the easiest solution to actually implement), and the
        Technical Achievement prize (the coolest or most impressive technical project).
        You’ll be able to see a full list of prizes on our submission platform.
      </>
    },
    {
      question: <>
        Who can participate?
      </>,
      answer: <>
        The event is open to all who are 18 or older and not employed or otherwise
        affiliated with Children’s Health. 
      </>
    },
    {
      question: <>
        How can I get involved if I’m interested in mentoring or volunteering?
      </>,
      answer: <>
        Mentoring and judging is restricted to Children’s Health staff or affiliates,
        but anyone can volunteer to help out at the event, and we look forward
        to having you there! Simply fill out the <Link href="https://astr.sk/childrens-volunteer">
        form here</Link> and we’ll be in touch.
      </>
    },
    {
      question: <>
        What’s provided at the event?
      </>,
      answer: <>
        Snacks, drinks, meals, and swag will be provided for everyone attending the event.
        In addition, we’ll have some fun games and mini-events to keep things interesting while you work.
      </>
    },
    {
      question: <>
        When is the event?
      </>,
      answer: <>
        The event will take place on Saturday, March 28 from 10 a.m. - 10 p.m. and Sunday, 
        March 29 from 7 a.m .- 4 p.m.  The venue will be closed overnight, but you can keep 
        hacking elsewhere!
      </>
    },
    {
      question: <>
        What should I bring?
      </>,
      answer: <>
        Laptops, chargers, cell phones, and of course passion are helpful. Other useful items include: toiletries, a change of clothes, a pillow, some earplugs, an eye mask, a jacket, and...deodorant.
        <em>
          Knives, firearms, and other dangerous things are not permitted at the event.
        </em>
      </>
    },
    {
      question: <>
        What if I don't have teammates?
      </>,
      answer: <>
        We'll have a scheduled time where people can form teams after the opening ceremony.
        Before then, join <b>find-a-team</b> channel on the slack for this event <Link href="https://astr.sk/childrens-slack">here!</Link>
      </>
    },
    {
      question: <>
        Are we allowed to build on past projects?
      </>,
      answer: <>
        A hackathon is an experience to build something new within a set amount of time.
        Therefore, you cannot work on past projects. However, using your own
        open-source or third party libraries is fine, so long as the project is new.
      </>
    },
    {
      question: <>
        How big are the teams?
      </>,
      answer: <>
        Teams are composed of 2-4 people. We recommend finding teammates with diverse
        skill sets to cover all the bases of a great idea.
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