import moreIcon from '@/assets/icons/more.svg'
import lessIcon from '@/assets/icons/less.svg'

type LabelInfoProps = {
  children: React.ReactNode
  type: 'more' | 'less'
  size?: 'sm' | 'md'
  className?: string
}

export const LabelInfo = ({ children, size, type, className }: LabelInfoProps) => {
  const baseClasses = `rounded-lg py-1 pr-[10px]`

  const typeClasses = {
    more: `bg-light-purple dark:bg-dark-bg-more text-primary`,
    less: `bg-canceled dark:bg-dark-bg-less text-less-label`,
  }[type || 'more']

  const sizeClasses = {
    sm: 'text-sm pl-[30px]',
    md: 'text-base pl-[34px]',
  }[size || 'md']

  const iconSrc = type === 'more' ? moreIcon : lessIcon

  const iconClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
  }[size || 'md']

  return (
    <div className="relative">
      <img
        src={iconSrc}
        className={`absolute z-1 top-[50%] left-[10px] -translate-y-[50%] ${iconClasses}`}
        alt="trend icon"
      />
      <div className={`${baseClasses} ${typeClasses} ${sizeClasses} ${className ? className : ''}`}>
        {children}
      </div>
    </div>
  )
}
