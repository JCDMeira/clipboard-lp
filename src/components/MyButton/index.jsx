import React from 'react';
import * as P from 'prop-types';
import { MyButton } from './style';

function Button({ children, isIos }) {
  return <MyButton isIos={isIos}>{children}</MyButton>;
}

export { Button };

Button.propTypes = {
  children: P.string.isRequired,
  isIos: P.bool.isRequired,
};
