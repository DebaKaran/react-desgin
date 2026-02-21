import { MyComponentContainer } from './styled/MyComponent.styled'
import MyComponent from './MyComponent'

const MyComponentWrapper = () => {
  return (
    <MyComponentContainer>
        <MyComponent />
    </MyComponentContainer>
  )
}

export default MyComponentWrapper