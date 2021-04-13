import { configureStore } from '@reduxjs/toolkit'

import coinInfoReducer from './reducers/coinInfo'
import marketsReducer from './reducers/markets'
import discoveryReducer from './reducers/discovery'
import marketsGlobalReducer from './reducers/marketsGlobal'

export default configureStore({
  reducer: {
    coinInfo: coinInfoReducer,
    discovery: discoveryReducer,
    markets: marketsReducer,
    marketsGlobal: marketsGlobalReducer
  }
})
