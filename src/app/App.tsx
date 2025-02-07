import { BaseCard } from '@/common/components/BaseCard/BaseCard'
import { CustomButton } from '@/common/components/Button/CustomButton'
import ThemeToggle from '@/common/components/ThemeToogle/ThemeToggle'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Register from './pages/Authorization/RegisterPage'

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
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
