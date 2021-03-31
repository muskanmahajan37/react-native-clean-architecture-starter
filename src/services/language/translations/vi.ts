import { AppLanguage } from "./types"

const vi: AppLanguage = {
  name: "Việt Nam",
  currentLanguage: (name: string) => `Ngôn ngữ hiện tại: ${name}`,
  switchLanguage: "Đổi ngôn ngữ",
  switchTheme: "Đổi giao diện",
}

export default vi
