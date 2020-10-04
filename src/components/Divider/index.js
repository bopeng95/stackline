import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-top: ${({ theme, size, color }) =>
    `${size}px solid ${theme.colors[color]}`};
  margin: 20px 0;
`;

const Divider = (props) => {
  const { size = 1, color = 'black' } = props;
  return <Wrapper size={size} color={color} />;
};

export default Divider;
