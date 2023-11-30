import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import localesResourse from '../locales/language'
import 'intl-pluralrules'

const languageDetector = {
  type: 'languageDetector',
  detect: () => {},
  init: () => {},
  cacheUserLanguage: () => {},
}

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    resources: localesResourse,
    supportedLngs: ['vi', 'en'],
    fallbackLng: 'vi',
  })

export default i18n
