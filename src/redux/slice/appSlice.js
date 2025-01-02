import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  token: undefined,
  isAuthenticated: false,
  language: "ta",
}

const AppSlice = createSlice({
  name: "APP_REDUCER",
  initialState,
  reducers: {
    saveToken: (state, action) => {
      state.token = action.payload
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload
    },
    setLanguage: (state, action) => {
      state.language = action.payload
    },
  },
})

const APP_REDUCER = AppSlice.reducer
export const { saveToken, setIsAuthenticated, setLanguage } = AppSlice.actions
export { APP_REDUCER }
