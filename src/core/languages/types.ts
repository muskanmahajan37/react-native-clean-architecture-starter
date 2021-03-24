import * as translations from "./translations"

export type LanguageKey = keyof typeof translations

export type AppLanguage = typeof translations.en

export const Locale: { [key in LanguageKey]: string } = {
  en: "en-US",
  vi: "vi-VN",
}
