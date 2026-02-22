import styled, { css } from "styled-components";

const gridStyle = css`
  display: grid;
  grid-template-columns: repeat(${props => props.$columns}, 1fr);
  gap: 1.5rem;
`;

const verticalStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const horizontalStyle = css`
  display: flex;
  overflow-x: auto;
  gap: 1.5rem;
`;

export const ListWrapper = styled.div`
  ${props => {
    if (props.$variant === "grid") return gridStyle;
    if (props.$variant === "horizontal") return horizontalStyle;
    return verticalStyle;
  }}
`;