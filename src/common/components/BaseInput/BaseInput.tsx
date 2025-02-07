import { Field, Input, Label } from '@headlessui/react'
import { ChangeEventHandler } from 'react'

type BaseInputProps = {
  size?: 'sm' | 'md'
  className?: string
  name?: string
  label?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
}

export const BaseInput = (props: BaseInputProps) => {
  const { className, label = '', name = '', onChange, size = 'sm', placeholder } = props

  const variantClasses = size === 'sm' ? 'rounded-lg px-3 py-2' : 'rounded-2xl px-4 py-3'

  return (
    <Field className="flex flex-col gap-2">
      <Label className="text-text-main dark:text-text-secondary">{label}</Label>
      <Input
        className={`relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 ring ring-card-border dark:ring-card-border-dark text-text-main dark:text-white  bg-light-bg dark:bg-card-background focus:ring-2 focus:ring-card-border dark:focus:ring-card-border-dark placeholder-text-secondary ${variantClasses} ${className}`}
        name={name}
        type={'text'}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Field>
  )
}
