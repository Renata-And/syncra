import BaseCheckbox from '@/common/components/BaseCheckbox'
import { BaseInput } from '@/common/components/BaseInput'
import { CustomButton } from '@/common/components/Button/CustomButton'
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
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form Data:', formData)
  }

  return (
    <div className="flex flex-col items-end">
      <h2 className="text-2xl font-bold text-center text-text-main dark:text-white mb-6">
        Регистрация
      </h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4">
            <BaseInput placeholder="Никнейм" value={formData.username} onChange={handleChange} />
            <BaseInput
              placeholder="Почта"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <BaseInput
              placeholder="Пароль"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <BaseInput
              placeholder="Повторите пароль"
              type="password"
              value={formData.confirmPassword}
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

        <div className="mt-4 text-center">
          <span className="text-sm text-text-main dark:text-white">
            Контакт поддержки: @tg.channel
          </span>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
