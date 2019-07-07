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
          HELLO, <br /> I'M ALEXANDER JACKS.
        </BigTitle>
        <Subtitle>I enjoy building hybrid app / websites (Progressive Web Apps) for small businesses and nonprofits.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Work Examples</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="storefront for commercial API"
            link="https://jacksstorefrontdemo.azurewebsites.net/Home/Products"
            bg="linear-gradient(to top left, navy 25%, green 100%)"
          >
            Dot.net retail site built around client (Marijuana Software) API and deployed on Azure. Dynamic and sortable inventory logic written in jQuery; populates from a commercial API with an AJAX call.
          </ProjectCard>
          <ProjectCard
            title="custom dashboard from open data"
            link="https://colors-crypto.firebaseapp.com/"
            bg="linear-gradient(to bottom right, #990000 40%, deepskyblue 100%)"
          >
            Colors of Crypto is a custom project built around an open resource. It lists the current 100 most valuable cryptocurrencies, according to 'real money' investment, and updates every 5 minutes. Hosted on Google Cloud (Firebase), operating under Fair Use copyright law.
          </ProjectCard>
          <ProjectCard
            title="Progressive App (Hybrid Website)"
            link="https://www.fighttheban.org/"
            bg="linear-gradient(to bottom right, black 0%, #191970 100%)"
          >
            A modern website can function like an app store app. Here's an example of a progressive web app I built for a client-- it's a website that can install to your homescreen like an app, and it downloads enough content to function even when offline. Hosted with the Netlify serverless platform, built in Gatsby. 
          </ProjectCard>
          <ProjectCard
            title="Custom WordPress"
            link="http://minorityvets.com/"
            bg="linear-gradient(to bottom right, #f15d4e 10%, #04476d 100%)"
          >
            Upgrade to existing nonprofit homepage (Minority Veterans of America). I conducted a cost-saving migration to AWS Lightsail and then customized the site styling to meet client's vision.
          </ProjectCard>
          <ProjectCard
            title="Tutorial Site"
            link="https://how-to-crypto.herokuapp.com/"
            bg="linear-gradient(to bottom right, navy 10%, darkorange 100%)"
          >
            How To Crypto is set of guides built with an industry favorite Material Design library (MDBootstrap). I planned out the required steps to acquire and exchange cryptocurrency, then used FontAwesome and screencaps to organize the information. Built with the Angular framework and hosted for free on Heroku.
          </ProjectCard>
          <ProjectCard
            title="WIP index app via web scraping"
            link="https://www.stardewdex.com/"
            bg="linear-gradient(to bottom right, forestgreen 50%, wheat 100%)"
          >
            A work-in-progress side project (React, AWS serverless), built from data scraped from a wiki (Python scripts). 
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About:</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            Freelance web developer building custom apps. Focusing on cloud and PWAs. Portland, Oregon, USA in 2019.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Why do I love building software in the cloud? Because it's fun to wield so much power! My background in network management helps me appreciate the serverless, elastic world that's emerging-- my natural entrepreneur spirit keeps me restless to build faster and smarter, and to keep leveraging the newest technologies like serverless/lambda and GraphQL (the JAMstack architecture).
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Reach out</Title>
          <ContactText>
            <p>
              Do you need a website upgrade? I'd love to discuss some awesome options with you.
            </p>
            <p>
              Do you have web, cloud, or data tech work that needs a jack-of-many-trades?
            </p>
            <a href="mailto:alexdjacks@gmail.com">Fire off an email</a> or find me on{' '}
            <a href="https://www.linkedin.com/in/alexander-jacks/">LinkedIn</a> &{' '}
            <a href="https://www.instagram.com/a.d.jacks/">Instagram</a>.
            <p>
              Here's a <a href="https://s3.amazonaws.com/bux4jax/_resume_Alexander_Jacks.pdf">current resume</a>.
            </p>
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
