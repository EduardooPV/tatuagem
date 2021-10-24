import styled, { keyframes } from "styled-components";

const Nav = styled.nav`
  width: 100%;

  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    margin-right: 1.5rem;
    
    li {
      padding: 1rem;
    }

    a {
      text-decoration: none;
      font-size: 1.3rem;
      color: #fff;
    }

    a:hover {
      color: var(--red);
    }

    a:hover::after {
      content: "";
      display: block;
      margin-top: 0.2rem;
      background-color: #6d000d;
      height: 2px;
      animation: underline 1s;
    }
    a:hover::before {
      content: "";
      display: block;
      margin-bottom: 0.2rem;
      background-color: #6d000d;
      height: 2px;
      animation: underline 1s;
    }
  }
  
@keyframes underline {
  0% { width: 0 }
  100% { width: 100% }
}
`


export default function DesktopMenu() {

  const menuItems = [
    {
      id: 1,
      item: "Inicio",
      position: "#inicio"
    },
    {
      id: 2,
      item: "Sobre",
      position: "#about"
    },
    {
      id: 3,
      item: "Diferenciais",
      position: "#cases"
    },
    {
      id: 4,
      item: "Galeria",
      position: "#galeria"
    }
  ]

  return (
    <Nav>
      <Nav>
        <ul>
          {
            menuItems.map((item) =>
              <li key={item.id}><a href={item.position}>{item.item}</a></li>
            )
          }
        </ul>
      </Nav>
    </Nav>
  )
}