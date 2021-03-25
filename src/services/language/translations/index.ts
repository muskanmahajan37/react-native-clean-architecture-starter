import { AvailableLanguages } from "@core/language"

import { AppLanguage } from "./types"
import en from "./en"
import vi from "./vi"

const translations: { [key in AvailableLanguages]: AppLanguage } = {
  en: en,
  vi: vi,
}

export default translations
