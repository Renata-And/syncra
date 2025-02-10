import { ThemeProvider } from '@/common/components/ThemeToogle/ThemeProvider'
import ThemeToggle from '@/common/components/ThemeToogle/ThemeToggle'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import AdminDashboard from './pages/panel/Dashboard'
import AdminDeal from './pages/panel/Deal'
import AdminDeals from './pages/panel/Deals'
import AdminFinance from './pages/panel/Finance'
import AdminOrder from './pages/panel/Order'
import AdminOrders from './pages/panel/Orders'
import AdminPayout from './pages/panel/Payout'
import AdminProfile from './pages/panel/Profile'
import { LabelInfo } from '@/common/components/LabelInfo/LabelInfo'
import { Status } from '@/common/components/Status/Status'
import { BaseCard } from '@/common/components/BaseCard/BaseCard'

// interface ProtectedRouteProps {
//   children: React.ReactElement
// }

// const isAuthenticated = (): boolean => {
//   const token = localStorage.getItem('token')
//   return !!token
// }

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
//   if (!isAuthenticated()) {
//     return <Navigate to="/login" replace />
//   }
//   return children
// }

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col items-center justify-evenly border-light-bg dark:bg-dark-bg">
        <ThemeToggle />
        <Router>
          <Routes>
            <Route
              path="/login"
              element={<Login />}
              // element={isAuthenticated() ? <Navigate to="/admin/dashboard" replace /> : <Login />}
            />
            <Route path="/register" element={<Register />} />

            <Route
              path="/panel"
              element={
                <AdminDashboard />
                // <ProtectedRoute>
                //   <AdminDashboard />
                // </ProtectedRoute>
              }
            >
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="profile" element={<AdminProfile />} />
              <Route path="deals" element={<AdminDeals />} />
              <Route path="deal/:id" element={<AdminDeal />} />
              <Route path="payout" element={<AdminPayout />} />
              <Route path="finance" element={<AdminFinance />} />
              <Route path="orders" element={<AdminOrders />} />
              <Route path="orders/:id" element={<AdminOrder />} />
            </Route>

            <Route path="/" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <LabelInfo type="less">Меньше, чем вчера на 12 %</LabelInfo>
        <LabelInfo type="more">Меньше, чем вчера на 12 %</LabelInfo>
        <LabelInfo type="more" size="sm">
          Больше, чем вчера на 12 %
        </LabelInfo>
        <BaseCard className="p-4 flex flex-col gap-2">
          <Status type="active">Активен</Status>
          <Status type="canceled">Активен</Status>
          <Status type="completed">Активен</Status>
          <Status type="inProgress">Активен</Status>
          <Status type="active" size="sm">
            Активен
          </Status>
          <Status type="canceled" size="sm">
            Активен
          </Status>
          <Status type="inProgress" size="sm">
            Активен
          </Status>
        </BaseCard>
      </div>
    </ThemeProvider>
  )
}

export default App
