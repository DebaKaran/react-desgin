import styled from "styled-components";

export const ScreenSplitContainer = styled.div`
    display: flex;
    gap: 20px;
`;

export const Pane = styled.div`
    flex: ${props => props.weight};
    background-color: ${props => props.bg};;
`;
