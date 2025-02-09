import { Field, Input, Label } from '@headlessui/react'
import { ChangeEventHandler, useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

type PasswordInputProps = {
  size?: 'sm' | 'md'
  className?: string
  name?: string
  label?: string
  placeholder?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export const PasswordInput = (props: PasswordInputProps) => {
  const { className, label = '', name = '', size = 'sm', placeholder } = props
  const [isShow, setIsShow] = useState(false)

  const variantClasses = size === 'sm' ? 'rounded-lg px-3 py-2' : 'rounded-2xl px-4 py-3'

  return (
    <Field className="relative flex flex-col gap-2">
      <Label className="text-text-main dark:text-text-secondary">{label}</Label>
      <Input
        className={`relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 ring ring-card-border dark:ring-card-border-dark text-text-main dark:text-white bg-light-bg dark:bg-card-background focus:ring-2 focus:ring-card-border dark:focus:ring-card-border-dark placeholder-text-secondary ${variantClasses} ${className}`}
        name={name}
        type={isShow ? 'text' : 'password'}
        placeholder={placeholder}
      />
      <button
        onClick={() => setIsShow((prev) => !prev)}
        className="absolute right-4 top-[50%] -translate-y-[50%]"
      >
        {isShow ? (
          <EyeOff className="w-5 h-5 text-text-secondary" />
        ) : (
          <Eye className="w-5 h-5 text-text-secondary" />
        )}
      </button>
    </Field>
  )
}
