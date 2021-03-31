import "reflect-metadata"
import "react-native-gesture-handler"
import "/injection/container"

import React, { useCallback, useEffect, useState } from "react"
import { AppNavigator } from "/presenter/navigation/AppNavigator"
import { initializeContainer } from "/injection"

const App = () => {
  const [initializing, setInitializing] = useState(true)

  const initialize = useCallback(async () => {
    await initializeContainer()
    setInitializing(false)
  }, [])

  useEffect(() => {
    initialize()
  }, [initialize])

  if (initializing) {
    return null
  }

  return <AppNavigator />
}

export default App
