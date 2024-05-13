import { classNames } from '@/styles/styling'
import React, { forwardRef } from 'react'
import { INPUT_STYLES, ROOT_INPUT_STYLES } from '../../styles/input'

export interface TextAreaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  /**
   * Disables the Text Area.
   * @default false
   */
  disabled?: boolean
  /**
   * Enables the error mode for the Text Area.
   * @default false
   */
  error?: boolean
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ disabled = false, error = false, children, ...rest }: TextAreaProps, ref) => {
    return (
      <textarea
        className={classNames(
          ROOT_INPUT_STYLES,
          error ? INPUT_STYLES.error : '',
          disabled ? INPUT_STYLES.disabled : '',
        )}
        ref={ref}
        disabled={disabled}
        {...rest}
      >
        {children}
      </textarea>
    )
  },
)
export default TextArea
