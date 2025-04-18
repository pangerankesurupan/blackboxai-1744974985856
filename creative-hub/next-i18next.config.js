/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id', 'ru', 'zh'],
  },
  defaultNS: 'common',
  localePath: typeof window === 'undefined' ? require('path').resolve('./public/locales') : '/public/locales',
  fallbackLng: 'en',
  debug: process.env.NODE_ENV === 'development',
  load: 'languageOnly',
  react: { 
    useSuspense: false 
  },
  backend: {
    loadPath: '/public/locales/{{lng}}/{{ns}}.json'
  }
}
