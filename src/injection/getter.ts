import { ThemeManager } from "/presenter/configs/themes"
import { LanguageService, SplashService, StorageService } from "/services"

import { container } from "./container"
import { TYPES } from "./types"
import { NetworkService } from "/services/network"

export const getLanguageService = () => container.get<LanguageService>(TYPES.LanguageService)

export const getSplashService = () => container.get<SplashService>(TYPES.SplashService)

export const getStorageService = () => container.get<StorageService>(TYPES.StorageService)

export const getNetworkService = () => container.get<NetworkService>(TYPES.NetworkService)

export const getThemeManager = () => container.get<ThemeManager>(TYPES.ThemeManager)
