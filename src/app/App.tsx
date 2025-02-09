import ThemeToggle from '@/common/components/ThemeToogle/ThemeToggle'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { BaseButton } from '@/common/components/BaseButton/BaseButton'
import { BaseCard } from '@/common/components/BaseCard/BaseCard'
import { ThemeProvider } from '@/common/components/ThemeToogle/ThemeProvider'
import { Counter } from '@/features/counter/Counter'
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

          <Counter />
          <ThemeToggle />
          <BaseButton variant="primary">Name</BaseButton>
          <BaseButton variant="outlined" padding="lg">
            Name
          </BaseButton>
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
