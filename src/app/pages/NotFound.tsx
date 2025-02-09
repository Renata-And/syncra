import { BaseButton } from '@/common/components/BaseButton/BaseButton'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/login')
  }

  return (
    <div className="flex flex-col gap-y-6 items-center text-base text-primary dark:text-primary-dark">
      <h1>404 - Страница не найдена</h1>
      <p>Извините, запрашиваемая страница не существует.</p>

      <BaseButton variant="outlined" onClick={handleClick}>
        {' '}
        Вернуться на главную
      </BaseButton>
    </div>
  )
}

export default NotFound
