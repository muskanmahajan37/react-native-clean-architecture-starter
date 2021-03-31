export type NetworkServiceConfigs = {
  baseURL?: string
  timeout?: number
  headers?: object
}

export interface NetworkService {
  initialize(configs: NetworkServiceConfigs): void

  getToken(): Promise<string | null>

  saveToken(token: string): Promise<void>

  clearToken(): Promise<void>
}
