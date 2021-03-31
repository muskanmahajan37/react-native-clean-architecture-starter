import i18n from "i18n-js"
import { injectable } from "inversify"
import { I18nManager } from "react-native"
import * as RNLocalize from "react-native-localize"

import { AvailableLanguages } from "/core/language"

import translations from "../translations"
import { AppLanguage } from "../translations/types"
import { LanguageSetting, TranslateOptions } from "../types"
import { LanguageService } from "../LanguageService"

const LANGUAGE_FALLBACK: LanguageSetting = {
  languageTag: AvailableLanguages.en,
  isRTL: false,
}

@injectable()
export class DefaultLanguageService implements LanguageService {
  currentLanguage: AvailableLanguages = LANGUAGE_FALLBACK.languageTag
  listeners: Function[] = []

  initialize() {
    // Using the device's language as the default language
    const { languageTag, isRTL } =
      RNLocalize.findBestAvailableLanguage(Object.values(AvailableLanguages)) || LANGUAGE_FALLBACK

    I18nManager.forceRTL(isRTL)
    i18n.translations = translations
    i18n.locale = languageTag
  }

  get translation(): AppLanguage {
    return i18n.translations[this.currentLanguage] as AppLanguage
  }

  translate = (key: string, options: TranslateOptions = {}) => {
    return key
      ? i18n.t(key, {
          message: key,
          defaultValue: key,
          ...options,
        })
      : key
  }

  switchLanguage = (languageKey: AvailableLanguages) => {
    this.currentLanguage = languageKey
    i18n.locale = languageKey
    this.listeners.forEach((func) => func())
  }

  addListener = (listener: Function) => {
    this.listeners.push(listener)
  }

  removeListener = (listener: Function) => {
    this.listeners = this.listeners.filter((e) => e === listener)
  }
}
