import React from 'react';
import {
  MyContent,
  FieldButton,
  Logo,
  FieldImg,
  ImgDevices,
  WorkFlow,
  Icon,
  Companies,
} from './style';
import * as Typ from '../../typography';
import { Button } from '../MyButton';

//# My images
import logo from '../../assets/images/logo.svg';
import computer from '../../assets/images/image-computer.png';
import devices from '../../assets/images/image-devices.png';
import blacklist from '../../assets/images/icon-blacklist.svg';
import text from '../../assets/images/icon-text.svg';
import preview from '../../assets/images/icon-preview.svg';
import googleImg from '../../assets/images/logo-google.png';
import ibmImg from '../../assets/images/logo-ibm.png';
import microsoftImg from '../../assets/images/logo-microsoft.png';
import hewlettImg from '../../assets/images/logo-hp.png';
import vectorImg from '../../assets/images/logo-vector-graphics.png';

function Content() {
  return (
    <MyContent>
      <Logo src={logo} />

      <Typ.Tittle1>A history of everything you copy</Typ.Tittle1>
      <Typ.Paragraph mb={4.9}>
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </Typ.Paragraph>

      <FieldButton>
        <Button isIos={true}>Download for iOS</Button>
        <Button isIos={false}>Download for Mac</Button>
      </FieldButton>

      <Typ.Tittle2 mb={1.6} mt={13.5} mbm={2} mtm={12.5}>
        Keep track of your snippets
      </Typ.Tittle2>
      <Typ.Paragraph mb={6.4} mbm={8.3}>
        Clipboard instantly stores any item you copy in the cloud, meaning you
        can access your snippets immediately on all your devices. Our Mac and
        iOS apps will help you organize everything.
      </Typ.Paragraph>

      <FieldImg>
        <img src={computer} alt="" />
        <div>
          <Typ.Tittle3 mb={1.1} mbm={0.7}>
            Quick Search
          </Typ.Tittle3>
          <Typ.Paragraph mb={5} mbm={5.6}>
            Easily search your snippets by content, category, web address,
            application, and more.
          </Typ.Paragraph>

          <Typ.Tittle3 mb={1}>iCloud Sync</Typ.Tittle3>
          <Typ.Paragraph mb={4.8} mbm={5.6}>
            Instantly saves and syncs snippets across all your devices.
          </Typ.Paragraph>

          <Typ.Tittle3 mb={1} mbm={0.8}>
            Complete History
          </Typ.Tittle3>
          <Typ.Paragraph mb={1.1}>
            Retrieve any snippets from the first moment you started using the
            app.
          </Typ.Paragraph>
        </div>
      </FieldImg>

      <Typ.Tittle2 mb={1.5} mbm={2.1}>
        Access Clipboard <span>anywhere</span>
      </Typ.Tittle2>
      <Typ.Paragraph mb={6} mbm={10}>
        Whether you’re on the go, or at your computer, you can access all your
        Clipboard snippets in a few simple clicks.
      </Typ.Paragraph>

      <ImgDevices src={devices} />

      <Typ.Tittle2 mb={1.1} mbm={2}>
        Supercharge your workflow
      </Typ.Tittle2>
      <Typ.Paragraph mb={8.8} mbm={7.4}>
        We’ve got the tools to boost your productivity.
      </Typ.Paragraph>

      <WorkFlow>
        <div>
          <Icon
            src={blacklist}
            alt=""
            MyWidth={4.4}
            MyHeight={4}
            mb={4.2}
            mbm={3.8}
          />
          <Typ.Tittle3 mb={1.9} mbm={1.7}>
            Create blacklists
          </Typ.Tittle3>
          <Typ.Paragraph mb={5.5}>
            Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources.
          </Typ.Paragraph>
        </div>

        <div>
          <Icon
            src={text}
            alt=""
            MyWidth={3.6}
            MyHeight={3.2}
            mb={4.5}
            mbm={4.6}
          />
          <Typ.Tittle3 mb={1.9} mbm={1.5}>
            Plain text snippets
          </Typ.Tittle3>
          <Typ.Paragraph mb={5.6}>
            Remove unwanted formatting from copied text for a consistent look.
          </Typ.Paragraph>
        </div>

        <div>
          <Icon
            src={preview}
            alt=""
            MyWidth={5}
            MyHeight={3.2}
            mb={4.5}
            mbm={4.6}
          />
          <Typ.Tittle3 mb={1.9} mbm={1.7}>
            Sneak preview
          </Typ.Tittle3>
          <Typ.Paragraph mb={12.7}>
            Quick preview of all snippets on your Clipboard for easy access.
          </Typ.Paragraph>
        </div>
      </WorkFlow>

      <Companies mb={12.68}>
        <Icon
          src={googleImg}
          alt=""
          MyWidth={14.2}
          MyHeight={4.217}
          mb={6.783}
        />
        <Icon src={ibmImg} alt="" MyWidth={11.8} MyHeight={4.329} mb={6.771} />
        <Icon
          src={microsoftImg}
          alt=""
          MyWidth={13.6}
          MyHeight={2.957}
          mb={6.243}
        />
        <Icon
          src={hewlettImg}
          alt=""
          MyWidth={11.5}
          MyHeight={4.77}
          mb={5.53}
        />
        <Icon src={vectorImg} alt="" MyWidth={10.5} MyHeight={2.52} mb={4.5} />
      </Companies>

      <Typ.Tittle2 mb={1.5}>Clipboard for iOS and Mac OS</Typ.Tittle2>
      <Typ.Paragraph mb={4.8}>
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you’re ready to start adding to your clipboard.
      </Typ.Paragraph>

      <Button isIos={true}>Download for iOS</Button>
      <Button isIos={false}>Download for Mac</Button>
    </MyContent>
  );
}

export { Content };
