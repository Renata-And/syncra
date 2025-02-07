import { Switch } from '@headlessui/react'
import { useTheme } from './useTheme'
import { ThemeIcon } from '../icons/ThemeIcon'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <div className="flex items-center space-x-3">
      {theme === 'light' ? <ThemeIcon color="#667085" /> : <ThemeIcon color="#6c6ce1" />}
      <span className="w-24 text-sm font-medium text-text-secondary dark:text-primary-dark">
        {isDark ? 'Светлая тема' : 'Тёмная тема'}
      </span>
      <Switch
        checked={isDark}
        onChange={toggleTheme}
        className={`group relative flex h-7 w-14 cursor-pointer rounded-full 
                    p-1 transition-colors duration-200 ease-in-out focus:outline-none
                    data-[focus]:outline-1 data-[focus]:outline-white 
                    ${isDark ? 'bg-primary-dark' : 'bg-light-purple'}
                  `}
      >
        <span
          aria-hidden="true"
          className={`pointer-events-none inline-block size-5 translate-x-0 rounded-full 
                      bg-blend-color-dodge ring-0 shadow-lg transition duration-200 
                      ease-in-out group-data-[checked]:translate-x-7
                      ${isDark ? 'bg-white' : 'bg-text-secondary'}
                    `}
        />
      </Switch>
    </div>
  )
}
export default ThemeToggle
