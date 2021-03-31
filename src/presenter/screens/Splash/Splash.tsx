import React, { useCallback, useEffect } from "react"
import { ActivityIndicator, View } from "react-native"

import { getSplashService } from "/injection"

import styles from "./styles"
import { wait } from "/utils/timing"
import { useNavigation } from "@react-navigation/core"
import { Routes } from "/presenter/navigation/routes"
import { ScreenStackNavigation } from "/presenter/navigation/AppNavigator"
import { SPLASH_TIMEOUT } from "/core/configs"

const SplashScreen = () => {
  const navigation = useNavigation<ScreenStackNavigation<Routes.SPLASH>>()

  const initialize = useCallback(async () => {
    await wait(SPLASH_TIMEOUT)

    getSplashService().hide()

    navigation.replace(Routes.MAIN)
  }, [navigation])

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
