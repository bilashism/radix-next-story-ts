import { zodResolver } from '@hookform/resolvers/zod'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Search } from 'lucide-react'
import { Button } from '../button'
import { TextField } from '../textfield'
import { FormCombobox } from './combobox'
import { FormFieldArray } from './field-array'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './form'

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  jobs: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
    }),
  ),
})

function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <TextField placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

const comboboxOptions = [
  { label: 'Optie1', value: 'optie4' },
  { label: 'Lange lange naam', value: 'optie3' },
  {
    label:
      'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem',
    value: 'optie1',
  },
]

function ComboboxForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      jobs: [],
    },
  })

  return (
    <Form {...form}>
      <form className="space-y-6 max-w-96">
        <FormCombobox
          label="Beroepen"
          name="jobs"
          options={comboboxOptions}
          triggerClassName=""
          triggerPlaceholder="Zoek een beroep"
          startIcon={<Search className="size-3 shrink-0" />}
        />
      </form>
    </Form>
  )
}

function FieldArrayForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      jobs: [],
    },
  })

  return (
    <Form {...form}>
      <form>
        <FormFieldArray label="beroepen" name="jobs" type="text" buttonText="Voeg toe" maxFields={5} />
      </form>
    </Form>
  )
}

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Form> = {
  title: 'Interface/Form',
  component: Form,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Form>

export const Main: Story = {
  render: () => <InputForm />,
}

export const Combobox: Story = {
  render: () => <ComboboxForm />,
}

export const FieldArray: Story = {
  render: () => <FieldArrayForm />,
}
