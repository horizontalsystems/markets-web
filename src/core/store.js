import { configureStore } from '@reduxjs/toolkit'

import coinInfoReducer from './reducers/coinInfo'
import marketsReducer from './reducers/markets'
import defiReducer from './reducers/defi'
import discoveryReducer from './reducers/discovery'
import marketsGlobalReducer from './reducers/marketsGlobal'
import newsReducer from './reducers/news'
import watchlistReducer from './reducers/watchlist'

export default configureStore({
  reducer: {
    coinInfo: coinInfoReducer,
    discovery: discoveryReducer,
    markets: marketsReducer,
    defi: defiReducer,
    marketsGlobal: marketsGlobalReducer,
    news: newsReducer,
    watchlist: watchlistReducer,
  }
})
