import { Checkbox, Field, Label } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/16/solid'

type BaseCheckboxProps = {
  label: React.ReactNode
  checked: boolean
  onChange: (checked: boolean) => void
  boxClassName?: string
  iconClassName?: string
}

const BaseCheckbox = ({
  label,
  checked,
  onChange,
  boxClassName,
  iconClassName,
}: BaseCheckboxProps) => (
  <Field className="flex items-center gap-2">
    <Checkbox
      checked={checked}
      onChange={onChange}
      className={`group block size-6 rounded-md border bg-white/10 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-white
      ${boxClassName}`}
    >
      <CheckIcon
        className={`hidden size-4 fill-black group-data-[checked]:block ${iconClassName}`}
      />
    </Checkbox>
    <Label>{label}</Label>
  </Field>
)

export default BaseCheckbox
