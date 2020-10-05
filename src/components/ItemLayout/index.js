import React, { useState } from 'react';

import Sidebar from './Sidebar';
import Main from './Main';
import { Wrapper } from './styles';

const ItemLayout = (props) => {
  const { item, sidebarWidth = 350 } = props;
  const { sales = [], ...rest } = item;

  const menu = ['Overview', 'Sales'];
  const [selected, setSelected] = useState(menu[1]);

  const changeMenu = (i) => setSelected(menu[i]);

  return (
    <Wrapper sidebar={sidebarWidth}>
      <Sidebar
        menu={menu}
        selected={selected}
        changeMenu={changeMenu}
        {...rest}
      />
      <Main sales={sales} />
    </Wrapper>
  );
};

export default ItemLayout;
