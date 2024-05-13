'use client'

import { classNames } from '@/styles/styling'
import { testId } from '@/utils/testId'
import { Plus } from 'lucide-react'
import React from 'react'
import { useFieldArray, useFormContext, type UseFieldArrayReturn } from 'react-hook-form'

import { Button, type ButtonProps } from '../button'
import { Typography } from '../typography'
import { FormNumberField } from './number-field'
import { FormTextField } from './text-field'

interface FormFieldArrayErrorProps {
  name: string
  className?: string
}

const FormFieldArrayRootError = ({ name, className, ...rest }: FormFieldArrayErrorProps) => {
  const { getFieldState } = useFormContext()

  const { error } = getFieldState(name)

  if (!error) return null

  return (
    <p className={classNames('text-sm font-medium text-destructive', className)} {...rest}>
      {error.root?.message}
    </p>
  )
}

interface FormFieldArrayRowProps {
  methods: UseFieldArrayReturn
  rowIndex: number
  children: React.ReactNode
  name: string
}

const FormFieldArrayRow = ({ children, methods, rowIndex, name, ...rest }: FormFieldArrayRowProps) => {
  const removeField = (index: number) => methods.remove(index)
  const isEmptyArray = methods.fields.length <= 1

  return (
    <div className="group flex flex-grow gap-x-3 [&>div]:flex-grow" {...rest}>
      {children}
      <Button
        disabled={isEmptyArray}
        type="button"
        data-cy={testId(`button-remove-input-${name}-{rowIndex}`)}
        onClick={() => removeField(rowIndex)}
        className="mb-2 self-end group-has-[input[aria-invalid='true']]:mb-7"
      >
        Verwijderen
      </Button>
    </div>
  )
}

interface FormFieldArrayAddFieldProps extends ButtonProps {
  children: string
  methods: UseFieldArrayReturn
}

const FormFieldArrayAddField = ({ methods, children, ...rest }: FormFieldArrayAddFieldProps) => {
  const addField = () => {
    methods.append({ value: '' }, { shouldFocus: true })
  }

  return (
    <Button
      className="self-start"
      onClick={addField}
      type="button"
      startIcon={<Plus className="size-5" />}
      variant="sm/inline"
      {...rest}
    >
      {children}
    </Button>
  )
}

export interface FormFieldArrayProps {
  required?: boolean
  description?: string
  label: string
  name: string
  placeholder?: string
  type: 'number' | 'text'
  maxFields?: number
  buttonText: string
  repeatedValuesErrorMessage?: string
}

export const FormFieldArray = ({
  name,
  maxFields,
  type,
  label,
  required,
  description,
  placeholder,
  buttonText,
  repeatedValuesErrorMessage = 'Waardes moeten uniek zijn.',
}: FormFieldArrayProps) => {
  const { control, getFieldState, watch } = useFormContext()

  const fieldArrayMethods = useFieldArray({
    control,
    name: name,
  })

  const FieldArrayField = type === 'number' ? FormNumberField : FormTextField

  const isFieldArrayValid = !getFieldState(name).invalid
  const hasMaxFieldLength = !!maxFields
  const exceedsMaxLength = hasMaxFieldLength && fieldArrayMethods.fields.length >= maxFields

  const fieldValues = watch(name) as { value: string }[]
  const hasRepeatedValues = new Set(fieldValues.map((field) => field.value)).size !== fieldValues.length

  return (
    <div className="flex flex-col gap-y-3">
      {fieldArrayMethods.fields.map((field, i) => (
        <FormFieldArrayRow methods={fieldArrayMethods} rowIndex={i} key={i} name={name}>
          <FieldArrayField
            label={i === 0 ? label : undefined}
            required={i === 0 && required}
            description={i === 0 ? description : undefined}
            key={field.id}
            data-cy={testId(`input-${name}-${i}`)}
            placeholder={placeholder}
            name={`${name}.${i}.value`}
          />
        </FormFieldArrayRow>
      ))}
      {hasRepeatedValues && (
        <Typography variant="sm/regular" as="p" className="text-feedback-red-600">
          {repeatedValuesErrorMessage}
        </Typography>
      )}
      <FormFieldArrayRootError name={name} />
      <FormFieldArrayAddField
        methods={fieldArrayMethods}
        disabled={!isFieldArrayValid || exceedsMaxLength || hasRepeatedValues}
        data-cy={testId(`button-add-${name}-field`)}
      >
        {buttonText}
      </FormFieldArrayAddField>
    </div>
  )
}

export default FormFieldArray
