/**
 * Returns the provided id if the environment is not production, otherwise returns undefined.
 * @param id - The id to return if the environment is not production.
 * @returns The provided id if the environment is not production, otherwise undefined.
 */
export const testId = (id: string) => (process.env.ENVIRONMENT !== 'prd' ? id : undefined)
