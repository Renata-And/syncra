interface SvgIconProps {
  src: string
  size?: number
  color?: string
  className?: string
}

const SvgIcon = ({ src, size = 24, color = 'currentColor', className }: SvgIconProps) => {
  return (
    <img src={src} alt="icon" width={size} height={size} className={className} style={{ color }} />
  )
}

export default SvgIcon
