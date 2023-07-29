import enUS from './en-US.json'
import zhCN from './zh-CN.json'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'en-US', // 设置地区
  messages: {
    'en-US': enUS,
    'zh-CN': zhCN
  } // 设置地区信息
})

export default i18n

export function switchLanguage (str: 'en-US' | 'zh-CN') {
  i18n.global.locale = str
}
