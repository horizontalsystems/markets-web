import { createSelector } from 'reselect'
import { getNews } from '../../api'

export const NEWS_FETCHED = 'NEWS_FETCHED'

export const fetchNews = () => (dispatch, getState) => {
  if (getState().news.items.length) {
    return
  }

  return getNews().then(({ data }) => {
    dispatch({
      type: NEWS_FETCHED,
      payload: normalizeNews(data.Data)
    })
  })
}

const initialState = {
  items: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NEWS_FETCHED: {
      return {
        items: action.payload
      }
    }

    default:
      return state
  }
}

export const selectNewsByType = createSelector(
  state => state.news.items,
  (_, source) => source,
  (news, source) => {
    return news.filter(item => item.source === source).slice(0, 5)
  }
)

// Normalizer

function normalizeNews(data) {
  return data.map(news => ({
    url: news.url,
    body: news.body,
    title: news.title,
    published_on: news.published_on,
    source: news.source
  }))
}

