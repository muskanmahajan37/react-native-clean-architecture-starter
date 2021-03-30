export type Either<T, E extends Error> = T | E

export function isError<T, E extends Error>(result: Either<T, E>): result is E {
  return result instanceof Error
}

export function isSuccess<T, E extends Error>(result: Either<T, E>): result is T {
  return !isError(result)
}
