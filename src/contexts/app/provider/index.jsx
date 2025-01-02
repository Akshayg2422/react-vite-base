import { useState } from "react"

import { AppContext } from "../context"

export const AppProvider = ({ children }) => {
  const [show, setShowLoader] = useState(false)
  return (
    <AppContext.Provider
      value={{
        show,
        setShowLoader,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
