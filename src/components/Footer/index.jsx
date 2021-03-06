import React from 'react';
import { MyFooter, MyLogo2, FooterList, FooterIcon } from './style';

// # My images
import logo2 from '../../assets/images/logo 2.svg';
import faceIcon from '../../assets/images/icon-facebook.svg';
import twitterIcon from '../../assets/images/icon-twitter.svg';
import instaIcon from '../../assets/images/icon-instagram.svg';

function Footer() {
  return (
    <MyFooter>
      <MyLogo2 src={logo2} alt="" />
      <FooterList>
        <div>
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
        </div>

        <div>
          <a href="#">Privacy Policy</a>
          <a href="#"> Press Kit</a>
        </div>
        <div>
          <a href="#"> Install Guide</a>
        </div>
      </FooterList>
      <FooterIcon>
        <a href="#">
          <img src={faceIcon} alt="" />
        </a>
        <a href="#">
          <img src={twitterIcon} alt="" />
        </a>
        <a href="#">
          <img src={instaIcon} alt="" />
        </a>
      </FooterIcon>
    </MyFooter>
  );
}

export { Footer };
