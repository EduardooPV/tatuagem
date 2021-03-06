import styled from "styled-components";
import Image from 'next/image'
import { useEffect, useState } from "react";

import Allef from '../public/components/About/allef.webp'
import AllefDesktop from '../public/components/About/allef-desktop.webp'
import Button from "./Button";

import BackgroundPontos from '../public/components/bg-pontos.webp'

const Container = styled.section(() => `
  min-height: 100vh;
  width: 100%;

  background: url(${BackgroundPontos.src}) center center no-repeat;
  background-size: cover;
  background-color: #000;

  padding: 0 5vw;
  box-sizing: border-box;

  @media(min-width: 769px) {
    min-height: auto;

    padding: 20vh 10vw;
  }
`)

const ContainerContent = styled.div`
  max-width: 1000px;
  
  margin: auto;
  padding: 40px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(min-width:  769px) {
    display: grid;
    grid-template-columns: auto 40%;
    align-items: flex-start;
    gap: 2rem;
  }
`

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 769px) {
    height: 100%;
    align-items: flex-start;
    justify-content: flex-start;
  }
`

const Title = styled.h3`
  margin-top: 2rem;

  font-size: 2.2rem;
  line-height: 50px;
  font-weight: bold;
  color: #FFF;

  @media(min-width: 769px) {
    font-size: 3rem;
    margin: 0;
  }
`

const Description = styled.p`
  margin: 2rem 0;

  font-size: 1rem;
  line-height: 24px;
  text-align: center;

  color: #FFF;

  @media(min-width: 769px) {
    font-size: 1.2rem;
    text-align: start;
  }
`

const Destaque = styled.span` 
  color: var(--red);
`

export default function About() {

  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })
  })

  return (
    <Container id="about">
      <ContainerContent>
        <Image src={width < 768 ? Allef : AllefDesktop} alt="Imagem do tatuador"/>

        <ContainerText>
          <Title>
            Gabriel Lopes
          </Title>

          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <Destaque>Dapibus vehicula</Destaque> egestas nisl risus et, cras nec. Nulla erat fringilla viverra nisl mauris pellentesque facilisi nibh.<Destaque> Sit augue cursus imperdiet nulla.</Destaque> Etiam amet duis aliquam, a, vitae.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <Destaque>Dapibus vehicula</Destaque> egestas nisl risus et, cras nec. Nulla erat fringilla viverra nisl mauris pellentesque facilisi nibh.<Destaque> Sit augue cursus imperdiet nulla.</Destaque> Etiam amet duis aliquam, a, vitae.
            adipiscing elit. <Destaque>Dapibus vehicula</Destaque> egestas nisl risus et, cras nec.  adipiscing elit. <Destaque>Dapibus vehicula</Destaque> egestas nisl risus et, cras nec. N
          </Description>

          <Button
            content="Entre em contato comigo"
            sessao="#footer"
          />
        </ContainerText>
      </ContainerContent>
    </Container>
  )
}