import { CustomButton } from '../common/Button/CustomButton'
import { Card } from '../common/Card/Card'
import ThemeToggle from '../features/ThemeToogle/ThemeToggle'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="font-klein bg-light-bg dark:bg-dark-bg">
      <ThemeToggle />
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
