import { Button } from '@headlessui/react'

type Props = {
  children: React.ReactNode
  variant?: 'primary' | 'outlined'
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  padding?: 'sm' | 'md' | 'lg'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
}

export const CustomButton = (props: Props) => {
  const { children, variant = 'primary', radius, padding = 'md', onClick, type = 'button' } = props

  const baseClasses = 'font-medium duration-100'
  const variantClasses =
    variant === 'primary'
      ? 'bg-primary text-text-white hover:bg-primary-hover focus:bg-primary-hover'
      : 'bg-transparent border border-primary text-primary hover:border-primary-hover hover:text-primary-hover focus:text-primary-hover'

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
    <Button className={buttonClasses} onClick={onClick} type={type}>
      {children}
    </Button>
  )
}
