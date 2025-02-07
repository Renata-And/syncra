import BaseCheckbox from '@/common/components/BaseCheckbox'
import { BaseInput } from '@/common/components/BaseInput'
import { CustomButton } from '@/common/components/Button/CustomButton'
import { useState } from 'react'

type FormData = {
  username: string
  email: string
  password: string
  confirmPassword: string
  referral: string
  agreed: boolean
}

const RegisterForm = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    referral: '',
    agreed: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitted data:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 max-w-sm mx-auto p-6">
      <BaseInput placeholder="Никнейм" value={formData.username} onChange={handleChange} />
      <BaseInput placeholder="Почта" type="email" value={formData.email} onChange={handleChange} />
      <BaseInput
        placeholder="Пароль"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      <BaseInput
        placeholder="Повторите пароль"
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <BaseInput placeholder="Реферальный код" value={formData.referral} onChange={handleChange} />
      <BaseCheckbox
        checked={formData.agreed}
        onChange={() => handleChange}
        label={
          <span>
            Я согласен с{' '}
            <a href="#" className="">
              правилами пользования
            </a>
          </span>
        }
      />
      <CustomButton>Зарегистрироваться</CustomButton>
    </form>
  )
}

export default RegisterForm
