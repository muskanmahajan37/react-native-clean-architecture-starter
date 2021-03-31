import { Container } from "inversify"

import {
  LanguageService,
  DefaultLanguageService,
  SplashService,
  DefaultSplashService,
  StorageService,
  AsyncStorageService,
} from "/services"

import { TYPES } from "./types"
import { ThemeManager } from "/presenter/configs/themes"
import { AxiosNetworkService, NetworkService } from "/services/network"
import Configs from "react-native-config"

const container = new Container()

/**
 * Bind and initialize all instances
 * This function must be call BEFORE used
 */
const initializeContainer = async () => {
  // binding
  container.bind<LanguageService>(TYPES.LanguageService).to(DefaultLanguageService)
  container.bind<StorageService>(TYPES.StorageService).to(AsyncStorageService)
  container.bind<ThemeManager>(TYPES.ThemeManager).to(ThemeManager)
  container.bind<SplashService>(TYPES.SplashService).to(DefaultSplashService)
  container.bind<NetworkService>(TYPES.NetworkService).to(AxiosNetworkService)

  // declare needed instance to prepare for the initialize
  const language = container.get<LanguageService>(TYPES.LanguageService)
  const storage = container.get<StorageService>(TYPES.StorageService)
  const themeManager = container.get<ThemeManager>(TYPES.ThemeManager)
  const network = container.get<NetworkService>(TYPES.NetworkService)

  // initialize language service
  language.initialize()

  // Setup theme
  const savedTheme = await storage.tryGet(ThemeManager.storedKey)
  themeManager.setTheme(savedTheme)

  // initialize network service
  network.initialize({ baseURL: Configs.BASE_URL || "" })
}

export { container, initializeContainer }
