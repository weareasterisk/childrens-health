import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { css, Global } from '@emotion/core'
import { FaqItem } from "./components/FaqItem"
import content from "./content"
import { ContactSection } from './sections/Footer'
import { BetweenSponsorsAndContact } from './sections/BetweenSponsorsAndContact'
import { Sponsors } from './sections/Sponsors'
import { Schedule } from './sections/Schedule'
import { BetweenLandingAndAbout } from './sections/BetweenLandingAndAbout'
import { About } from './sections/About'
import { Landing } from './sections/Landing'
import { SectionHeading, SmartSection, ContentContainer, breakpoints, mediaQueries } from './components/Foundation'
import { Faq } from './sections/Faq'
import styled from '@emotion/styled'
import Drawer from 'rc-drawer'


const NavLink = styled.a(({ marginRight = "48px" }) => {
  return `
    font-size: 18px;
    font-weight: 500;
    color: white;
    text-decoration: none;
    display: block;
    width: fit-content;
    margin-right: ${marginRight};
  `
})

  const Nav = styled.nav`
    grid-gap: 48px;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: ${breakpoints[0]}px;
    display: none;
    ${mediaQueries[2]} {
      max-width: 1440px;
      display: flex;
    }
  `

  const Header = styled.header`
    height: 70px;
    background: #ED2939;
    color: white;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 998;
  `

  const NavMobileMenuButton = styled.button`
    border: none;
    background: none;
    color: white;
    height: 70px;
    width: 70px;
    font-size: 32px;
    cursor: pointer;
  `

  const NavMobile = styled.div`
    display: flex;
    justify-content: flex-end;
    ${mediaQueries[2]} {
      display: none;
    }
  `

  const NavMobileMenu = styled.div`
    position: fixed;
    top: 70px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    z-index: 999;
    background: #ED2939;
    display: grid;
    text-align: center;
    justify-content: center;
    align-content: flex-start;
    > a {
      width: 100vw;
      padding: 24px;
    }
  `

const Entrypoint = () => {

  const styles = {
    global: css`
      @import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i&display=swap');
      @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css');
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
      }
    `,
    root: css`
      // display: grid;
      // grid-template-rows: 70px auto;
      overflow: hidden;
      margin-top: 70px;
    `,
    main: css`
      overflow: 
    `
  }

  const [ navMenuOpen, setNavMobileMenuOpen ] = useState(false);

  const toggleNav = () => {
    setNavMobileMenuOpen(!navMenuOpen)
  }

  return (
    <>
    <Global styles={styles.global} />
    {
      navMenuOpen && (
        <NavMobileMenu>
          <NavLink marginRight="0px" href="#about" onClick={toggleNav}>About</NavLink>
          <NavLink marginRight="0px" href="#faq" onClick={toggleNav}>FAQ</NavLink>
          <NavLink marginRight="0px" href="#schedule" onClick={toggleNav}>Schedule</NavLink>
          <NavLink marginRight="0px" href="#sponsors" onClick={toggleNav}>Sponsors</NavLink>
          <NavLink marginRight="0px" href="#contact" onClick={toggleNav}>Contact</NavLink>
        </NavMobileMenu>
      )
    }
      <div css={styles.root}>
        <Header>
          <NavMobile>
            <NavMobileMenuButton onClick={toggleNav}>
              <i className={navMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </NavMobileMenuButton>
          </NavMobile>
          <Nav>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#schedule">Schedule</NavLink>
            <NavLink href="#sponsors">Sponsors</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </Nav>
        </Header>
        <SmartSection id="landing">
          <Landing />
        </SmartSection>
        <SmartSection>
          <BetweenLandingAndAbout />
        </SmartSection>
        <SmartSection id="about">
          <About />
        </SmartSection>
        <SmartSection backgroundColor="#62B4C5" fontColor="white" id="faq">
          <Faq />
        </SmartSection>
        <SmartSection backgroundColor="#004A97" fontColor="white" id="schedule">
          <Schedule />
        </SmartSection>
        <SmartSection id="sponsors">
          <Sponsors />
        </SmartSection>
        <SmartSection>
          <BetweenSponsorsAndContact />
        </SmartSection>
        <SmartSection id="contact">
          <ContactSection />
        </SmartSection>
      </div>
    </>
  )
}

ReactDOM.render(<Entrypoint />, document.getElementById("root"))