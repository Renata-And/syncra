type Props = {
  children: React.ReactNode
  radius?: 'sm' | 'md' | 'lg'
}

export const Card = (props: Props) => {
  const { children, radius } = props

  const baseClasses = `border border-border`
  const radiusClasses = {
    sm: 'rounded-[8px]',
    md: 'rounded-[16px]',
    lg: 'rounded-[24px]',
  }[radius || 'md']
  const cardClasses = `${baseClasses} ${radiusClasses}`

  return <div className={cardClasses}>{children}</div>
}
