import { Button } from '@headlessui/react'

type Props = {
  children: React.ReactNode
  type?: 'button' | 'reset' | 'submit'
  variant?: 'primary' | 'outlined'
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  padding?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const BaseButton = (props: Props) => {
  const {
    children,
    variant = 'primary',
    radius,
    padding = 'md',
    onClick,
    disabled,
    type = 'button',
  } = props

  const baseClasses =
    'font-medium duration-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:focus-visible:outline-primary-dark'
  const variantClasses =
    variant === 'primary'
      ? 'text-white bg-primary hover:bg-primary-hover disabled:bg-primary-disabled aria-disabled:bg-primary-disabled dark:bg-primary-dark dark:hover:bg-primary-dark-hover dark:disabled:bg-primary-dark-disabled dark:aria-disabled:bg-primary-dark-disabled '
      : 'ring-1 ring-inset ring-current text-primary dark:text-primary-dark hover:bg-light-purple disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-card-background dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-primary-dark'

  const radiusClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
  }[radius || '2xl']

  const paddingClasses = {
    sm: 'px-[45px] py-[4px]',
    md: 'px-[45px] py-[8px]',
    lg: 'px-[45px] py-[12px]',
  }[padding || 'md']

  const buttonClasses = `${baseClasses} ${variantClasses} ${radiusClasses} ${paddingClasses}`

  return (
    <Button type={type} onClick={onClick} disabled={disabled} className={buttonClasses}>
      {children}
    </Button>
  )
}
