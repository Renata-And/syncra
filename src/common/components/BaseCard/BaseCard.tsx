type Props = {
  children: React.ReactNode
  radius?: 'sm' | 'md' | 'lg'
}

export const BaseCard = (props: Props) => {
  const { children, radius } = props

  const baseClasses =
    'border border-card-border dark:border-card-border-dark bg-light-bg dark:bg-card-background'

  const radiusClasses = {
    sm: 'rounded-[8px]',
    md: 'rounded-[16px]',
    lg: 'rounded-[24px]',
  }[radius || 'md']
  const cardClasses = `${baseClasses} ${radiusClasses}`

  return <div className={cardClasses}>{children}</div>
}
