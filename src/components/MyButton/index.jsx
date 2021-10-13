import React from 'react';
import * as P from 'prop-types';
import { MyButton } from './style';

function Button({ children, isIos, mb }) {
  return (
    <MyButton isIos={isIos} mb={mb}>
      {children}
    </MyButton>
  );
}

export { Button };

Button.propTypes = {
  children: P.string.isRequired,
  isIos: P.bool.isRequired,
  mb: P.number.isRequired,
};
