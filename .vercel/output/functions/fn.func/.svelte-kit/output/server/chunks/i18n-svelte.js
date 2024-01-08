import { initI18nSvelte } from "typesafe-i18n/svelte";
import { a as loadedLocales, c as loadedFormatters } from "./i18n-util.js";
const { locale, LL, setLocale } = initI18nSvelte(loadedLocales, loadedFormatters);
export {
  locale as l
};
