import styled from 'styled-components';

export const MyContent = styled.div`
  width: 100%;
  height: 470.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* @media (min-width: 1200px) {
    height: 365.9rem;
  } */
`;

export const Logo = styled.img`
  margin-top: 12.3rem;
  margin-bottom: 6.5rem;
  height: 12.5rem;
  width: 12.5rem;

  @media (min-width: 1200px) {
    margin-top: 13.2rem;
    margin-bottom: 5.9rem;
  }
`;

export const FieldButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const FieldImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 17.4rem;

  img {
    width: 83.2vw;
    height: auto;
    margin-bottom: 5.668rem;

    @media (min-width: 374px) {
      width: 31.2rem;
      height: 23.732rem;
    }
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: initial;
    align-items: initial;
    margin-bottom: 9.6rem;

    img {
      width: 749px;
      height: 569px;
      position: relative;
      margin-left: -3.1rem;
      margin-top: -0.3rem;
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: initial;
      justify-content: initial;
      padding: 6.6rem 25rem 0 11.3rem;
      h3 {
        text-align: left;
      }
      p {
        text-align: left;
        padding: 0;
        font-size: 16.3px;
        line-height: 30px;
      }
    }
  }
`;

export const ImgDevices = styled.img`
  width: 93.33vw;
  height: auto;
  margin-bottom: 9.262rem;

  @media (min-width: 374px) {
    width: 35rem;
    height: 22.238rem;
  }

  @media (min-width: 1200px) {
    width: 90.5rem;
    height: 57.4rem;
    margin-bottom: 7.162rem;
  }
`;

export const WorkFlow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    width: 112.1rem;
    margin-bottom: 16.5rem;
    div {
      width: 36.3rem;
      height: 21rem;
      align-items: center;
      justify-content: initial;
      h3 {
        padding: 0;
      }
      p {
        padding: 0;
        font-size: 16.3px;
        line-height: 30px;
      }
    }
  }
`;

export const Icon = styled.img`
  width: ${(props) => `${props.MyWidth}rem`};
  height: ${(props) => `${props.MyHeight}rem`};
  margin-bottom: ${(props) => `${props.mb}rem`};

  @media (min-width: 1200px) {
    margin-bottom: ${(props) => `${props.mbm}rem`};
  }
`;

export const Companies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0;

  @media (min-width: 374px) {
    margin-bottom: ${(props) => `${props.mb}rem`};
  }
`;
