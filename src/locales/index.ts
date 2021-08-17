import { enTranslationMessages } from './en'
import { ptbrTranslationMessages } from './pt-br'

export const translationMessages: {
  [languageKey: string]: { [translationKey: string]: string }
} = {
  'en': enTranslationMessages,
  'pt-br': ptbrTranslationMessages,
}
