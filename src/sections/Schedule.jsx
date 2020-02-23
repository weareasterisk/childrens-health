import React from 'react'
import content from '../content'
import { SectionHeading, mediaQueries, SubHeading, Text } from '../components/Foundation'
import styled from '@emotion/styled'

const ScheduleItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const saturdaySchedule = content.saturdaySchedule.map((event, i) => (
  <ScheduleItem key={`satevent#${i}`}>
    <Text>{event.time}</Text>
    <Text>{event.details}</Text>
  </ScheduleItem>
))

const sundaySchedule = content.sundaySchedule.map((event, i) => (
  <ScheduleItem key={`sunevent#${i}`}>
    <Text>{event.time}</Text>
    <Text>{event.details}</Text>
  </ScheduleItem>
))

const DaySchedule = styled.div`
  display: grid;
  grid-gap: 20px;
  padding: 20px;
  ${mediaQueries[2]} {
    padding: 0;
  }
`

const Schedules = styled.div`
  display: grid;
  ${mediaQueries[2]} {
    grid-template-columns: 1fr 1fr;
  }
`

export const Schedule = () => {
  return (
    <>
      <SectionHeading>
        Schedule
      </SectionHeading>
      <Schedules>
        <DaySchedule>
          <SubHeading>Saturday</SubHeading>
          {saturdaySchedule}
        </DaySchedule>
        <DaySchedule>
          <SubHeading>Sunday</SubHeading>
          {sundaySchedule}
        </DaySchedule>
      </Schedules>
    </>
    )
  }
  
  