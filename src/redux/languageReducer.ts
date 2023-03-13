
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

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'change_language':
      // 任何 state 都是 immutable 不可更改的，所以以下是不允许的
      // state.language = action.payload

      // 创建新数据并返回
      const newState = { ...state, language: action.payload }
      return newState
    case 'add_language':
      // const newState = { ...state, languageList: [...state.languageList, action.payload] }
      state.languageList.push(action.payload)
      return { ...state }
    default:
      return state
  }
}

export default reducer
