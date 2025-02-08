import { BaseSwitch } from '../BaseSwitch'
import { ThemeIcon } from '../icons/ThemeIcon'
import { useTheme } from './useTheme'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <div className="flex items-center space-x-3">
      {theme === 'light' ? <ThemeIcon color="#667085" /> : <ThemeIcon color="#6c6ce1" />}
      <span className="w-24 text-sm font-medium text-text-secondary dark:text-primary-dark">
        {isDark ? 'Светлая тема' : 'Тёмная тема'}
      </span>
      <BaseSwitch
        checked={isDark}
        onChange={toggleTheme}
        bgClassName={isDark ? 'bg-primary-dark' : 'bg-light-purple'}
        thumbClassName={isDark ? 'bg-white' : 'bg-text-secondary'}
      />
    </div>
  )
}
export default ThemeToggle
