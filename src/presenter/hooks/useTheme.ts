import { useCallback, useEffect, useRef, useState } from "react"
import { getThemeManager } from "/injection"
import { AppThemeName, AppTheme } from "/presenter/configs/themes"

export const useTheme = (): [AppTheme, (themeName: AppThemeName) => void] => {
  const themeManager = useRef(getThemeManager())
  const [currentTheme, setCurrentTheme] = useState(themeManager.current.currentTheme)

  const setTheme = useCallback((themeName: AppThemeName) => {
    themeManager.current.setTheme(themeName)
  }, [])

  const onThemeChanged = useCallback(() => {
    setCurrentTheme(themeManager.current.currentTheme)
  }, [])

  useEffect(() => {
    const themeManagerInstance = themeManager.current

    themeManagerInstance.addListenner(onThemeChanged)

    return () => {
      themeManagerInstance.removeListener(onThemeChanged)
    }
  }, [onThemeChanged])

  return [currentTheme, setTheme]
}
