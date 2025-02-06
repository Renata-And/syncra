import { CustomButton } from '../common/Button/CustomButton'
import { Card } from '../common/Card/Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="font-klein">
      <CustomButton variant="primary">Name</CustomButton>
      <CustomButton variant="outlined" padding="lg">
        Name name
      </CustomButton>
      <Card>
        <p>Hello</p>
      </Card>
    </div>
  )
}

export default App
