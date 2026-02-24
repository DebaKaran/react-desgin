import './App.css'
import UserProfile from './messy-way/components/UserProfile'
import UserProfileContainer from './with-pattern/components/UserProfileContainer'

function App() {

  return (
    <>
      {/* <UserProfile userId={1} /> */}
      <UserProfileContainer userId={1} />
    </>
  )
}

export default App
