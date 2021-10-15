import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html{
  font-size: 62.5%;
  font-family: "Bai Jamjuree";
}
`;

export const Conteiner = styled.div`
  width: 100%;
  height: 520.678rem;
  @media (min-width: 1200px) {
    height: 380.8rem;
  }
`;

export const MyBg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;
