import { BaseButton } from '@/common/components/BaseButton/BaseButton'
import { BaseInput } from '@/common/components/BaseInput/BaseInput'
import { PasswordInput } from '@/common/components/PasswordInput/PasswordInput'

import MainIcon from '@/common/components/icons/MainIcon'
import { useThemeContext } from '@/common/components/ThemeToogle/useThemeContext'
import { useForm } from 'react-hook-form'

type FormData = {
  username: string
  email: string
  password: string
  confirmPassword: string
  agreeToTerms: boolean
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  const { theme } = useThemeContext()
  const isDark = theme === 'dark'

  return (
    <div className="max-w-[350px] flex flex-col items-center gap-y-20">
      <div className="w-full flex justify-between items-center">
        {isDark ? (
          <MainIcon colorIcon="#121212" colorText="white" />
        ) : (
          <MainIcon colorIcon="white" colorText="#0D1117" />
        )}

        <h2 className="text-xl text-text-secondary dark:text-primary">Авторизация</h2>
      </div>
      <div className="w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-4">
            <BaseInput
              placeholder="Почта"
              {...register('email', {
                required: 'Поле обязательно',
                minLength: { value: 6, message: 'Мин. 6 символов' },
              })}
              error={errors.email?.message}
              size="md"
            />
            <PasswordInput
              placeholder="Пароль"
              {...register('password', {
                required: 'Поле обязательно',
                minLength: { value: 6, message: 'Мин. 6 символов' },
              })}
              error={errors.password?.message}
              size="md"
            />
            <div className="flex items-center justify-center mb-4">
              <a href="#">
                <span className="text-sm text-primary dark:text-primary-dark">Забыли пароль?</span>
              </a>
            </div>
            <BaseButton type="submit" padding="lg">
              Войти
            </BaseButton>
            <BaseButton variant="outlined" padding="lg">
              Зарегистрироваться
            </BaseButton>
          </div>
        </form>
      </div>
      <div className="text-center">
        <span className="text-sm text-text-main dark:text-text-secondary">
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
