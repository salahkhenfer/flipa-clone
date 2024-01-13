import { c as create_ssr_component, b as subscribe } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { s as sourceLanguageTag, a as setLanguageTag } from "../../chunks/runtime.js";
/* empty css                   */const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let lang = sourceLanguageTag;
  lang = $page.params.lang ?? sourceLanguageTag;
  {
    setLanguageTag(lang);
  }
  $$unsubscribe_page();
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
