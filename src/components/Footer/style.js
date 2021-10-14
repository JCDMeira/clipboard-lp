import styled from 'styled-components';

export const MyFooter = styled.div`
  width: 100%;
  height: 50.1rem;
  background: #f5f6f8;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MyLogo2 = styled.img`
  margin-top: 4.2rem;
  margin-bottom: 4.2rem;
`;

export const FooterList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-family: Bai Jamjuree;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      color: rgba(82, 87, 93, 0.7);
      margin-bottom: 2.9rem;
    }
  }
`;

export const FooterIcon = styled.div`
  width: 15.2rem;
  height: 2.4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.9rem;
`;
