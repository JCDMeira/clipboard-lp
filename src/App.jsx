import React from 'react';
import { Content } from './components/Content';
import { GlobalStyled, Conteiner, MyBg, Footer } from './global';
import bgMobile from './assets/images/bg-header-mobile.png';
import bgDesktop from './assets/images/bg-header-desktop.png';

function App() {
  const deviceWidth = window.screen.width;
  return (
    <>
      <GlobalStyled />
      <Conteiner>
        <MyBg src={deviceWidth > 1023 ? bgDesktop : bgMobile} alt="" />
        <Content />
        <Footer />
      </Conteiner>
    </>
  );
}

export default App;
