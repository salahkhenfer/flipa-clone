import { c as create_ssr_component, b as subscribe } from "../../chunks/ssr.js";
import { l as locale } from "../../chunks/i18n-svelte.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_locale;
  $$unsubscribe_locale = subscribe(locale, (value) => value);
  $$unsubscribe_locale();
  return `<main>${slots.default ? slots.default({}) : ``} </main>`;
});
export {
  Layout as default
};
