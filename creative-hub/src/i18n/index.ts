import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { i18n as i18nConfig } from '../../next-i18next.config'

i18n
  .use(initReactI18next)
  .init({
    ...i18nConfig,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
