type Props = {
  children: React.ReactNode
  radius?: 'sm' | 'md' | 'lg'
  className?: string
}

export const BaseCard = ({ children, radius, className }: Props) => {
  const baseClasses =
    'border border-card-border dark:border-card-border-dark bg-light-bg dark:bg-card-background'

  const radiusClasses = {
    sm: 'rounded-[8px]',
    md: 'rounded-[16px]',
    lg: 'rounded-[24px]',
  }[radius || 'md']

  return <div className={`${baseClasses} ${radiusClasses} ${className}`}>{children}</div>
}
