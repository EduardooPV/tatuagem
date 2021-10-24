import styled from "styled-components";
import Image from 'next/image'

const Container = styled.div`
  width: 100%;
  padding: 10px;

  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  column-gap: 10px;

  background: rgba(66, 66, 66, 0.81);

  border-radius: 5px;

  @media(min-width: 769px) {
    max-width: 400px;
  }
`

const ContainerImage = styled.div`
  max-width: 250px;
`

const ContainerText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const Title = styled.h4`
  margin-bottom: 10px;

  font-size: 1.2rem;
  font-weight: 600;
  color: #FFF;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`

const Description = styled.p`
  font-size: 1rem;
  color: #FFF;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`

export default function Card({ image, title, description }) {
  return (
    <Container>
      <ContainerImage>
      <Image src={image} aria-hidden="true" alt={title}/>
      </ContainerImage>

      <ContainerText>
        <Title>
          {title}
        </Title>

        <Description>
          {description}
        </Description>
      </ContainerText>
    </Container>
  )
}