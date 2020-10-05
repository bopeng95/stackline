import styled from 'styled-components';

export const Wrapper = styled.table`
  width: 100%;
`;

export const Head = styled.thead``;

export const Body = styled.tbody``;

export const Row = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  text-align: center;
`;

export const ItemHead = styled.th`
  padding: 20px 0;
`;
export const ItemBody = styled.td`
  padding: 20px 0;
`;
