import { BaseButton } from '@/common/components/BaseButton/BaseButton'
import BaseCheckbox from '@/common/components/BaseCheckbox'
import { BaseInput } from '@/common/components/BaseInput/BaseInput'
import MainIcon from '@/common/components/icons/MainIcon'
import { PasswordInput } from '@/common/components/PasswordInput/PasswordInput'
import { useThemeContext } from '@/common/components/ThemeToogle/useThemeContext'
import { Controller, useForm } from 'react-hook-form'

type FormData = {
  username: string
  email: string
  password: string
  confirmPassword: string
  agreeToTerms: boolean
}

const RegisterForm = () => {
  const { theme } = useThemeContext()
  const isDark = theme === 'dark'

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <div className="min-w-[350px] flex flex-col items-center gap-y-20">
      <div className="w-full flex justify-between">
        {isDark ? (
          <MainIcon colorIcon="#121212" colorText="white" />
        ) : (
          <MainIcon colorIcon="white" colorText="#0D1117" />
        )}

        <h2 className="text-xl text-text-secondary dark:text-primary">Регистрация</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-4">
            <BaseInput
              {...register('username', {
                required: 'Поле обязательно',
                minLength: { value: 6, message: 'Мин. 6 символов' },
              })}
              error={errors.username?.message}
              placeholder="Никнейм"
            />
            <BaseInput
              placeholder="Почта"
              {...register('email', {
                required: 'Поле обязательно',
                minLength: { value: 6, message: 'Мин. 6 символов' },
              })}
              error={errors.email?.message}
            />
            <PasswordInput
              placeholder="Пароль"
              {...register('password', {
                required: 'Поле обязательно',
                minLength: { value: 6, message: 'Мин. 6 символов' },
              })}
              error={errors.password?.message}
            />
            <PasswordInput
              placeholder="Повторите пароль"
              {...register('confirmPassword', {
                required: 'Поле обязательно',
                minLength: { value: 6, message: 'Мин. 6 символов' },
              })}
              error={errors.confirmPassword?.message}
            />
            <div className="flex items-center py-4">
              <Controller
                name="agreeToTerms"
                control={control}
                rules={{ required: 'Поле обязательно' }}
                render={({ field }) => (
                  <BaseCheckbox
                    {...field}
                    checked={field.value}
                    error={errors.agreeToTerms?.message}
                    label={
                      <span>
                        Я согласен с{' '}
                        <a href="#" className="">
                          правилами пользования
                        </a>
                      </span>
                    }
                  />
                )}
              />
            </div>
            <BaseButton type="submit">Зарегистрироваться</BaseButton>
            <BaseButton variant="outlined">Войти в существующий аккаунт</BaseButton>
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

export default RegisterForm
