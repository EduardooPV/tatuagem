import styled from "styled-components";

import BackgroundLamour from '../public/components/bg-cases.png'
import IconCard from '../public/components/icon-card.png'
import Card from "./Card";

const Container = styled.section(() => `
  width: 100%;
  min-height: 100vh;
  
  background: url(${BackgroundLamour.src}) center center no-repeat;
  background-size: cover;

  margin: auto;
  padding: 0 5vw;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(min-width: 769px) {
    min-height: auto;
    padding: 20vh 10vw;
    align-items: start;
  }
`)

const ContainerContent = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100vh;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: auto;

  @media(min-width: 769px) {
    height: 100vh;
    height: auto;

    margin: auto;

    align-items: start;
  }
`

export default function Cases() {
  return (
    <Container id="cases">
      <ContainerContent>
        <Card
          image={IconCard}
          title="Case numero 01"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper justo nec hendrerit tincidunt."
        />
        <Card
          image={IconCard}
          title="Case numero 01"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper justo nec hendrerit tincidunt."
        />
        <Card
          image={IconCard}
          title="Case numero 01"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper justo nec hendrerit tincidunt."
        />
        <Card
          image={IconCard}
          title="Case numero 01"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper justo nec hendrerit tincidunt."
        />
      </ContainerContent>
    </Container>
  )
}