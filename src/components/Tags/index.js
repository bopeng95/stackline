import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text';

const Wrapper = styled.div`
  padding: 0px 15px;
`;

const TagWrapper = styled.div`
  padding: 2px 20px;
  border: 1px solid gray;
  border-radius: 5px;
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const Tags = (props) => {
  const { tags = [] } = props;
  const list = tags.map((item) => (
    <TagWrapper key={item}>
      <Text>{item}</Text>
    </TagWrapper>
  ));
  return <Wrapper>{list}</Wrapper>;
};

export default Tags;
