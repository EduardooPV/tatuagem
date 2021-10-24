import styled from "styled-components";

const ButtonContainer = styled.a`
  padding: 10px 20px;

  border: none;
  border-radius: 5px;

  background-color: #C30018;
  color: #FFF;
  font-size: 1.3rem;
  line-height: 23px;

  text-decoration: none;

  :hover {
    background-color: #83000f;
    transition: all 0.2s;
  }
`

export default function Button({ content, sessao }) {
  return (
    <ButtonContainer role="button" href={sessao}>
      {content}
    </ButtonContainer>
  )
}