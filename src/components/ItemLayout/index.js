import React, { useState } from 'react';

import Sidebar from './Sidebar';
import { Wrapper } from './styles';

const ItemLayout = (props) => {
  const { item, sidebar = 350 } = props;
  const { sales, ...rest } = item;

  const menu = ['Overview', 'Sales'];
  const [selected, setSelected] = useState(menu[1]);

  const changeMenu = (i) => setSelected(menu[i]);

  console.log(item);

  return (
    <Wrapper sidebar={sidebar}>
      <Sidebar
        menu={menu}
        selected={selected}
        changeMenu={changeMenu}
        {...rest}
      />
    </Wrapper>
  );
};

export default ItemLayout;
