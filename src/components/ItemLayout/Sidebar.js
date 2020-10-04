import React from 'react';

import Text from 'components/Text';
import Divider from 'components/Divider';
import Tags from 'components/Tags';

import { SideWrapper, ImageWrapper, Content } from './styles';

const Sidebar = (props) => {
  const { menu, changeMenu, selected, title, subtitle, tags, image } = props;
  const size = 200;

  const sideNav = menu.map((item, idx) => {
    const color = item === selected ? 'black' : 'gray';
    const onClick = () => changeMenu(idx);
    return (
      <Text
        key={item}
        asButton
        type="subtitle"
        color={color}
        gutter
        onClick={onClick}
      >
        {item}
      </Text>
    );
  });

  return (
    <SideWrapper>
      <Content>
        <ImageWrapper>
          <img src={image} alt={title} width={size} height={size} />
          <Text type="subtitle">{title}</Text>
          <Text color="gray">{subtitle}</Text>
        </ImageWrapper>
      </Content>
      <Divider color="gray" />
      <Tags tags={tags} />
      <Divider color="gray" />
      <Content>{sideNav}</Content>
    </SideWrapper>
  );
};

export default Sidebar;
