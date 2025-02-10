import { Checkbox, Field, Label } from '@headlessui/react'
import { Check } from 'lucide-react'

type BaseCheckboxProps = {
  label: React.ReactNode
  checked: boolean
  onChange: (checked: boolean) => void
  boxClassName?: string
  iconClassName?: string
  error?: string
}

const BaseCheckbox = ({
  label,
  checked,
  onChange,
  boxClassName,
  iconClassName,
  error,
}: BaseCheckboxProps) => (
  <Field className="w-full flex items-center gap-2 relative">
    <Checkbox
      checked={checked}
      onChange={onChange}
      className={`group block size-6 border border-card-border rounded-md bg-white p-1 ring-inset data-[checked]:bg-primary data-[checked]:dark:bg-primary-dark data-[checked]:border-none
      ${boxClassName}`}
    >
      <Check
        color="white"
        className={`hidden size-4 fill-black group-data-[checked]:block ${iconClassName}`}
      />
    </Checkbox>
    <Label>{label}</Label>
    {error && <span className="text-xs text-error absolute right-0 -bottom-4">{error}</span>}
  </Field>
)

export default BaseCheckbox
