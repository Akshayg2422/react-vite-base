import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { persistReducer, persistStore } from "redux-persist"
import createWebStorage from "redux-persist/es/storage/createWebStorage"

import { APP_REDUCER } from "../slice/appSlice"

export function createPersistStore() {
  const isServer = typeof window === "undefined"
  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null)
      },
      setItem() {
        return Promise.resolve()
      },
      removeItem() {
        return Promise.resolve()
      },
    }
  }
  return createWebStorage("local")
}

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createPersistStore()

const STORAGE_NAME = "BASE_APP"

const persistConfig = {
  key: STORAGE_NAME,
  storage,
}

const reducer = combineReducers({
  app: APP_REDUCER,
})

export function proceedLogout(params) {
  return {
    type: "USER_LOGOUT",
    payload: params,
  }
}

/*eslint-disable */
const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    try {
      localStorage.clear()
      action.payload.onSuccess()
      return reducer(undefined, action)
    } catch {
      action.payload.onError()
    }
  }
  return reducer(state, action)
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

const persistor = persistStore(store)

export { store, persistor }
