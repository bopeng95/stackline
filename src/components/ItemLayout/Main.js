import React from 'react';

import Table from 'components/Table';

import { DetailWrapper } from './styles';

const ItemTable = (props) => {
  const { sales = [] } = props;

  return (
    <DetailWrapper>
      <Table name="sales" list={sales} />
    </DetailWrapper>
  );
};

export default ItemTable;
