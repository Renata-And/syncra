import { BaseSwitch } from '../BaseSwitch/BaseSwitch'
import { ThemeIcon } from '../icons/ThemeIcon'
import { useThemeContext } from './useThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext()
  const isDark = theme === 'dark'
  return (
    <div className="flex items-center space-x-3">
      {isDark ? <ThemeIcon color="#6c6ce1" /> : <ThemeIcon color="#667085" />}
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
