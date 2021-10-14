import React from 'react';
import { Content } from './components/Content';
import { GlobalStyled, Conteiner, MyBg } from './global';
import bgMobile from './assets/images/bg-header-mobile.png';
import bgDesktop from './assets/images/bg-header-desktop.png';
import { Footer } from './components/Footer';

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
