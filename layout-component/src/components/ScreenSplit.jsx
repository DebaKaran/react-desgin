import { LeftPanelContainer, RightPanelContainer, ScreenSplitContainer } from "./styled/ScreenSplit.styled"

const ScreenSplit = ({left, leftWeight, right, rightWeight}) => {
  return (
      <ScreenSplitContainer>
        <LeftPanelContainer weight={leftWeight}>
          {left}
        </LeftPanelContainer>
        <RightPanelContainer weight={rightWeight}>
          {right}
        </RightPanelContainer>
      </ScreenSplitContainer>
  )
}

export default ScreenSplit