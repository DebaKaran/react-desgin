import './App.css'
import ControlledFeedbackForm from './controlled/ControlledFeedbackForm'
import FeedbackForm from './messy/FeedbackForm'
import AutoFocusInput from './state_refs/components/AutoFocusInput'
import Counter from './state_refs/components/Counter'
import CounterWithRef from './state_refs/components/CounterWithRef'

function App() {

  return (
    <>
      {/* <Counter />
      <AutoFocusInput /> */}
      {/* <CounterWithRef /> */}
      {/* <FeedbackForm /> */}
      <ControlledFeedbackForm />
    </>
  )
}

export default App
