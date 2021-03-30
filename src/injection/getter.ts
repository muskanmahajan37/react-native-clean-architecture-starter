import { LanguageService, SplashService, StorageService } from "@services"

import { container } from "./container"
import { TYPES } from "./types"

export const getLanguageService = () => container.get<LanguageService>(TYPES.LanguageService)

export const getSplashService = () => container.get<SplashService>(TYPES.SplashService)

export const getStorageService = () => container.get<StorageService>(TYPES.StorageService)
