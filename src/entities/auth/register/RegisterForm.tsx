import BaseCheckbox from '@/common/components/BaseCheckbox'
import { BaseInput } from '@/common/components/BaseInput'
import { CustomButton } from '@/common/components/Button/CustomButton'
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

const RegisterForm = () => {
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
    <div className="flex flex-col items-center gap-y-20">
      <div className="w-full flex justify-between">
        {isDark ? (
          <MainIcon colorIcon="#121212" colorText="white" />
        ) : (
          <MainIcon colorIcon="white" colorText="#0D1117" />
        )}

        <h2 className="text-xl text-text-secondary dark:text-primary">Регистрация</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4">
            <BaseInput placeholder="Никнейм" name={formData.username} onChange={handleChange} />
            <BaseInput
              placeholder="Почта"
              type="email"
              name={formData.email}
              onChange={handleChange}
            />
            <BaseInput
              placeholder="Пароль"
              type="password"
              name={formData.password}
              onChange={handleChange}
              required
            />
            <BaseInput
              placeholder="Повторите пароль"
              type="password"
              name={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <div className="flex items-center py-4">
              <BaseCheckbox
                checked={formData.agreeToTerms}
                onChange={(checked) => setFormData({ ...formData, agreeToTerms: checked })}
                label={
                  <span>
                    Я согласен с{' '}
                    <a href="#" className="">
                      правилами пользования
                    </a>
                  </span>
                }
              />
            </div>
            <CustomButton type="submit">Зарегистрироваться</CustomButton>
            <CustomButton variant="outlined">Войти в существующий аккаунт</CustomButton>
          </div>
        </form>
      </div>
      <div className="text-center">
        <span className="text-sm text-text-main dark:text-white">
          Контакт поддержки: @tg.channel
        </span>
      </div>
    </div>
  )
}

export default RegisterForm
