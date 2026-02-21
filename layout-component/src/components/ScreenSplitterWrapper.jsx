import ScreenSplit from './ScreenSplit'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'

const ScreenSplitterWrapper = () => {
  return (
    <ScreenSplit left={<LeftPanel />} right={<RightPanel />} />
  );
}

export default ScreenSplitterWrapper