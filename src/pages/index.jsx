import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Alexander Jacks.
        </BigTitle>
        <Subtitle>I enjoy building hybrid app / websites (Progressive Web Apps) for small businesses and nonprofits.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Fight The Ban"
            link="https://www.fighttheban.org/"
            bg="linear-gradient(to bottom right, #D4145A 0%, #FBB03B 100%)"
          >
            Nonprofit promotional site built as a volunteer effort with Gatsby-- it's a smart way to build static React apps that load fast and look and feel like mobile experiences. Go ahead and add this website to your Home Screen! (Gatsby framework)
          </ProjectCard>
          <ProjectCard
            title="Colors of Crypto"
            link="https://colors-crypto.firebaseapp.com/"
            bg="linear-gradient(to bottom right, #662D8C 0%, #ED1E79 100%)"
          >
            Listing of the current 100 most valuable crypto-currencies, according to 'real money' investment-- updates via API every 5 minutes. I built this React app for personal use, when I was hobby speculating in crypto markets in early 2018. A quick way to slice through the hundreds of coin and altcoin markets. (Create React App platform)
          </ProjectCard>
          <ProjectCard
            title="Blackwood Housekeeping"
            link="https://www.cinderellabychoice.com/"
            bg="linear-gradient(to bottom left, #D585FF 0%, #004488 100%)"
          >
            Example of a business site built in the Weebly CMS. Responsive design and custom graphics created with Sketch. Plan to embed business tools like text scheduling and booking on the site itself. (Weebly platform)
          </ProjectCard>
          <ProjectCard
            title="How To Crypto"
            link="https://how-to-crypto.herokuapp.com/"
            bg="linear-gradient(to bottom right, #009245 0%, #33CC33 100%)"
          >
            My first tutorial site, also an exploration of the impressive MDBootstrap library. I planned out the required steps to do stuff with crypto-currency, then used FontAwesome and screencaps to organize the information. (Angular.io framework)
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About:</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            Web developer building custom apps. Working on cloud and PWA skills in 2019. Gatsby/React, JavaScript, Python, AWS. Currently Portland, Oregon, USA.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Why do I love building software in the cloud? Because it's fun to wield so much power! My background in network management helps me appreciate the serverless, elastic world that's emerging-- my natural entrepreneur spirit keeps me restless to build faster and smarter, and to keep leveraging the newest technologies.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Reach out:</Title>
          <ContactText>
            <a href="mailto:alexdjacks@gmail.com">Fire off an email</a> or find me on{' '}
            <a href="https://www.linkedin.com/in/alexander-jacks/">LinkedIn</a> &{' '}
            <a href="https://www.instagram.com/a.d.jacks/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          <a href="https://github.com/alexanderjacks/folio">Source Code</a>. Crafted by{' '}
          <a href="https://www.alexanderjacks.info/">AlexJacksApps</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
