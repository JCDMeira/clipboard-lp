import styled from 'styled-components';

export const MyFooter = styled.div`
  width: 100%;
  height: 50.1rem;
  background: #f5f6f8;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    height: 14.9rem;
    flex-direction: row;
    align-items: initial;
    justify-content: space-between;
    padding: 4rem 16.5rem 4rem 16.2rem;
  }
`;

export const MyLogo2 = styled.img`
  margin-top: 4.2rem;
  margin-bottom: 4.2rem;
  @media (min-width: 1200px) {
    margin-top: 0rem;
    margin-bottom: 0rem;
    width: 6rem;
    height: 6rem;
  }
`;

export const FooterList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      text-decoration: none;
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
  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: initial;
    /* width: 49.3rem; */
    height: 6.6rem;
    margin-left: -10.4rem;

    div {
    display: flex;
    flex-direction: column;
    align-items: initial;
    justify-content: initial;
    height: 6.6rem;
    width: 18.8rem;
    a {
      text-decoration: none;
      font-family: Bai Jamjuree;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      text-align: left;
      color: rgba(82, 87, 93, 0.7);
      margin-bottom: 2.3rem;
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

  @media (min-width: 1200px) {
    width: 12rem;
    margin-top: 2rem;
  }
`;
