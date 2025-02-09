import { useAppDispatch, useAppSelector } from '@/store/hooks'

import { BaseButton } from '@/common/components/BaseButton/BaseButton'
import { increment, decrement } from './counterSlice'

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-sm">{count}</div>
      <div className="flex items-center gap-2">
        <BaseButton variant="primary" onClick={() => dispatch(increment())}>
          Plus
        </BaseButton>
        <BaseButton variant="outlined" onClick={() => dispatch(decrement())}>
          Minus
        </BaseButton>
      </div>
    </div>
  )
}
