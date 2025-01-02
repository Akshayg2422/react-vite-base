import { useTranslation } from "react-i18next"

const useTranslate = () => {
  const { t, i18n } = useTranslation()

  function translate(key) {
    return t(key)
  }

  function changeLanguageHandler(language = "en") {
    i18n.changeLanguage(language)
  }

  return {
    translate,
    changeLanguageHandler,
  }
}

export { useTranslate }
