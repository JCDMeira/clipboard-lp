import styled from 'styled-components';

export const MyButton = styled.button`
  width: 83.2vw;
  height: 54px;
  border-radius: 30px;
  border: none;

  font-family: Bai Jamjuree;
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  line-height: 40px;
  text-align: center;
  background: ${(props) => (props.isIos === true ? ' #26BAA4' : '#6173FF')};

  color: #ffffff;
  margin-bottom: 2.6rem;

  :hover {
    background: ${(props) => (props.isIos === true ? ' #5DCCBB' : '#8896FF')};
  }

  @media (min-width: 374px) {
    width: 31.2rem;
  }

  @media (min-width: 1200px) {
    width: 22.7rem;
    height: 5.4rem;
    margin-right: 1.2rem;
    margin-left: 0.7rem;
  }
`;
