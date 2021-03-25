import { injectable } from "inversify"
import RNBootSplash from "react-native-bootsplash"

import { SplashService } from "../SplashService"

@injectable()
export class DefaultSplashService implements SplashService {
  show() {
    RNBootSplash.show()
  }

  hide() {
    RNBootSplash.hide()
  }
}
