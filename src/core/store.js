import { configureStore } from '@reduxjs/toolkit'

import marketsReducer from './reducers/markets'
import marketsGlobalReducer from './reducers/marketsGlobal'

export default configureStore({
  reducer: {
    markets: marketsReducer,
    marketsGlobal: marketsGlobalReducer
  }
})
