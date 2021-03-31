export type AppLanguage = {
  name: string
  currentLanguage: (name: string) => string
  switchLanguage: string
  switchTheme: string
}
