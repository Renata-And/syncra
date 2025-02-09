import { BaseButton } from '@/common/components/BaseButton/BaseButton'
import { BaseInput } from '@/common/components/BaseInput/BaseInput'
import { PasswordInput } from '@/common/components/PasswordInput/PasswordInput'

import MainIcon from '@/common/components/icons/MainIcon'
import { useThemeContext } from '@/common/components/ThemeToogle/useThemeContext'
import { useState } from 'react'

type FormData = {
  username: string
  email: string
  password: string
  confirmPassword: string
  agreeToTerms: boolean
}

const LoginForm = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : name,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form Data:', formData)
  }

  const { theme } = useThemeContext()
  const isDark = theme === 'dark'

  return (
    <div className="min-w-[350px] flex flex-col items-center gap-y-20">
      <div className="w-full flex justify-between">
        {isDark ? (
          <MainIcon colorIcon="#121212" colorText="white" />
        ) : (
          <MainIcon colorIcon="white" colorText="#0D1117" />
        )}

        <h2 className="text-xl text-text-secondary dark:text-primary">Авторизация</h2>
      </div>
      <div className="w-full">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4">
            <BaseInput placeholder="Почта" name={formData.email} onChange={handleChange} />
            <PasswordInput placeholder="Пароль" name={formData.password} onChange={handleChange} />
            <div className="flex items-center py-4">
              <a href="#">
                <span className="text-sm text-primary dark:text-primary-dark">Забыли пароль?</span>
              </a>
            </div>
            <BaseButton type="submit">Войти</BaseButton>
            <BaseButton variant="outlined">Зарегистрироваться</BaseButton>
          </div>
        </form>
      </div>
      <div className="text-center">
        <span className="text-sm text-text-main dark:text-white">
          Контакт поддержки:{' '}
          <a href="#">
            <span className="text-sm text-primary dark:text-primary-dark">@tg.channel</span>
          </a>
        </span>
      </div>
    </div>
  )
}

export default LoginForm
