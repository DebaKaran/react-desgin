import ScreenSplit from './ScreenSplit'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'

const ScreenSplitterWrapper = () => {
  return (
    <ScreenSplit left={<LeftPanel />} 
    leftWeight="1"
    right={<RightPanel />} 
    rightWeight="4"/>
  );
}

export default ScreenSplitterWrapper