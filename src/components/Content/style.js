import styled from 'styled-components';

export const MyContent = styled.div`
  width: 100%;
  height: 470.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

export const ImgDevices = styled.img`
  width: 93.33vw;
  height: auto;
  margin-bottom: 9.262rem;

  @media (min-width: 374px) {
    width: 35rem;
    height: 22.238rem;
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
`;

export const Icon = styled.img`
  width: ${(props) => `${props.MyWidth}rem`};
  height: ${(props) => `${props.MyHeight}rem`};
  margin-bottom: ${(props) => `${props.mb}rem`};
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
