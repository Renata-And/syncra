type PasswordIndicatorProps = {
  strength: 'medium' | 'strong' | 'weak'
}
export const PasswordIndicator = ({ strength }: PasswordIndicatorProps) => {
  let color = 'bg-error'
  let text = 'Слабый'

  if (strength === 'medium') {
    color = 'bg-warning'
    text = 'Средний'
  } else if (strength === 'strong') {
    color = 'bg-succsess'
    text = 'Сильный'
  }

  return (
    <div className="w- full flex gap-x-2 items-center justify-center transition-colors duration-200 ease-in-out">
      <div className={`w-[75px] h-2 rounded-4xl ${color}`}></div>
      <div className="text-text-main dark:text-text-secondary">{text}</div>
    </div>
  )
}
