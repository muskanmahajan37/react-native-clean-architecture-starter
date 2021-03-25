import { AvailableLanguages } from "@core/language"

import { AppLanguage } from "./translations/types"
import { TranslateOptions } from "./types"

export interface LanguageService {
  /**
   * The app's current language
   */
  readonly currentLanguage: AvailableLanguages

  /**
   * Get the current translated language pack
   */
  readonly translation: AppLanguage

  /**
   * Initialize the language message
   */
  initialize(): void

  /**
   * Translate a text.
   *
   * @param key The i18n key
   * @param options Translate options
   *
   * @return the translated message or the {@link key} if nothing found
   */
  translate(key: string, options: TranslateOptions): string

  /**
   * Switch to a language
   *
   * @param languageKey The language key
   */
  switchLanguage(languageKey: AvailableLanguages): void

  /**
   * Add a listener to notify when the current language has been changed
   *
   * @param listener The listener to add
   */
  addListener(listener: Function): void

  /**
   * Remove an already added listener
   *
   * @param listener The listener to remove
   */
  removeListener(listener: Function): void
}
