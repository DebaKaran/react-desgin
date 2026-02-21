import ScreenSplit from './ScreenSplit'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'

const ScreenSplitterWrapper = () => {
  return (
    <ScreenSplit left={<LeftPanel name="Deba"/>} 
    leftWeight="1"
    leftBg="green"
    right={<RightPanel message="Learn React"/>} 
    rightWeight="4"
    rightBg="blue"/>
  );
}

export default ScreenSplitterWrapper