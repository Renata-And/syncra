import { createContext } from 'react'
import { Theme } from './useTheme'

interface ThemeContextProps {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)
