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

import avatar from '../images/cavaness.png'

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
          Hello, <br /> I'm Shelley Cavaness <br /> And I love JavaScript
        </BigTitle>
        <Subtitle>and frontend development. </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Les Crapauds Fous"
            link="https://crapaud-fou.org/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This project was my entry to coding on a team.
          </ProjectCard>
          <ProjectCard
            title="my 1st project manager experience"
            link="http://www.sciencespo.fr/mass-violence-war-massacre-resistance/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            My first collaborative web project in 2007.
          </ProjectCard>
          <ProjectCard
            title="Read my blogs on medium."
            link="https://medium.com/@shelleycavaness"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
          Curious about me? 
          </ProjectCard>
          <ProjectCard
            title="Look at student projects"
            link="https://github.com/shelleycavaness"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Seeing what I have been exploring? or my sandboxes...
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="shelley cavaness" />
          <AboutSub>
          Je veux travailler dans une entreprise avec des projets variés mais je serais ravie de finir un projet. J’aime beaucoup travailler en groupe et
          aime tout particulièrement les échanges avec d’autres cultures. les mots clés à retenir : autonomie- réactivité- professionnalisme
          </AboutSub>
        </AboutHero>
        <AboutDesc>
        Un développeur a la difficile mission d’être un architecte /chef d’orchestre qui va accompagner en ligne son visiteur et son client pour une interaction réussie. Il doit prendre en compte tous les paramètres techniques mais prendre également en compte l’expérience humaine.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:">Hi</a> or find me on other platforms:{' '}
            <a href="https://www.linkedin.com/in/shelleycavaness">LinkedIn</a> &{' '}
            <a href="https://medium.com/@shelleycavaness">Medium</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2020 by Gatsby Starter.{' '}
          <a href="https://github.com/shelleycavaness">Github Repository</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
