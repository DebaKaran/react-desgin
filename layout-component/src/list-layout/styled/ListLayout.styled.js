import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  gap: 1.5rem;
`;

export const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const HorizontalWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1.5rem;
`;