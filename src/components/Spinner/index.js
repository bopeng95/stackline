import React from 'react';
import styled from 'styled-components';

import Loader from 'react-loader-spinner';

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const Spinner = (props) => {
  const { size, ...rest } = props;
  return (
    <Wrapper>
      <Loader width={size} height={size} {...rest} />
    </Wrapper>
  );
};

export default Spinner;
