import React from 'react';
import { MyContent, Logo, FieldImg, ImgDevices, WorkFlow, Icon } from './style';
import * as Typ from '../../typography';
import { Button } from '../MyButton';

//# My images
import logo from '../../assets/images/logo.svg';
import computer from '../../assets/images/image-computer.png';
import devices from '../../assets/images/image-devices.png';
import blacklist from '../../assets/images/icon-blacklist.svg';
import text from '../../assets/images/icon-text.svg';
import previw from '../../assets/images/icon-preview.svg';

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
      <Typ.Paragraph mb={8.8}>
        We’ve got the tools to boost your productivity.
      </Typ.Paragraph>

      <WorkFlow>
        <div>
          <Icon src={blacklist} alt="" MyWidth={4.4} MyHeight={4} mb={4.2} />
          <Typ.Tittle3 mb={1.9}>Create blacklists</Typ.Tittle3>
          <Typ.Paragraph mb={5.5}>
            Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources.
          </Typ.Paragraph>
        </div>

        <div>
          <Icon src={text} alt="" MyWidth={3.6} MyHeight={3.2} mb={4.5} />
          <Typ.Tittle3 mb={1.9}>Plain text snippets</Typ.Tittle3>
          <Typ.Paragraph mb={5.6}>
            Remove unwanted formatting from copied text for a consistent look.
          </Typ.Paragraph>
        </div>

        <div>
          <Icon src={previw} alt="" MyWidth={5} MyHeight={3.2} mb={4.5} />
          <Typ.Tittle3 mb={1.9}>Sneak preview</Typ.Tittle3>
          <Typ.Paragraph mb={5.6}>
            Quick preview of all snippets on your Clipboard for easy access.
          </Typ.Paragraph>
        </div>
      </WorkFlow>
    </MyContent>
  );
}

export { Content };
