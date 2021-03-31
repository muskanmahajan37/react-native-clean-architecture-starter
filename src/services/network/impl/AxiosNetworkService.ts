import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { inject, injectable } from "inversify"
import { NetworkService, NetworkServiceConfigs } from "../NetworkService"

import { commonErrorMessage, commonErrors } from "../errors"
import { TYPES } from "/injection/types"
import { StorageService } from "/services/storage"

const defaultHeaders = {
  "Content-Type": "application/json",
}

const defaultConfigs = {
  timeout: 10000,
  headers: defaultHeaders,
}

@injectable()
export class AxiosNetworkService implements NetworkService {
  static storedToken: string = "@@AppToken"

  axiosInstance: AxiosInstance
  storage: StorageService
  token: string | null = null

  public constructor(@inject(TYPES.StorageService) storage: StorageService) {
    this.storage = storage
    this.axiosInstance = axios.create(defaultConfigs)
  }

  initialize = (configs: NetworkServiceConfigs): void => {
    this.axiosInstance = axios.create({
      ...defaultConfigs,
      ...configs,
      headers: {
        ...defaultConfigs.headers,
        ...configs.headers,
      },
    })

    axios.interceptors.request.use(this.onRequest, this.onRequestError)
    axios.interceptors.response.use(this.onResponseReceived, this.onRequestError)
  }

  getToken = async (): Promise<string | null> => {
    if (!this.token) {
      this.token = await this.storage.tryGet(AxiosNetworkService.storedToken)
    }

    return this.token
  }

  saveToken = async (token: string): Promise<void> => {
    await this.storage.trySet(AxiosNetworkService.storedToken, token)
    this.token = token
  }

  clearToken = async (): Promise<void> => {
    await this.storage.tryRemove(AxiosNetworkService.storedToken)
    this.token = null
  }

  onRequest = async (request: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
    const token = await this.getToken()

    if (token) {
      request.headers.Authentication = this.token
    }

    return request
  }

  onRequestError = (error: any): any => {
    // Do something with the request error

    return error
  }

  onResponseReceived = (request: AxiosResponse): AxiosResponse => {
    // Do something with the response data

    return request
  }

  onError = (error: any): any => {
    const errorData = error?.response?.data || null
    const errorCode: number = error?.response?.status

    // TODO: Add refresh token logic

    if (errorCode && commonErrors[errorCode]) {
      return Promise.reject(commonErrors[errorCode])
    }

    if (errorData && errorData.message && commonErrorMessage[errorData.message]) {
      return Promise.reject(commonErrorMessage[errorData.message])
    }

    return Promise.reject(errorData)
  }
}
