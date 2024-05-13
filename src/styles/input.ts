export const ROOT_INPUT_STYLES =
  'flex justify-center items-center border-primary-200 bg-white rounded-8 outline-none placeholder text-md border text-primary-800 hover:border-accent-orange-500 active:ring-accent-orange-500 focus-within:border-accent-orange-500 focus-within:!ring-accent-orange-500'
export const BASE_INPUT_STYLES =
  'w-full !outline-none h-12 bg-transparent !border-none !appearance-none focus:!ring-0 focus:!border-none'
export const INPUT_STYLES = {
  error:
    '!border-feedback-red-600 hover:!ring-feedback-red-600 focus-within:!ring-feedback-red-600 active:!ring-feedback-red-600',
  disabled: '!bg-primary-100 pointer-events-none border-primary-200',
} as const
