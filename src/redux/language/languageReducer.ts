import i18n from 'i18next'
import {
  CHANGE_LANGUAGE,
  ADD_LANGUAGE,
  LanguageActionTypes
} from './languageActions'

export interface LanguageState {
  language: 'zh' | 'en'
  languageList: { name: string, code: string }[]
}

const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: 'English', code: 'en' },
  ]
}

const reducer = (state = defaultState, action: LanguageActionTypes) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      // 切换语言，改变了语言的配置文件，但当前reducer就不是纯函数了，
      // 因为调用changeLanguage是存在副作用的，所以这样的处理是不标准的
      // 根据redux的定义，所有的reducer都必须是纯函数（没有副作用）
      i18n.changeLanguage(action.payload)

      // 任何 state 都是 immutable 不可更改的，所以以下是不允许的
      // state.language = action.payload

      // 创建新数据并返回
      const newState = { ...state, language: action.payload }
      return newState
    case ADD_LANGUAGE:
      state.languageList.push(action.payload)
      return { ...state }
    default:
      return state
  }
}

export default reducer
