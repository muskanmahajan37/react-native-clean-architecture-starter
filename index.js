import { AppRegistry } from "react-native"
import Configs from "react-native-config"
import { SplashScreen } from "/presenter/screens"

AppRegistry.registerComponent(Configs.APP_NAME, () => SplashScreen)
