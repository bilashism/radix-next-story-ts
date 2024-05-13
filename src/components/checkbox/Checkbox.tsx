import { classNames } from '@/styles/styling'
import React, { forwardRef } from 'react'

const Checkbox = forwardRef<HTMLInputElement, React.ComponentPropsWithoutRef<'input'>>(
  ({ className, disabled, onChange = () => {}, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        type="checkbox"
        disabled={disabled}
        className={classNames(
          className,
          'h-4 w-4 !appearance-none !items-center !justify-center !rounded-[3px] !border-2 !border-primary-200 !text-white focus:!ring-orange-600 disabled:pointer-events-none disabled:border-primary-300 disabled:bg-primary-200 disabled:checked:border-primary-300 disabled:checked:bg-white',
        )}
        {...rest}
        onChange={onChange}
      />
    )
  },
)

export default Checkbox
