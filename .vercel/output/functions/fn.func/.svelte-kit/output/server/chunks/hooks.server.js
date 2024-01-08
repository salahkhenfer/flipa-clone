import { s as start_mongo } from "./mongo.js";
import { b as base } from "./paths.js";
import { l as locales, a as loadedLocales, c as loadedFormatters, e as i18n, d as isLocale, f as detectLocale } from "./i18n-util.js";
import { date } from "typesafe-i18n/formatters";
import { r as redirect } from "./index.js";
import { initAcceptLanguageHeaderDetector } from "typesafe-i18n/detectors";
import { g as getPathnameWithoutBase } from "./utils.js";
const initFormatters = (locale) => {
  const formatters = {
    simpleDate: date(locale, { day: "2-digit", month: "short", year: "numeric" })
  };
  return formatters;
};
const ar = {
  home: "الصفحة الرئيسية ",
  About: " من نحن ",
  Services: "حدماتنا ",
  Pricing: "تسعيراتنا",
  Contact: "تواصل معنا "
};
const en = {
  home: "home",
  About: "About",
  Services: "Services",
  Pricing: "Pricing",
  Contact: "Contact"
};
const localeTranslations = {
  ar,
  en
};
const loadLocale = (locale) => {
  if (loadedLocales[locale])
    return;
  loadedLocales[locale] = localeTranslations[locale];
  loadFormatters(locale);
};
const loadAllLocales = () => locales.forEach(loadLocale);
const loadFormatters = (locale) => void (loadedFormatters[locale] = initFormatters(locale));
start_mongo().then(() => {
  console.log("Mongo started");
}).catch((err) => {
  console.error("Mongo failed to start", err);
});
loadAllLocales();
const L = i18n();
const handle = async ({ event, resolve }) => {
  const [, lang] = getPathnameWithoutBase(event.url).split("/");
  if (!lang) {
    const locale2 = getPreferredLocale(event);
    throw redirect(307, `${base}/${locale2}`);
  }
  const locale = isLocale(lang) ? lang : getPreferredLocale(event);
  const LL = L[locale];
  event.locals.locale = locale;
  event.locals.LL = LL;
  console.info(LL.log({ fileName: "hooks.server.ts" }));
  return resolve(event, { transformPageChunk: ({ html }) => html.replace("%lang%", locale) });
};
const getPreferredLocale = ({ request }) => {
  const acceptLanguageDetector = initAcceptLanguageHeaderDetector(request);
  return detectLocale(acceptLanguageDetector);
};
export {
  handle
};
