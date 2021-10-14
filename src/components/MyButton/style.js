import styled from 'styled-components';

export const MyButton = styled.button`
  width: 312px;
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
`;
