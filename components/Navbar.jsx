import styled from "styled-components";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Container = styled.header`
  width: 100%;
  height: 60px;

  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  background-color: #252525;

  z-index: 5;

  @media (min-width: 768px) {
    padding: 0 10vw;
  }
`

const ContainerContent = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;

  padding-right: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: auto;

  @media(min-width: 768px) {
    padding: 0;
  }
`

const Logo = styled.div`
  height: 70%;
  width: 50px;

  margin-left: 5%;

  background: white;

  @media(min-width: 768px) {
    margin: 0;
  }
`

export default function Navbar() {

  const [isOpen, setOpen] = useState(false)
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })
  })

  return (
    <Container>
      <ContainerContent>
        <Logo></Logo>

        {
          width < 769
            ? <MobileMenu />
            : <DesktopMenu />
        }
      </ContainerContent>
    </Container>
  )
}