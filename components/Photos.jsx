import styled from "styled-components";
import Image from 'next/image'
import { useEffect, useState } from "react";

import Quadrado01Mobile from '../public/components/Gallery/quadrado01-mobile.webp'
import Quadrado02Mobile from '../public/components/Gallery/quadrado02-mobile.webp'
import Retangulo01Mobile from '../public/components/Gallery/retangulo01-mobile.webp'
import Retangulo02Mobile from '../public/components/Gallery/retangulo01-mobile.webp'

import Quadrado01desktop from '../public/components/Gallery/quadrado01-desktop.webp'
import Quadrado02desktop from '../public/components/Gallery/quadrado02-desktop.webp'
import Retangulo01desktop from '../public/components/Gallery/retangulo01-desktop.webp'
import Retangulo02desktop from '../public/components/Gallery/retangulo01-desktop.webp'

const Container = styled.div`
  width: 100%;

  margin-bottom: 4rem;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 10px;

  img:hover {
    border-radius: 20px;
    transform: scale(1.1);
    transition: all 0.3s;
  }

  @media (min-width:769px) {
    max-width: 1000px;
    flex-direction: row;
  }
`

const ContainerQuadrado = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;

  @media (min-width:769px) {
    flex-direction: column;
  }
`

export default function Photos() {

  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })
  })

  return (
    <Container>
      <ContainerQuadrado>
        <Image src={width < 768 ? Quadrado01Mobile : Quadrado01desktop} alt="Tatuagem"/>
        <Image src={width < 768 ? Quadrado02Mobile : Quadrado02desktop} alt="Tatuagem"/>
      </ContainerQuadrado>
      <Image src={width < 768 ? Retangulo01Mobile : Retangulo01desktop} alt="Tatuagem"/>
      <ContainerQuadrado>
      <Image src={width < 768 ? Quadrado01Mobile : Quadrado01desktop} alt="Tatuagem"/>
        <Image src={width < 768 ? Quadrado02Mobile : Quadrado02desktop} alt="Tatuagem"/>
      </ContainerQuadrado>
      <Image src={width < 768 ? Retangulo02Mobile : Retangulo02desktop} alt="Tatuagem"/>
    </Container>
  )
}