import { LeftPanelContainer, RightPanelContainer, ScreenSplitContainer } from "./styled/ScreenSplit.styled"

const ScreenSplit = ({left, right}) => {
  return (
      <ScreenSplitContainer>
        <LeftPanelContainer>
          {left}
        </LeftPanelContainer>
        <RightPanelContainer>
          {right}
        </RightPanelContainer>
      </ScreenSplitContainer>
  )
}

export default ScreenSplit