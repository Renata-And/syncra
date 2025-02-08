import { FC, ReactNode } from 'react'
import { ThemeContext } from './ThemeContext'
import { useTheme } from './useTheme'

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { theme, toggleTheme } = useTheme()

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
