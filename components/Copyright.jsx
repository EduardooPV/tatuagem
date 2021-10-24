import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  padding: 2rem;

  background-color: #000;

  text-align: center;

  
`

const Title = styled.h6`
  font-size: 12px;
  line-height: 14px;
  color: #c2c2c2;
  
  a  {
    text-decoration: none;  
    color: #c2c2c2;
  }

  a:hover {
    opacity: 0.8;
  }
`

export default function Copyright() {
  return (
    <Container>

      <Title>
        <a href="https://github.com/EduardooPV" target="_blank" rel="noreferrer">
          Copyright (C) 2021 - Luiz Eduardo
        </a>
      </Title>
      <Title>
        Todos os direitos reservados.
      </Title>
    </Container>
  )
}