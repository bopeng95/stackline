import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas: 'sidebar main';
  grid-template-columns: ${({ sidebar }) => sidebar}px auto;
  grid-template-rows: auto;
`;

export const Content = styled.div`
  padding: 20px 50px;
`;

export const SideWrapper = styled.div`
  grid-area: sidebar;
  background: white;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
