const sourceLanguageTag = "en";
const availableLanguageTags = (
  /** @type {const} */
  ["ar", "en"]
);
let languageTag = () => sourceLanguageTag;
const setLanguageTag = (tag) => {
  if (typeof tag === "function") {
    languageTag = tag;
  } else {
    languageTag = () => tag;
  }
};
export {
  setLanguageTag as a,
  availableLanguageTags as b,
  languageTag as l,
  sourceLanguageTag as s
};
