import { BASE_INPUT_STYLES, INPUT_STYLES, ROOT_INPUT_STYLES } from '@/styles/input'
import { classNames } from '@/styles/styling'
import React, { forwardRef, useCallback } from 'react'

export interface NumberFieldProps extends React.ComponentPropsWithoutRef<'input'> {
  /**
   * Disables the Number Field.
   * @default false
   */
  disabled?: boolean
  /**
   * Enables the error mode for the Number Field.
   * @default false
   */
  error?: boolean
  /**
   * Icon to display in the Number Field.
   */
  startIcon?: React.ReactNode
  /**
   * Icon to display in the Number Field.
   */
  endIcon?: React.ReactNode
  /**
   * Classname for the number field
   */
  inputClassName?: string
}

const NumberField = forwardRef<HTMLInputElement, NumberFieldProps>(
  (
    { className, inputClassName, startIcon, endIcon, disabled, onChange, error = false, ...rest }: NumberFieldProps,
    ref,
  ) => {
    const numberRef = React.useRef<HTMLInputElement | null>(null)

    const handleInputChange = useCallback(() => {
      if (numberRef.current) {
        const inputValue = numberRef.current.value
        // Remove any non-digit characters except for '.', '-', and '+' signs
        const filteredValue = inputValue.replace(/[^0-9.-]+/g, '')
        if (inputValue !== filteredValue) {
          numberRef.current.value = filteredValue
        }
      }
    }, [numberRef])

    return (
      <div
        className={classNames(
          className,
          ROOT_INPUT_STYLES,
          error ? INPUT_STYLES.error : '',
          disabled ? INPUT_STYLES.disabled : '',
        )}
      >
        {startIcon && startIcon}
        <input
          type="number"
          min={0}
          className={classNames(
            inputClassName,
            error ? '!text-red-600' : '',
            disabled ? 'disabled:bg-transparent' : '',
            BASE_INPUT_STYLES,
            'border-none !ring-0 focus:ring-0',
          )}
          ref={(e) => {
            if (typeof ref === 'function') {
              ref(e)
            } else if (ref) {
              ref.current = e
            }
            numberRef.current = e
          }}
          disabled={disabled}
          onChange={(e) => {
            handleInputChange()
            onChange?.(e)
          }}
          {...rest}
        />
        {endIcon && endIcon}
      </div>
    )
  },
)

NumberField.displayName = 'NumberField'
export default NumberField
