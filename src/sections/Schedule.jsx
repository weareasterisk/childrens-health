import React from 'react'
import content from '../content'
import { SectionHeading, mediaQueries, SubHeading, Text, ieMediaQuery, edgeMediaQuery } from '../components/Foundation'
import styled from '@emotion/styled'

const ScheduleItem = styled.div`
  display: grid;
  display: -ms-grid;
  grid-template-columns: 1fr 1fr;
  -ms-grid-columns: 1fr 1fr;
`

const LeftText = styled(Text)`
  ${ieMediaQuery} {
    -ms-grid-column: 1;
  }
  ${edgeMediaQuery} {
    -ms-grid-column: 1;
  }
`

const RightText = styled(Text)`
  ${ieMediaQuery} {
    -ms-grid-column: 2;
  }
  ${edgeMediaQuery} {
    -ms-grid-column: 2;
  }
`

const saturdaySchedule = content.saturdaySchedule.map((event, i) => (
  <ScheduleItem key={`satevent#${i}`}>
    <LeftText>{event.time}</LeftText>
    <RightText>{event.details}</RightText>
  </ScheduleItem>
))

const sundaySchedule = content.sundaySchedule.map((event, i) => (
  <ScheduleItem key={`sunevent#${i}`}>
    <LeftText>{event.time}</LeftText>
    <RightText>{event.details}</RightText>
  </ScheduleItem>
))

const DaySchedule = styled.div(({ columnPos }) => {
  return `
    display: grid;
    grid-gap: 20px;
    padding: 20px;
    ${mediaQueries[2]} {
      padding: 0;
    }
    ${ieMediaQuery} {
      -ms-grid-column: ${columnPos};
      > * {
        margin-bottom: 16px;
      }
    }
    ${edgeMediaQuery} {
      -ms-grid-column: ${columnPos};
      > * {
        margin-bottom: 16px;
      }
    }
  `
})

const Schedules = styled.div`
  display: grid;
  display: -ms-grid;
  ${mediaQueries[2]} {
    grid-template-columns: 1fr 1fr;
    -ms-grid-columns: 1fr 1fr;
  }
  ${ieMediaQuery} {
    display: block;
  }
  ${edgeMediaQuery} {
    display: block;
  }
`

export const Schedule = () => {
  return (
    <>
      <SectionHeading>
        Schedule
      </SectionHeading>
      <Schedules>
        <Text>Coming Soon</Text>
        {/* <DaySchedule columnPos="1">
          <SubHeading>Saturday</SubHeading>
          {saturdaySchedule}
        </DaySchedule>
        <DaySchedule columnPos="2">
          <SubHeading>Sunday</SubHeading>
          {sundaySchedule}
        </DaySchedule> */}
      </Schedules>
    </>
    )
  }
  
  