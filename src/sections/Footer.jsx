import React from 'react'
import css from '@emotion/css'
import asteriskLogo from "../assets/asterisk-logo.png"
import { Link, SubHeading, Text, mediaQueries } from '../components/Foundation'
import styled from '@emotion/styled'


const HelloContainer = styled.div`
  display: flex;
  align-items: center;
`

const HelloText = styled.h2`
  font-size: 24px;
  margin-left: 17px;
  ${mediaQueries[2]} {
    font-size: 48px;
    margin-left: 32px;
  }
`

const LinkContainer = styled.div`
  margin-top: 32px;
  
`

const Column = styled.div`
  > * {
    margin-bottom: 16px;
  }

  
`

const ColumnContainer = styled.div`
  display: grid;
  grid-gap: 32px;
  ${mediaQueries[2]} {
    grid-template-columns: 1fr 1fr;
    grid-gap: 128px;
  }
`

const ContactContainer = styled.div`
  display: grid;
  grid-gap: 25px;
  
  ${mediaQueries[2]} {
    grid-gap: 60px;
  }
`

const ContactFooter = styled.div`
  margin-top: 180px;
  ${mediaQueries[2]} {
    margin-top: 300px;
  }
`

const LinksRow = styled.div`
  display: flex;
  > * {
    margin-right: 8px;
  }
`

const SocialLink = styled(Link)`
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-content: center;
  justify-content: flex-start;
  width: content-fit;
  margin-bottom: 4px;
  border-bottom: none;
  cursor: pointer;
  > i {
    font-size: 24px;
  }
  > * {
    margin-right: 8px;
  }

  > span {
    margin-top: 3px;
  }
  
`


export const ContactSection = () => {
  return (
    <ContactContainer>
      <HelloContainer>
        <div css={css`
          height: 47px;
          width: 40px;
          display: flex;

          ${mediaQueries[2]} {
            height: 75px;
            width: 64px;
          }
          > img {
            height: 100%;
            width: 100%;
            object-fit: contain;
          }
        `}>
          <img src={asteriskLogo} alt="Asterisk Logo"/>
        </div>
        <HelloText>Hello!</HelloText>
      </HelloContainer>
      <ColumnContainer>
        <Column>
          <SubHeading>Let's connect</SubHeading>
          <Text>
            We'd love to hear from you! We are a friendly bunch and open to discussing new ideas,
            improvements, or partnerships.
          </Text>
          <LinkContainer>
            <Link href="mailto:hello@weareasterisk.com?subject=Hello!">
              hello@weareasterisk.com
            </Link>
          </LinkContainer>
        </Column>
        <Column>
          <SubHeading>Follow us</SubHeading>
          <Text>
            Stay in the loop and keep track of the cool things we're trying to do.
          </Text>
          <LinkContainer>
            <SocialLink href="https://facebook.com/asteriskevents">
              <i className="fab fa-facebook-square"></i>
              <span>Facebook</span>
            </SocialLink>
            <br />
            <SocialLink href="https://twitter.com/helloasterisk">
              <i className="fab fa-twitter-square"></i>
              <span>Twitter</span>
            </SocialLink>
            <br />
            <SocialLink href="https://instagram.com/helloasterisk">
              <i className="fab fa-instagram-square"></i>
              <span>Instagram</span>
            </SocialLink>
          </LinkContainer>
        </Column>
      </ColumnContainer>
      <ContactFooter>
        <Text>
          © 2020 Asterisk. Made with ❤️ in Dallas.
        </Text>
        <LinksRow>
          <Link href="https://weareasterisk.com/terms">Terms</Link>
          <Link href="https://weareasterisk.com/privacy">Privacy</Link>
          <Link href="https://weareasterisk.com/sales">Sales</Link>
          <Link href="https://weareasterisk.com/ethics">Ethics</Link>
        </LinksRow>
      </ContactFooter>
    </ContactContainer>
  )
}