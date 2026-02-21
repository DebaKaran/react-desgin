import { Pane, ScreenSplitContainer } from "./styled/ScreenSplit.styled"

const ScreenSplit = ({left, leftWeight, leftBg , right, rightWeight, rightBg}) => {
  return (
      <ScreenSplitContainer>
        <Pane weight={leftWeight} bg={leftBg}>
          {left}
        </Pane>
        <Pane weight={rightWeight} bg={rightBg}>
          {right}
        </Pane>
      </ScreenSplitContainer>
  )
}

export default ScreenSplit