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
          <p>FAQs</p>
          <p>Contact Us</p>
        </div>

        <div>
          <p>Privacy Policy</p>
          <p> Press Kit</p>
        </div>
        <div>
          <p> Install Guide</p>
        </div>
      </FooterList>
      <FooterIcon>
        <img src={faceIcon} alt="" />
        <img src={twitterIcon} alt="" />
        <img src={instaIcon} alt="" />
      </FooterIcon>
    </MyFooter>
  );
}

export { Footer };
