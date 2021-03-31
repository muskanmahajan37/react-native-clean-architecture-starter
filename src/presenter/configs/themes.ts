import { injectable } from "inversify"
import { Colors } from "./colors"

export enum AppThemeName {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
}

const isTheme = (themeName: string | null): themeName is AppThemeName => {
  return !!themeName && Object.values(AppThemeName).some((e) => e === themeName)
}

export interface AppTheme {
  primaryColor: string
  secondaryColor: string
  appBar: {
    titleColor: string
  }
}

const availableThemes: { [name in AppThemeName]: AppTheme } = {
  [AppThemeName.PRIMARY]: {
    primaryColor: Colors.orange,
    secondaryColor: Colors.white,
    appBar: {
      titleColor: Colors.white,
    },
  },
  [AppThemeName.SECONDARY]: {
    primaryColor: Colors.cyan,
    secondaryColor: Colors.black,
    appBar: {
      titleColor: Colors.black,
    },
  },
}

@injectable()
export class ThemeManager {
  static storedKey: string = "@@AppTheme"
  static defaultTheme: AppThemeName = AppThemeName.PRIMARY

  currentThemeName: AppThemeName = ThemeManager.defaultTheme
  listeners: Function[] = []

  get currentTheme() {
    return availableThemes[this.currentThemeName]
  }

  setTheme = (themeName: AppThemeName | string | null) => {
    if (!isTheme(themeName)) return

    this.currentThemeName = themeName as AppThemeName
    this.notifyListeners()
  }

  notifyListeners = () => {
    this.listeners.forEach((listener) => listener())
  }

  addListenner = (listener: Function) => {
    this.listeners.push(listener)
  }

  removeListener(listener: Function) {
    this.listeners = this.listeners.filter((e) => e !== listener)
  }
}
