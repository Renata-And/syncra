import { Field, Input, Label } from '@headlessui/react'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { ChangeHandler, RefCallBack } from 'react-hook-form'

type PasswordInputProps = {
  ref: RefCallBack
  name: string
  onChange: ChangeHandler
  onBlur: ChangeHandler
  size?: 'sm' | 'md'
  className?: string
  label?: string
  placeholder?: string
  error?: string
}

export const PasswordInput = (props: PasswordInputProps) => {
  const {
    ref,
    name,
    onChange,
    onBlur,
    className,
    label = '',
    size = 'sm',
    placeholder,
    error,
  } = props
  const [isShow, setIsShow] = useState(false)

  const variantClasses = size === 'sm' ? 'rounded-lg px-3 py-2' : 'rounded-2xl px-4 py-3'

  return (
    <Field className="relative flex flex-col gap-2">
      {label && <Label className="text-text-main dark:text-text-secondary">{label}</Label>}
      <Input
        ref={ref}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        type={isShow ? 'text' : 'password'}
        placeholder={placeholder}
        className={`relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 ring ring-card-border dark:ring-card-border-dark text-text-main dark:text-white bg-light-bg dark:bg-card-background focus:ring-2 focus:ring-card-border dark:focus:ring-card-border-dark placeholder-text-secondary ${variantClasses} ${className ? className : ''}`}
      />
      <button
        onClick={() => setIsShow((prev) => !prev)}
        className="absolute right-4 top-[50%] -translate-y-[35%]"
      >
        {isShow ? (
          <EyeOff className="w-5 h-5 text-text-secondary" />
        ) : (
          <Eye className="w-5 h-5 text-text-secondary" />
        )}
      </button>
      {error && <span className="text-xs text-error absolute right-0 -bottom-4">{error}</span>}
    </Field>
  )
}
