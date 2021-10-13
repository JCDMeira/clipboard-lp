import React from 'react';
import { MyContent, Logo, FieldImg, ImgDevices } from './style';
import * as Typ from '../../typography';
import { Button } from '../MyButton';

//# My images
import logo from '../../assets/images/logo.svg';
import computer from '../../assets/images/image-computer.png';
import devices from '../../assets/images/image-devices.png';

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
      <Typ.Paragraph mb={6.6}>
        Clipboard instantly stores any item you copy in the cloud, meaning you
        can access your snippets immediately on all your devices. Our Mac and
        iOS apps will help you organize everything.
      </Typ.Paragraph>

      <FieldImg>
        <img src={computer} alt="" />
        <div>
          <Typ.Tittle3 mb={1.1}>Quick Search</Typ.Tittle3>
          <Typ.Paragraph mb={5}>
            Easily search your snippets by content, category, web address,
            application, and more.
          </Typ.Paragraph>

          <Typ.Tittle3 mb={1}>iCloud Sync</Typ.Tittle3>
          <Typ.Paragraph mb={4.8}>
            Instantly saves and syncs snippets across all your devices.
          </Typ.Paragraph>

          <Typ.Tittle3 mb={1}>Complete History</Typ.Tittle3>
          <Typ.Paragraph mb={1.1}>
            Retrieve any snippets from the first moment you started using the
            app.
          </Typ.Paragraph>
        </div>
      </FieldImg>

      <Typ.Tittle2 mb={1.5}>Access Clipboard Anywhere</Typ.Tittle2>
      <Typ.Paragraph mb={6.1}>
        Whether you’re on the go, or at your computer, you can access all your
        Clipboard snippets in a few simple clicks.
      </Typ.Paragraph>

      <ImgDevices src={devices} />

      <Typ.Tittle2 mb={1.1}>Supercharge your workflow</Typ.Tittle2>
      <Typ.Paragraph mb={8.5}>
        We’ve got the tools to boost your productivity.
      </Typ.Paragraph>
    </MyContent>
  );
}

export { Content };
