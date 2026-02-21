import styled from "styled-components";

export const ScreenSplitContainer = styled.div`
    display: flex;
    gap: 20px;
`;

export const LeftPanelContainer = styled.div`
    flex: ${props => props.weight};
    background-color: green;
`;

export const RightPanelContainer = styled.div`
    flex: ${props => props.weight};
    background-color: blue;
`;