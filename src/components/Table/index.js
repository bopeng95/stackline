import React from 'react';

import Text from 'components/Text';

import useSortTable from './useSortTable';
import { Wrapper, Head, Body, Row, ItemHead, ItemBody } from './styles';

const Table = (props) => {
  const { name, list } = props;
  const [sortedList, startSort] = useSortTable(list, {
    key: 'weekEnding',
    direction: 'asc',
  });

  const toDollars = (x) => {
    const result = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `$${result}`;
  };

  const headers = sortedList.length
    ? Object.keys(sortedList[0]).reduce((arr, item) => {
        arr.push(item);
        return arr;
      }, [])
    : [];

  const head = headers.map((item) => {
    const onClick = () => startSort(item);
    return (
      <ItemHead key={item}>
        <Text asButton onClick={onClick}>
          {item}
        </Text>
      </ItemHead>
    );
  });

  const body = sortedList.map((item, idx) => {
    const keys = Object.keys(item);
    const values = keys.map((key, i) => {
      const isMoney = i === 1 || i === 2 || i === 4;
      const text = isMoney ? toDollars(item[key]) : item[key];
      return (
        <ItemBody key={`${key}:${item[key]}`}>
          <Text color="gray">{text}</Text>
        </ItemBody>
      );
    });
    return <Row key={`${name}-tableNum${idx}`}>{values}</Row>;
  });

  return (
    <Wrapper>
      <Head>
        <Row>{head}</Row>
      </Head>
      <Body>{body}</Body>
    </Wrapper>
  );
};

export default Table;
