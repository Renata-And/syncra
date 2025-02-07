import { BaseCard } from '@/common/components/BaseCard/BaseCard'
import { CustomButton } from '@/common/components/Button/CustomButton'
import ThemeToggle from '@/common/components/ThemeToogle/ThemeToggle'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="font-klein bg-light-bg dark:bg-dark-bg">
      <ThemeToggle />
      <CustomButton variant="primary">Name</CustomButton>
      <CustomButton variant="outlined" padding="lg">
        Name name
      </CustomButton>
      <BaseCard>
        <p>Hello</p>
      </BaseCard>
    </div>
  )
}

export default App
