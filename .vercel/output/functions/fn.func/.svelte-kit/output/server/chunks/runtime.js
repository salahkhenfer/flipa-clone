const sourceLanguageTag = "ar";
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
  languageTag as l,
  sourceLanguageTag as s
};
