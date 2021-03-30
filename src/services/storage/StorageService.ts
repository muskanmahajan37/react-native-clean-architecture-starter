import { Either } from "@core/types/response"
import { CannotGetStorageDataError, CannotRemoveStorageDataError, CannotSetStorageDataError } from "./error"

export interface StorageService<K = string, V = string> {
  /**
   * Find and get the value in the local storage
   *
   * @param key The key of the stored value
   *
   * @returns The saved value (success) OR {@link CannotGetStorageDataError} (error)
   */
  get(key: K): Promise<Either<V | null, CannotGetStorageDataError>>

  /**
   * Find and get the value in the local storage
   * (but not throwing any error)
   *
   * @param key The key of the stored value
   *
   * @returns The saved value (success) OR null (error or nothing found)
   */
  tryGet(key: K): Promise<V | null>

  /**
   * Save the value into the local storage
   *
   * @param key The key of the stored value
   * @param value The new value
   *
   * @returns Nothing (success) OR {@link CannotSetStorageDataError} (error)
   */
  set(key: K, value: V): Promise<Either<void, CannotSetStorageDataError>>

  /**
   * Save the value into the local storage
   * (but not throwing any error)
   *
   * @param key The key of the stored value
   * @param value The new value
   */
  trySet(key: K, value: V): Promise<void>

  /**
   * Remove the item from the local storage
   *
   * @param key The key of the stored value
   *
   * @returns Nothing (success) OR {@link CannotRemoveStorageDataError} (error)
   */
  remove(key: K): Promise<Either<void, CannotRemoveStorageDataError>>

  /**
   * Remove the item from the local storage
   * (but not throwing any error)
   *
   * @param key The key of the stored value
   */
  tryRemove(key: K): Promise<void>

  /**
   * Get all keys that currently stored in the local storage
   *
   * @returns All saved keys in the local storage (success) OR {@link CannotGetStorageDataError} (error)
   */
  getAllKeys(): Promise<Either<K[], CannotGetStorageDataError>>

  /**
   * Get all keys that currently stored in the local storage
   * (but not throwing any error)
   *
   * @returns All saved keys in the local storage (success) OR empty array (error or nothing found)
   */
  tryGetAllKeys(): Promise<K[]>
}
