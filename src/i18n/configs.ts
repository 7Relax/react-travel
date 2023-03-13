import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import zh from './zh.json'
import en from './en.json'

const resources = {
  zh: {
    translation: zh
  },
  en: {
    translation: en
  },
}

i18n
  // i18n框架会通过 react-i18next 插件初始化，并会自动完成context的注入
  // 所以可以在 index.tsx 文件中直接引用这个 configs 文件
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh',
    interpolation: {
      /**
       * false: 代表它不会为了防止xss攻击，强行把html字符转成为普通的字符串
       * 原因：React本身已经自带了防止xss攻击的机制
       */
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
