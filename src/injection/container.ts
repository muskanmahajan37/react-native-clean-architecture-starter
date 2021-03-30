import { Container } from "inversify"

import {
  LanguageService,
  DefaultLanguageService,
  SplashService,
  DefaultSplashService,
  StorageService,
  AsyncStorageService,
} from "@services"

import { TYPES } from "./types"

const container = new Container()

/**
 * Bind and initialize all instances
 * This function must be call BEFORE used
 */
const initializeContainer = async () => {
  // binding
  container.bind<LanguageService>(TYPES.LanguageService).to(DefaultLanguageService)
  container.bind<SplashService>(TYPES.SplashService).to(DefaultSplashService)
  container.bind<StorageService>(TYPES.StorageService).to(AsyncStorageService)

  // initialize
  container.get<LanguageService>(TYPES.LanguageService).initialize()
}

export { container, initializeContainer }
