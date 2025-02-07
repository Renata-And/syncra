import { Switch } from '@headlessui/react'
import clsx from 'clsx'

type BaseSwitchProps = {
  checked: boolean
  onChange: (checked: boolean) => void
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  bgClassName?: string
  thumbClassName?: string
  disabled?: boolean
  className?: string
}

export const BaseSwitch = (props: BaseSwitchProps) => {
  const {
    checked,
    onChange,
    radius = '2xl',
    bgClassName = '',
    thumbClassName = '',
    disabled = false,
    className,
  } = props

  const radiusClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
  }[radius]

  const baseBgClasses = clsx(
    'group relative flex h-7 w-14 cursor-pointer rounded-full p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white',
    radiusClasses,
    bgClassName,
    {
      'opacity-50 cursor-not-allowed': disabled,
    }
  )

  const baseThumbClasses = clsx(
    'pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-blend-color-dodge ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7',
    thumbClassName
  )

  return (
    <Switch
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      className={clsx(baseBgClasses, className)}
    >
      <span aria-hidden="true" className={baseThumbClasses} />
    </Switch>
  )
}
