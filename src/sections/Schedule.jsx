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
const fridaySchedule = content.fridaySchedule.map((event, i) => (
  <ScheduleItem key={`frievent#${i}`}>
    <LeftText>{event.time}</LeftText>
    <RightText>{event.details}</RightText>
  </ScheduleItem>
))

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

const ExtraScheduleDetails = styled.p`
  margin-bottom: 52px;

  ${mediaQueries[2]} {
    max-width: 50%;
  }
`

export const Schedule = () => {
  return (
    <>
      <SectionHeading>
        Schedule
        <SubHeading>The following times are in Central Daylight Time</SubHeading>
      </SectionHeading>
      <ExtraScheduleDetails>
        {content.extraScheduleDetails}
      </ExtraScheduleDetails>
      <Schedules>
        <DaySchedule columnPos="1">
          <SubHeading>Friday, July 16<sup>th</sup></SubHeading>
          {fridaySchedule}
        </DaySchedule>
        <DaySchedule columnPos="2">
          <SubHeading>Saturday, July 17<sup>th</sup></SubHeading>
          {saturdaySchedule}
        </DaySchedule>
        <DaySchedule columnPos="3">
          <SubHeading>Sunday, July 18<sup>th</sup></SubHeading>
          {sundaySchedule}
        </DaySchedule>
      </Schedules>
    </>
    )
  }
  
  