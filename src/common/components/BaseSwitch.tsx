import { Switch } from '@headlessui/react'

type BaseSwitchProps = {
  checked: boolean
  onChange: (checked: boolean) => void
  bgClassName?: string
  thumbClassName?: string
}

const BaseSwitch = ({
  checked,
  onChange,
  bgClassName = '',
  thumbClassName = '',
}: BaseSwitchProps) => {
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      className={`group relative flex h-7 w-14 cursor-pointer rounded-full p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white ${bgClassName}`}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-blend-color-dodge ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7 ${thumbClassName}`}
      />
    </Switch>
  )
}

export default BaseSwitch
