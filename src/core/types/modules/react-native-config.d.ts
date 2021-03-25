declare module "react-native-config" {
  interface NativeConfig {
    APP_NAME: string
    VERSION_CODE: number
    VERSION_NAME: string
  }

  export const Configs: NativeConfig
  export default Configs
}
