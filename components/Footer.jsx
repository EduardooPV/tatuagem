import styled from "styled-components";
import Social from './Social'

import Comunication from "./Comunication";

import IconMap from '../public/components/Footer/map.png'
import IconEmail from '../public/components/Footer/email.png'
import IconPhone from '../public/components/Footer/telefone.png'

const Container = styled.footer`
  width: 100%;

  background-color: #2D2D2D;

  margin: auto;
  padding: 20px 5vw;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ContainerContent = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1000px;
  margin: auto;

  @media(min-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
  }
`

const ContainerSocial = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;

  @media (max-width: 320px) {
    flex-wrap: wrap;
  }

  @media(min-width: 768px) {
  flex-direction: row;
  }
`

const ContainerComunication = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  @media(min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 0;
  }
`

const GoogleMaps = styled.div`
  width: 100%;
  height: 40vh;

  margin-top: 2rem;
  padding: 4px;

  border-radius: 20px;
  line-height: 0;
  background: linear-gradient(0, rgba(0, 0, 0, 1) 0%, rgba(195,0,24,1) 100%);

  @media(min-width: 768px) {
    margin: 0;
  }
`


export default function Footer() {
  return (
    <Container id="footer">
      <ContainerContent>
      <ContainerSocial>
        <ContainerComunication>
          <Comunication
            title="Endereço"
            description="Rua: Padre padroeiro, Nº272"
            icon={IconMap}
            href="https://goo.gl/maps/vvYp1PgnzVyHNcBh7"
          />

          <Comunication
            title="Email"
            description="qualquer.email@gmail.com"
            icon={IconEmail}
            href="mailto: emaildeexemplo@gmail.com"
          />

          <Comunication
            title="Celular"
            description="(+55) 11 98282-3232"
            icon={IconPhone}
            href="tel:15923232323"
          />
        </ContainerComunication>

        <Social />
      </ContainerSocial>

      <GoogleMaps>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1648.611862412275!2d108.82485665380959!3d34.26834674334069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x366378197ba58f25%3A0xe96a92373a099005!2sXinyuan%20Hotel!5e0!3m2!1spt-BR!2sbr!4v1634871039962!5m2!1spt-BR!2sbr" rel="preconnect" defer width="100%" height="100%" style={{ borderRadius: "20px" }} loading="lazy"></iframe>
      </GoogleMaps>
      </ContainerContent>
    </Container>
  )
}