# Frontend Mentor - Clipboard landing page solution

This is a solution to the [Clipboard landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

This is the front-end mentor's eleventh challenge. The challenge is to build the "Clipboard landing page" and make it as close to the design as possible. Building the desing with whatever you want to finish, any language, framework or tools.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

## Screenshot

### Mobile design

<p  align="center">
  <img width="300px" src="./presentation/mobile.png" align="center"></img>
</p>

### Tablets design

<p  align="center"><img width="420px"  src="./presentation/i-pad.png" align="center"></img></p>

### Desktop design

<p  align="center"><img width="720px" src="./presentation/desktop.png" align="center"></img></p>

### result of my work

<p  align="center"><img width="1080px" src="./presentation/design-x-myWork.gif" align="center"></img></p>

### Links

- Solution URL: [My solution for this challenge](https://www.frontendmentor.io/solutions/clipboard-landing-page-with-reactjs-and-styled-components-qTj-1h7_M)
- Live Site URL: [check the result](https://jcdmeira-clipboard-lp.netlify.app)
- My figma design: [Figma](https://www.figma.com/file/Pqbn8wwowh2B6lqU5JmslQ/11-Clipboard-lp?node-id=0%3A1)

## My process

### Built with

- Mobile-first workflow
- [Styled components](https://styled-components.com) - CSS in js with stiled components
- [React](https://reactjs.org/) - JS library

### What I learned

Using filters to give color change effect on SVG image in hover state. With the following set of values the color is very close to the color used in the logo.

```JS
import styled from 'styled-components';

export const FooterIcon = styled.div`
  img {
    :hover {
      filter: invert(0.65) sepia(0.799) saturate(3.6) hue-rotate(121deg);
    }
  }
`;

```

### Useful resources

- [react tutorial](https://pt-br.reactjs.org/tutorial/tutorial.html) - This helped me structure the components and build the proposed page.
- [my figma design](https://www.figma.com/file/Pqbn8wwowh2B6lqU5JmslQ/11-Clipboard-lp?node-id=0%3A1) - My figma design for help anyone who wants to build this challenge.
- [CSS units conversor - px to VH/VW/REM](https://it-news.pw/pxtovh/) - CSS units conversor .
- [Converting Colors](https://convertingcolors.com) - HSL for all color systems.
- [SVG styles](https://qastack.com.br/programming/24933430/img-src-svg-changing-the-styles-with-css) - working with SVG.
- [Swapping Fill Color on Image Tag SVGs](https://blog.union.io/code/2017/08/10/img-svg-fill/) - using filters to change SVG color.

## Author

- Personal Page - [Jean Carlos De Meira](https://jcdmeira.github.io)
- Frontend Mentor - [@JCDMeira](https://www.frontendmentor.io/profile/JCDMeira)
- Instagram - [@jean.meira10](https://www.instagram.com/jean.meira10/)
- GitHub - [JCDMeira](https://github.com/JCDMeira)
