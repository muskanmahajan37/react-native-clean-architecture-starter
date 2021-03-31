import { AppLanguage } from "./types"

const en: AppLanguage = {
  name: "English",
  currentLanguage: (name: string) => `Current language: ${name}`,
  switchLanguage: "Switch language",
  switchTheme: "Switch theme",
}

export default en
