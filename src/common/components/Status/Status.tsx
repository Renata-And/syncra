type StatusProps = {
  children: React.ReactNode
  type: 'active' | 'canceled' | 'inProgress' | 'completed'
  size?: 'sm' | 'md'
  className?: string
}

export const Status = ({ children, size, type, className }: StatusProps) => {
  const baseClasses =
    'relative rounded-full pl-[30px] pr-[16px] before:absolute before:h-[6px] before:w-[6px] before:rounded-full before:top-[50%] before:left-[16px] before:-translate-y-[50%]'

  const typeClasses = {
    active: 'bg-active dark:bg-dark-active text-text-completed before:bg-text-completed',
    canceled: 'bg-canceled dark:bg-dark-bg-less text-error before:bg-error',
    inProgress:
      'bg-light-purple dark:bg-card-border-dark text-text-secondary before:bg-text-secondary',
    completed: 'bg-completed dark:bg-dark-active text-text-completed before:bg-text-completed',
  }[type || 'active']

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
  }[size || 'md']

  return (
    <div className={`${baseClasses} ${typeClasses} ${sizeClasses} ${className ? className : ''}`}>
      {children}
    </div>
  )
}
