import styled from "styled-components";
import { useState } from "react";
import { Sling as Hamburger } from 'hamburger-react'
import Social from "./Social";


const HamburgerOpen = styled.div`
  width: 100%;

  position: absolute;
  top: 0;

  z-index: -1;
`

const Nav = styled.nav`
  width: 100%;
  height: 100vh;
  position: absolute;  
  text-align: center;
  background-color: rgba(0, 0, 0, 0.918);
  z-index: 6;

  ul {
    margin: 6rem 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;

    a {
      text-decoration: none;
      color: white;
      font-weight: bold;
      color: white;
      font-size: 3rem;
    }

    a:active, a:hover {
      color: red;
      text-decoration: underline;
    }
  }
`

export default function HamburgerMenu() {

  const menuItems = [
    {
      item: "Inicio",
      position: "#inicio"
    },
    {
      item: "Sobre",
      position: "#about"
    },
    {
      item: "Diferenciais",
      position: "#cases"
    },
    {
      item: "Galeria",
      position: "#galeria"
    },
    {
      item: "Contato",
      position: "#footer"
    },
  ]
  
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <Hamburger toggled={isOpen} toggle={setOpen} color="#FFF" />
      {
        !isOpen
          ?
          ""
          :
          <HamburgerOpen>
            <Nav>
              <ul>
                {
                  menuItems.map((item) =>
                    <li onClick={() => setOpen(false)} key={item.index}><a href={item.position}>{item.item}</a></li>
                  )
                }
              </ul>

              <Social />
            </Nav>
          </HamburgerOpen>
      }
    </>
  )
}