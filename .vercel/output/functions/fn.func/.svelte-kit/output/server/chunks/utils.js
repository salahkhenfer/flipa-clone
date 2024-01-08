import { b as base } from "./paths.js";
const replaceLocaleInUrl = (url, locale, full = false) => {
  const [, , ...rest] = getPathnameWithoutBase(url).split("/");
  const new_pathname = `/${[locale, ...rest].join("/")}`;
  if (!full) {
    return `${new_pathname}${url.search}`;
  }
  const newUrl = new URL(url.toString());
  newUrl.pathname = base + new_pathname;
  return newUrl.toString();
};
const REGEX_START_WITH_BASE = new RegExp(`^${base}`);
const getPathnameWithoutBase = (url) => url.pathname.replace(REGEX_START_WITH_BASE, "");
export {
  getPathnameWithoutBase as g,
  replaceLocaleInUrl as r
};
