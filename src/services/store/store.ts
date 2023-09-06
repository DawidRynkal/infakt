import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import { infaktApi } from '../infakt-api'

export const store = configureStore({
  reducer: {
    [infaktApi.reducerPath]: infaktApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(infaktApi.middleware),
})

setupListeners(store.dispatch)