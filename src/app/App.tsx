import ThemeToggle from '@/common/components/ThemeToogle/ThemeToggle'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { BaseCard } from '@/common/components/BaseCard/BaseCard'
import { CustomButton } from '@/common/components/Button/CustomButton'
import { ThemeProvider } from '@/common/components/ThemeToogle/ThemeProvider'
import Register from './pages/Authorization/RegisterPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <div className="font-klein min-h-screen flex items-center justify-center border-light-bg dark:bg-dark-bg text-main-black dark:text-white">
        <div className="flex flex-col items-center gap-3">
          <Router>
            <nav>
              <ul>
                <li className="hover:text-primary dark:hover:text-primary-dark duration-100">
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="/register" element={<Register />} />
            </Routes>
          </Router>
          <ThemeToggle />
          <CustomButton variant="primary">Name</CustomButton>
          <CustomButton variant="outlined" padding="lg">
            Name
          </CustomButton>
          <BaseCard>
            <div className="p-6">
              <p>Hello</p>
            </div>
          </BaseCard>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
