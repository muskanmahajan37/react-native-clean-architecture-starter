import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack"

import { MainScreen, SplashScreen } from "/presenter/screens"
import { useTheme } from "/presenter/hooks"

import { Routes } from "./routes"

export type RootStackParamList = {
  [Routes.SPLASH]: undefined
  [Routes.MAIN]: undefined
}

export type ScreenStackNavigation<T extends keyof RootStackParamList> = StackNavigationProp<RootStackParamList, T>

const Stack = createStackNavigator<RootStackParamList>()

export const AppNavigator = () => {
  const [theme] = useTheme()

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.primaryColor,
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: theme.appBar.titleColor,
            fontWeight: "bold",
            textAlign: "center",
          },
        }}
      >
        <Stack.Screen name={Routes.SPLASH} component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name={Routes.MAIN} component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
