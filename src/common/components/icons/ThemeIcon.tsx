interface ThemeIconProps {
  width?: number
  height?: number
  color?: string
  className?: string
}

export const ThemeIcon = ({ width, height, color }: ThemeIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : '24'}
      height={height ? height : '24'}
      viewBox={`0 0 ${width ? width : '24'} ${height ? height : '24'}`}
    >
      <g fill="none">
        <path
          fill={color ? color : 'currentColor'}
          d="M2.75 12A9.25 9.25 0 0 0 12 21.25V2.75A9.25 9.25 0 0 0 2.75 12"
        />
        <path
          stroke={color ? color : 'currentColor'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 21.25a9.25 9.25 0 0 0 0-18.5m0 18.5a9.25 9.25 0 0 1 0-18.5m0 18.5V2.75"
        />
      </g>
    </svg>
  )
}
