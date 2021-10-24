import styled from "styled-components";
import Image from 'next/image'

import Instagram from '../public/components/Footer/instagram.png'
import Facebook from '../public/components/Footer/facebook.png'
import Whatsapps from '../public/components/Footer/whatsapps.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 320px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }

  @media(min-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
  }

  img:hover { 
    opacity: 0.8;
  }
`

export default function Social() {
  return (
    <Container>
      <a title="Instagram" href="#"><Image src={Instagram} alt="IconeInstagram"/></a>
      <a title="Facebook" href="#"><Image src={Facebook} alt="Icone Facebook"/></a>
      <a title="Whatsapps" href="#"><Image src={Whatsapps} alt="Icone Whatsapps"/></a>
    </Container>
  )
}