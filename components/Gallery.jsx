import styled from "styled-components"; 

import BackgroundPontos from '../public/components/bg-pontos.png'
import Button from "./Button";
import Photos from "./Photos";

const Container = styled.section(() => `
  min-height: 100vh;
  width: 100%;

  background: url(${BackgroundPontos.src}) center center no-repeat;
  background-size: cover;
  background-color: #000;

  margin: auto;
  padding: 0 5vw;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`)

export default function Gallery() {
  return(
    <Container id="galeria">
      <Photos />
      <Button 
        content="Veja todas as fotos"
        sessao="#"
      />
    </Container>
  )
}