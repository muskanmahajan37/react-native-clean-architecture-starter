import { useCallback, useEffect, useRef, useState } from "react"

import { getLanguageService } from "@injection"
import { AvailableLanguages } from "@core/language"

/**
 * A hook that help to get the language information of the app
 */
export const useLanguage = () => {
  const language = useRef(getLanguageService())

  const [translation, setTranslation] = useState(language.current.translation)
  const [currentLanguage, setCurrentLanguage] = useState(language.current.currentLanguage)

  const onLanguageChanged = useCallback(() => {
    setTranslation(language.current.translation)
    setCurrentLanguage(language.current.currentLanguage)
  }, [])

  useEffect(() => {
    const instance = language.current

    instance.addListener(onLanguageChanged)

    return () => {
      instance.removeListener(onLanguageChanged)
    }
  }, [onLanguageChanged])

  const setLanguage = useCallback((lang: AvailableLanguages) => {
    language.current.switchLanguage(lang)
  }, [])

  return [translation, currentLanguage, setLanguage]
}
