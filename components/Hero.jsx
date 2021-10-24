import styled from "styled-components";

import Content from "./Content";
import Navbar from './Navbar'


import Background from '../public/components/Home/bg-home-desktop.webp'

const Container = styled.section(() => `
  min-height: 100vh;
  width: 100%;
  position: relative;
  background: url(${Background.src}) 75% center no-repeat;
  background-size: cover;
`)


const Shadow = styled.div`
  position: absolute;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0.70) 80%, rgba(0, 0, 0, 1) 100%);
  z-index: 1;
`

export default function Hero() {

  return (
    <Container id="inicio">
      <Shadow />
      <Navbar />
      <Content />
    </Container>
  )
}