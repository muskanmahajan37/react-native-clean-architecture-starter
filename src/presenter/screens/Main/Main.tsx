import React, { useCallback } from "react"
import { Button, Text, View } from "react-native"
import styles from "./styles"
import { AvailableLanguages } from "/core/language"
import { useLanguage } from "/presenter/hooks"

const MainScreen = () => {
  const [lang, languageName, setLanguage] = useLanguage()

  const switchLanguage = useCallback(() => {
    setLanguage(languageName === AvailableLanguages.en ? AvailableLanguages.vi : AvailableLanguages.en)
  }, [languageName, setLanguage])

  return (
    <View style={styles.container}>
      <Text>{lang.currentLanguage(lang.name)}</Text>
      <Button title={lang.switchLanguage} onPress={switchLanguage} />
    </View>
  )
}

export default MainScreen
