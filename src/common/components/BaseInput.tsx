import { Description, Field, Input, Label } from '@headlessui/react'
import clsx from 'clsx'
import React from 'react'

type BaseInputProps = {
  label?: string
  description?: string
  placeholder?: string
  type?: string
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  padding?: 'sm' | 'md' | 'lg'
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  disabled?: boolean
  className?: string
  classLabel?: string
  classDesc?: string
}

export const BaseInput = (props: BaseInputProps) => {
  const {
    label,
    description,
    placeholder,
    type = 'text',
    radius = '2xl',
    padding = 'md',
    value,
    onChange,
    required = false,
    disabled = false,
    className,
    classLabel,
    classDesc,
  } = props

  const baseClasses =
    'block w-full duration-100 focus:outline-none focus:ring-2 focus:border-stroke/80 dark:focus:border-dark-stroke/80 border border-stroke dark:border-dark-stroke text-text-secondary'

  const radiusClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
  }[radius]

  const paddingClasses = {
    sm: 'px-3 py-1',
    md: 'px-4 py-2',
    lg: 'px-5 py-3',
  }[padding]

  const inputClasses = clsx(baseClasses, radiusClasses, paddingClasses, className)

  return (
    <Field>
      {label && (
        <Label className={`text-sm/6 font-medium text-text-main dark:text-white ${classLabel}`}>
          {label}
        </Label>
      )}
      {description && (
        <Description className={`text-sm/6 text-text-main dark:text-white ${classDesc}`}>
          {description}
        </Description>
      )}
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={inputClasses}
      />
    </Field>
  )
}
