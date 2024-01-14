import { c as create_ssr_component, d as add_attribute, f as each, e as escape, b as subscribe, v as validate_component, g as null_to_empty } from "../../../chunks/ssr.js";
/* empty css                      */import { l as languageTag, b as availableLanguageTags } from "../../../chunks/runtime.js";
import { p as page } from "../../../chunks/stores.js";
const SellFree$2 = /* @__NO_SIDE_EFFECTS__ */ () => `بيع مجاني`;
const DetFreeValidation$2 = /* @__NO_SIDE_EFFECTS__ */ () => `احصل على التحقق المجاني`;
const language$2 = /* @__NO_SIDE_EFFECTS__ */ () => `العربية `;
const Yamdik$2 = /* @__NO_SIDE_EFFECTS__ */ () => `يمديك `;
const titleHome$2 = /* @__NO_SIDE_EFFECTS__ */ () => `السوق رقم 1 للشراء والبيع`;
const Search$2 = /* @__NO_SIDE_EFFECTS__ */ () => ` ...ابحث `;
const SellFree$1 = /* @__NO_SIDE_EFFECTS__ */ () => `Sell Free`;
const DetFreeValidation$1 = /* @__NO_SIDE_EFFECTS__ */ () => `Get Free Validation`;
const language$1 = /* @__NO_SIDE_EFFECTS__ */ () => `English  `;
const Yamdik$1 = /* @__NO_SIDE_EFFECTS__ */ () => `Yamdik`;
const titleHome$1 = /* @__NO_SIDE_EFFECTS__ */ () => `#1 Marketplace to Buy & Sell`;
const Search$1 = /* @__NO_SIDE_EFFECTS__ */ () => ` Search... `;
const SellFree = /* @__NO_SIDE_EFFECTS__ */ (params = {}, options = {}) => {
  return {
    ar: SellFree$2,
    en: SellFree$1
  }[options.languageTag ?? languageTag()]();
};
const DetFreeValidation = /* @__NO_SIDE_EFFECTS__ */ (params = {}, options = {}) => {
  return {
    ar: DetFreeValidation$2,
    en: DetFreeValidation$1
  }[options.languageTag ?? languageTag()]();
};
const language = /* @__NO_SIDE_EFFECTS__ */ (params = {}, options = {}) => {
  return {
    ar: language$2,
    en: language$1
  }[options.languageTag ?? languageTag()]();
};
const Yamdik = /* @__NO_SIDE_EFFECTS__ */ (params = {}, options = {}) => {
  return {
    ar: Yamdik$2,
    en: Yamdik$1
  }[options.languageTag ?? languageTag()]();
};
const titleHome = /* @__NO_SIDE_EFFECTS__ */ (params = {}, options = {}) => {
  return {
    ar: titleHome$2,
    en: titleHome$1
  }[options.languageTag ?? languageTag()]();
};
const Search = /* @__NO_SIDE_EFFECTS__ */ (params = {}, options = {}) => {
  return {
    ar: Search$2,
    en: Search$1
  }[options.languageTag ?? languageTag()]();
};
function route(path, lang) {
  path = withoutLanguageTag(path);
  return `/${lang}${path}`;
}
function withoutLanguageTag(path) {
  const [_, maybeLang, ...rest] = path.split("/");
  if (availableLanguageTags.includes(maybeLang)) {
    return "/" + rest.join("/");
  }
  return path;
}
const SearchInput_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".glow.svelte-runwoo{top:-10%;left:-10%;width:120%;height:120%;border-radius:100%}.glow-1.svelte-runwoo{animation:svelte-runwoo-glow1 4s linear infinite}.glow-2.svelte-runwoo{animation:svelte-runwoo-glow2 4s linear infinite;animation-delay:100ms}.glow-3.svelte-runwoo{animation:svelte-runwoo-glow3 4s linear infinite;animation-delay:200ms}.glow-4.svelte-runwoo{animation:svelte-runwoo-glow4 4s linear infinite;animation-delay:300ms}@keyframes svelte-runwoo-glow1{0%{transform:translate(10%, 10%) scale(1)}25%{transform:translate(-10%, 10%) scale(1)}50%{transform:translate(-10%, -10%) scale(1)}75%{transform:translate(10%, -10%) scale(1)}100%{transform:translate(10%, 10%) scale(1)}}@keyframes svelte-runwoo-glow2{0%{transform:translate(-10%, -10%) scale(1)}25%{transform:translate(10%, -10%) scale(1)}50%{transform:translate(10%, 10%) scale(1)}75%{transform:translate(-10%, 10%) scale(1)}100%{transform:translate(-10%, -10%) scale(1)}}@keyframes svelte-runwoo-glow3{0%{transform:translate(-10%, 10%) scale(1)}25%{transform:translate(-10%, -10%) scale(1)}50%{transform:translate(10%, -10%) scale(1)}75%{transform:translate(10%, 10%) scale(1)}100%{transform:translate(-10%, 10%) scale(1)}}@keyframes svelte-runwoo-glow4{0%{transform:translate(10%, -10%) scale(1)}25%{transform:translate(10%, 10%) scale(1)}50%{transform:translate(-10%, 10%) scale(1)}75%{transform:translate(-10%, -10%) scale(1)}100%{transform:translate(10%, -10%) scale(1)}}",
  map: null
};
const SearchInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let searchTerm = "";
  let suggestions = [];
  $$result.css.add(css$1);
  return `<div class="bg-transparent flex flex-col justify-center"><div class="p-12 max-md:p-0 max-md:pt-5 w-full sm:max-w-2xl sm:mx-auto"><div class="overflow-hidden z-0 rounded-full relative p-3"><form autocomplete="off" class="relative flex z-50 bg-white rounded-full"><input${add_attribute("placeholder", /* @__PURE__ */ Search(), 0)} type="text" class="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"${add_attribute("value", searchTerm, 0)}> <button type="submit" class="bg-indigo-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none" data-svelte-h="svelte-5c3xhg">Search</button></form> <div class="glow glow-1 z-10 bg-pink-400 absolute svelte-runwoo"></div> <div class="glow glow-2 z-20 bg-purple-400 absolute svelte-runwoo"></div> <div class="glow glow-3 z-30 bg-indigo-500 absolute svelte-runwoo"></div> <div class="glow glow-4 z-40 bg-blue-400 absolute svelte-runwoo"></div></div> ${suggestions.length > 0 ? `<div class="rounded-xl overflow-hidden"><ul class="bg-white overflow-scroll h-56 p-2">${each(suggestions, (suggestion) => {
    return `<li><a${add_attribute("href", `/search?search=${encodeURIComponent(suggestion.title)}`, 0)}>${escape(suggestion.title)}</a> <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"> </li>`;
  })}</ul></div>` : ``}</div> </div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<nav${add_attribute(
    "class",
    `shadow-lg shadow-cyan-500/10 w-full bg-gradient-to-r ${languageTag() === "en" ? "from-teal-500 to-indigo-800" : "from-indigo-800 to-teal-500"} border-gray-200 sticky`,
    0
  )}><div class="md:hidden max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"><a href="/" class="flex items-center space-x-3 rtl:space-x-reverse" data-svelte-h="svelte-1yg19r8"><img class="w-20 h-19" src="/static/Screenshot_2024-01-14_151943-removebg-preview.png" alt=""></a> <div class="flex"><div class="text-3xl text-white px-4" data-svelte-h="svelte-1hlodne">|</div> ${languageTag() === "ar" ? `<div class="text-xl text-white px-4"><a${add_attribute("href", route($page.url.pathname, "en"), 0)} hreflang="en">${escape(/* @__PURE__ */ language())}</a></div>` : `<div class="text-xl text-white px-4"><a${add_attribute("href", route($page.url.pathname, "ar"), 0)} hreflang="ar">${escape(/* @__PURE__ */ language())}</a></div>`}</div> <div class="mt-2 flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse"> <div class="flex gap-3"><div class="text-white border-spacing-0 hover:text-black cursor-pointer text-xl transition-all duration-300 border-solid hover:bg-white border-2 border-white px-5 py-1 rounded-3xl">${escape(/* @__PURE__ */ DetFreeValidation())}</div> <div class="text-white border-spacing-0 bg-teal-500 cursor-pointer text-xl transition-all duration-300 border-solid hover:bg-indigo-800 border-2 border-white px-5 py-1 rounded-3xl">${escape(/* @__PURE__ */ SellFree())}</div></div></div></div>  <div class="max-lg:hidden max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"><a href="/" class="flex items-center space-x-3 rtl:space-x-reverse" data-svelte-h="svelte-1yg19r8"><img class="w-20 h-19" src="/static/Screenshot_2024-01-14_151943-removebg-preview.png" alt=""></a> <div class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse"> <div class="flex gap-3"><div class="text-white border-spacing-0 hover:text-black max-md:text-sm cursor-pointer text-xl transition-all duration-300 border-solid hover:bg-white border-2 border-white px-5 py-1 rounded-3xl">${escape(/* @__PURE__ */ DetFreeValidation())}</div> <div class="text-white border-spacing-0 bg-teal-500 cursor-pointer text-xl transition-all duration-300 border-solid hover:bg-indigo-800 border-2 border-white px-5 py-1 rounded-3xl">${escape(/* @__PURE__ */ SellFree())}</div></div> <div class="text-3xl text-white px-4" data-svelte-h="svelte-1hlodne">|</div> <div>${languageTag() === "ar" ? `<div class="text-xl text-white px-4"><a${add_attribute("href", route($page.url.pathname, "en"), 0)} hreflang="en">${escape(/* @__PURE__ */ language())}</a></div>` : `<div class="text-xl text-white px-4"><a${add_attribute("href", route($page.url.pathname, "ar"), 0)} hreflang="ar">${escape(/* @__PURE__ */ language())}</a></div>`}</div></div></div></nav>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".showmore-container.svelte-3tdn1r{display:flex;justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div class="${escape(
    null_to_empty(`w-full h-screen bg-gradient-to-r ${languageTag() === "en" ? "from-teal-500 to-indigo-800" : "from-indigo-800 to-teal-500"} `),
    true
  ) + " svelte-3tdn1r"}"><div class="pt-20 w-fit h-fit mx-auto"><div class="mx-auto w-fit max-sm:text-xl max-sm:py-1 py-4 text-center animate-typing overflow-hidden whitespace-nowrap border-r-white text-5xl text-white font-bold h-fit">${escape(/* @__PURE__ */ titleHome())}</div></div> <div class="flex items-center pt-5 w-fit h-fit mx-auto"><img class="w-20 h-18 mx-auto mt-2" src="/static/Screenshot_2024-01-14_151943-removebg-preview.png" alt=""> <div class="mx-auto w-fit max-sm:text-xl max-sm:py-1 py-4 text-center animate-typing overflow-hidden whitespace-nowrap border-r-white text-5xl text-white font-bold h-fit">${escape(/* @__PURE__ */ Yamdik())}</div></div>   ${validate_component(SearchInput, "SearchInput").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Page as default
};
