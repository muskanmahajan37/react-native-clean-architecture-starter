import React, { useCallback, useEffect } from "react"
import { ActivityIndicator, View } from "react-native"
import RNBootSplash from "react-native-bootsplash"

import { initializeContainer } from "@injection"

import styles from "./styles"

const SplashScreen = () => {
  const initialize = useCallback(async () => {
    await initializeContainer()
    RNBootSplash.hide()
  }, [])

  useEffect(() => {
    initialize()
  }, [initialize])

  return (
    <View style={styles.container}>
      <ActivityIndicator color="grey" />
    </View>
  )
}

export default SplashScreen
