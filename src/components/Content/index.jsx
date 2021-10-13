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
      <Typ.Paragraph mb={4.9}>
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </Typ.Paragraph>
      <Button isIos={true} mb={2.6}>
        Download for iOS
      </Button>
      <Button isIos={false} mb={16}>
        Download for Mac
      </Button>
      <Typ.Tittle2 mb={1.6}>Keep track of your snippets</Typ.Tittle2>
      <Typ.Paragraph mb={6.9}>
        Clipboard instantly stores any item you copy in the cloud, meaning you
        can access your snippets immediately on all your devices. Our Mac and
        iOS apps will help you organize everything.
      </Typ.Paragraph>
    </MyContent>
  );
}

export { Content };
