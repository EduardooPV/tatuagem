import styled from "styled-components";

import Content from "./Content";
import Navbar from './Navbar'


import Background from '../public/components/bg-home-desktop.png'

const Container = styled.section(() => `
  min-height: 100vh;
  width: 100%;
  position: relative;
  background: url(${Background.src}) center center no-repeat;
  background-size: cover;
`)


const Shadow = styled.div`
  position: absolute;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 18.06%, rgba(0, 0, 0, 0.35) 49.24%, rgba(0, 0, 0, 0.58) 87.01%, rgba(0, 0, 0, 0.87) 98.38%);
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