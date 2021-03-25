import { AvailableLanguages } from "@core/language"

export type LanguageSetting = {
  languageTag: AvailableLanguages
  isRTL: boolean
}

export const Locale: { [key in AvailableLanguages]: string } = {
  en: "en-US",
  vi: "vi-VN",
}

export type TranslateOptions = {
  defaultValue?: string
  [key: string]: any
}
