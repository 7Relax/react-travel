export const CHANGE_LANGUAGE = 'change_language'
export const ADD_LANGUAGE = 'add_language'

interface ChangeLanguage {
  type: typeof CHANGE_LANGUAGE,
  payload: 'zh' | 'en'
}

interface AddLanguage {
  type: typeof ADD_LANGUAGE,
  payload: { name: string, code: string }
}

export type LanguageActionTypes = ChangeLanguage | AddLanguage

/**
 * 工厂模式创建action
 */
export const changeLanguageActionCreator = (languageCode: 'zh' | 'en'): ChangeLanguage => {
  return {
    type: CHANGE_LANGUAGE,
    payload: languageCode
  }
}

export const addLanguageActionCreator = (name: string, code: string): AddLanguage => {
  return {
    type: ADD_LANGUAGE,
    payload: { name, code }
  }
}
