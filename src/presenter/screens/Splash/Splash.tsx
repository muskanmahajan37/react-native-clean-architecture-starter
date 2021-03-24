import React, { useCallback } from "react"
import { useEffect } from "react"
import { ActivityIndicator } from "react-native"
import RNBootSplash from "react-native-bootsplash"

const SplashScreen = () => {
  const initialize = useCallback(async () => {
    RNBootSplash.hide()
  }, [])

  useEffect(() => {
    initialize()
  }, [initialize])

  return <ActivityIndicator />
}

export default SplashScreen
