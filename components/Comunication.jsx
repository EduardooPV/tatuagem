import styled from "styled-components";
import Image from 'next/image'

const Container = styled.div`
  width: 100%;
  max-width: 300px;

  margin: 1rem 0;
`

const ContainerItem = styled.a`
  padding: 0.5rem;
  border-radius: 10px;
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  :hover {
    opacity: 0.8;
    background-color: #363636;
  }
`

const ContainerText = styled.div`
  text-align: start;
  color: #C3C3C3;
`

const Title = styled.h5`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
`

const Description = styled.p`
  font-size: 16px;
  line-height: 19px;
`

export default function Comunication({ title, description, icon, href }) {
  return (
    <Container>
      <ContainerItem title={title} href={href} target="_blank">
        <Image aria-hidden="true" src={icon} alt={title}/>

        <ContainerText>
          <Title>
            {title}
          </Title>
          <Description>
            {description}
          </Description>

        </ContainerText>

      </ContainerItem>
    </Container>
  )
}