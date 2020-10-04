import React from 'react';

import { Wrapper } from './styles';

const Container = (props) => {
  const { children } = props;
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
