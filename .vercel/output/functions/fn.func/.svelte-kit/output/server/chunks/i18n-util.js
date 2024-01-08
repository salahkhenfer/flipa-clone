import { i18nObject as i18nObject$1, i18n as i18n$1 } from "typesafe-i18n";
import { detectLocale as detectLocale$1 } from "typesafe-i18n/detectors";
import { initExtendDictionary } from "typesafe-i18n/utils";
const baseLocale = "en";
const locales = ["ar", "en"];
const isLocale = (locale) => locales.includes(locale);
const loadedLocales = {};
const loadedFormatters = {};
initExtendDictionary();
const i18nObject = (locale) => i18nObject$1(
  locale,
  loadedLocales[locale],
  loadedFormatters[locale]
);
const i18n = () => i18n$1(
  loadedLocales,
  loadedFormatters
);
const detectLocale = (...detectors) => detectLocale$1(baseLocale, locales, ...detectors);
export {
  loadedLocales as a,
  baseLocale as b,
  loadedFormatters as c,
  isLocale as d,
  i18n as e,
  detectLocale as f,
  i18nObject as i,
  locales as l
};
