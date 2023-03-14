import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook
} from 'react-redux'
import { RootState } from './store'

// 导出特殊处理过后的 useSelector
// 实际上并没有创建新的 hook，只是套用了旧的 useSelector
// 然后加上了符合我们项目要求的类型定义 RootState 而已
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector
