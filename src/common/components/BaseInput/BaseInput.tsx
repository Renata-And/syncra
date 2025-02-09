import { Field, Input, Label } from '@headlessui/react'
import { ChangeHandler, RefCallBack } from 'react-hook-form'

type BaseInputProps = {
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

export const BaseInput = (props: BaseInputProps) => {
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

  const variantClasses = size === 'sm' ? 'rounded-lg px-3 py-2' : 'rounded-2xl px-4 py-3'

  return (
    <Field className="flex flex-col gap-2 relative">
      {label && <Label className="text-text-main dark:text-text-secondary">{label}</Label>}
      <Input
        ref={ref}
        name={name}
        type={'text'}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 ring ring-card-border dark:ring-card-border-dark text-text-main dark:text-white  bg-light-bg dark:bg-card-background focus:ring-2 focus:ring-card-border dark:focus:ring-card-border-dark placeholder-text-secondary ${variantClasses} ${className}`}
      />
      {error && <span className="text-xs text-error absolute right-0 -bottom-4">{error}</span>}
    </Field>
  )
}
