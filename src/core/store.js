import { configureStore } from '@reduxjs/toolkit'

import coinInfoReducer from './reducers/coinInfo'
import marketsReducer from './reducers/markets'
import marketsGlobalReducer from './reducers/marketsGlobal'

export default configureStore({
  reducer: {
    coinInfo: coinInfoReducer,
    markets: marketsReducer,
    marketsGlobal: marketsGlobalReducer
  }
})
