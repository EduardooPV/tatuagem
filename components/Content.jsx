import styled from "styled-components";

import Button from './Button'

const Container = styled.section`
  width: 100%;
  height: 100vh;

  position: relative;
  margin: auto;
  padding: 0 5vw;
  box-sizing: border-box;

  z-index: 2;

  @media (min-width:768px) {
    padding: 0 10vw;
    align-items: flex-start;
  }
`

const ContainerContent = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1000px;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width:768px) {
    align-items: flex-start;
  }
`

const Title = styled.h1`
  margin-top: 4rem;

  font-size: 4rem;
  line-height: 62px;
  font-weight: bold;
  font-family: 'Dancing Script', serif;
  color: #FFF;

  @media (min-width: 768px) {
    font-size: 6rem;
  }
`

const SubTitle = styled.h2`
  margin: 1rem 0;
  font-size: 2.5rem;
  line-height: 44px;
  font-family: 'Dancing Script', serif;
  color: #FFF;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`

const Description = styled.p`
  margin: 3rem 0 1rem 0;

  font-size: 1rem;
  line-height: 24px;
  text-align: center;

  color: #FFF;

  @media (min-width:768px) {
    max-width: 50%;

    font-size: 1.3rem;
    text-align: start;
  }
`

export default function Content() {
  return (
    <Container>
      <ContainerContent>
      <Title>
        Gabes Tattoo
      </Title>
      <SubTitle>
        Tatuador do marilia 
      </SubTitle>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus vehicula egestas nisl risus et, cras nec. Nulla erat fringilla viverra nisl mauris pellentesque facilisi nibh. Sit augue cursus imperdiet nulla. Etiam amet duis aliquam, a, vitae.
      </Description>
      <Button
        content="Saiba mais"
        sessao="#about"
      />
      </ContainerContent>
    </Container>
  )
}