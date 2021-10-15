import styled from 'styled-components';

export const Tittle1 = styled.h1`
  font-family: Bai Jamjuree;
  font-style: normal;
  font-weight: 600;
  font-size: 3.1rem;
  line-height: 4rem;
  text-align: center;

  color: #52575d;

  padding: 0 2.9rem 0 3rem;
  margin-bottom: 1.5rem;

  @media (min-width: 1200px) {
    font-size: 4.44rem;
    line-height: 5.6rem;
  }
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

  span {
    text-transform: capitalize;
  }

  @media (min-width: 1200px) {
    font-size: 3.49rem;
    line-height: 4.4rem;
    margin-bottom: ${(props) => `${props.mbm}rem`};
    margin-top: ${(props) => `${props.mtm}rem`};

    span {
      text-transform: none;
    }
  }
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

  @media (min-width: 1200px) {
    font-size: 2.3rem;
    line-height: 2.9rem;
    margin-bottom: ${(props) => `${props.mbm}rem`};
  }
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

  @media (min-width: 1200px) {
    font-size: 1.83rem;
    line-height: 3rem;
    padding: 0 36.3rem;
    margin-bottom: ${(props) => `${props.mbm}rem`};
  }
`;
