import styled from 'styled-components';

export const Tittle1 = styled.h1`
  font-family: Bai Jamjuree;
  font-style: normal;
  font-weight: 600;
  font-size: 31px;
  line-height: 40px;
  text-align: center;

  color: #52575d;

  padding: 0 2.9rem 0 3rem;
  margin-bottom: 1.5rem;
`;

export const Tittle2 = styled.h2`
  font-family: Bai Jamjuree;
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  line-height: 36px;
  text-align: center;

  color: #52575d;
  padding: 0 4.8rem;

  margin-bottom: ${(props) => `${props.mb}rem`};
  margin-top: ${(props) => `${props.mt}rem`};
`;

export const Tittle3 = styled.h3`
  font-family: Bai Jamjuree;
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  line-height: 29px;
  text-align: center;

  color: #52575d;
  margin-bottom: ${(props) => `${props.mb}rem`};
`;

export const Paragraph = styled.p`
  font-family: Bai Jamjuree;
  font-style: normal;
  font-weight: normal;
  font-size: 16.3px;
  line-height: 26px;
  text-align: center;

  color: rgba(82, 87, 93, 0.7);

  padding: 0 3rem;
  margin-bottom: ${(props) => `${props.mb}rem`};
`;
