/**
 * Create a promise that will be resolved after {@link duration} milliseconds
 *
 * @param duration The timeout duration (in milliseconds)
 * @returns A duration promise
 */
export const wait = (duration: number) => new Promise((res) => setTimeout(res, duration))
