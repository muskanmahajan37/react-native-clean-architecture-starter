import { injectable } from "inversify"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Either, isSuccess } from "/core/types/response"
import { CannotGetStorageDataError, CannotRemoveStorageDataError, CannotSetStorageDataError } from "../error"
import { StorageService } from "../StorageService"

@injectable()
export class AsyncStorageService implements StorageService<string, string> {
  async get(key: string): Promise<Either<string | null, CannotGetStorageDataError>> {
    try {
      return await AsyncStorage.getItem(key)
    } catch (e) {
      return new CannotGetStorageDataError()
    }
  }

  async tryGet(key: string): Promise<string | null> {
    const response = await this.get(key)

    if (isSuccess(response)) {
      return response
    }

    return null
  }

  async set(key: string, value: string): Promise<Either<void, CannotSetStorageDataError>> {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      return new CannotSetStorageDataError()
    }
  }

  async trySet(key: string, value: string): Promise<void> {
    await this.set(key, value)
  }

  async remove(key: string): Promise<Either<void, CannotRemoveStorageDataError>> {
    try {
      await AsyncStorage.removeItem(key)
    } catch (e) {
      return new CannotRemoveStorageDataError()
    }
  }

  async tryRemove(key: string): Promise<void> {
    await this.remove(key)
  }

  async getAllKeys(): Promise<Either<string[], CannotGetStorageDataError>> {
    try {
      return await AsyncStorage.getAllKeys()
    } catch (e) {
      return new CannotGetStorageDataError()
    }
  }

  async tryGetAllKeys(): Promise<string[]> {
    const response = await this.getAllKeys()

    if (isSuccess(response)) {
      return response
    }

    return []
  }
}
