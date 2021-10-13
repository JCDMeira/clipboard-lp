import React from 'react';
import { MyContent, Logo } from './style';
import logo from '../../assets/images/logo.svg';
import * as Typ from '../../typography';
import { Button } from '../MyButton';

function Content() {
  return (
    <MyContent>
      <Logo src={logo} />
      <Typ.Tittle1>A history of everything you copy</Typ.Tittle1>
      <Typ.Paragraph>
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </Typ.Paragraph>
      <Button isIos={true}>Download for iOS</Button>
      <Button isIos={false}>Download for Mac</Button>
    </MyContent>
  );
}

export { Content };
