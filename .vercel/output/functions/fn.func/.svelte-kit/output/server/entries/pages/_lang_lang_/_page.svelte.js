import { c as create_ssr_component, b as subscribe, d as each, f as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { l as locale } from "../../../chunks/i18n-svelte.js";
import { l as locales, b as baseLocale } from "../../../chunks/i18n-util.js";
import "typesafe-i18n/formatters";
/* empty css                                                                  */import { p as page } from "../../../chunks/stores.js";
import { r as replaceLocaleInUrl } from "../../../chunks/utils.js";
const LocaleSwitcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $locale, $$unsubscribe_locale;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_locale = subscribe(locale, (value) => $locale = value);
  $$unsubscribe_page();
  $$unsubscribe_locale();
  return ` <ul>${each(locales, (l) => {
    return ` ${l == "ar" && $locale == "ar" ? `<li><a${add_attribute("href", replaceLocaleInUrl($page.url, "en"), 0)}><button type="button" data-dropdown-toggle="language-dropdown-menu" class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" data-svelte-h="svelte-1dlk3o6">English (US)
					</button></a> </li>` : ``} ${l == "en" && $locale == "en" ? `<li><a${add_attribute("href", replaceLocaleInUrl($page.url, "ar"), 0)}><button type="button" data-dropdown-toggle="language-dropdown-menu" class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" data-svelte-h="svelte-1i7nplt">عربي
					</button></a> </li>` : ``}`;
  })}</ul> `;
});
const gloobl = "";
const SearchInput_svelte_svelte_type_style_lang = "";
const css = {
  code: ".glow.svelte-runwoo{top:-10%;left:-10%;width:120%;height:120%;border-radius:100%}.glow-1.svelte-runwoo{animation:svelte-runwoo-glow1 4s linear infinite}.glow-2.svelte-runwoo{animation:svelte-runwoo-glow2 4s linear infinite;animation-delay:100ms}.glow-3.svelte-runwoo{animation:svelte-runwoo-glow3 4s linear infinite;animation-delay:200ms}.glow-4.svelte-runwoo{animation:svelte-runwoo-glow4 4s linear infinite;animation-delay:300ms}@keyframes svelte-runwoo-glow1{0%{transform:translate(10%, 10%) scale(1)}25%{transform:translate(-10%, 10%) scale(1)}50%{transform:translate(-10%, -10%) scale(1)}75%{transform:translate(10%, -10%) scale(1)}100%{transform:translate(10%, 10%) scale(1)}}@keyframes svelte-runwoo-glow2{0%{transform:translate(-10%, -10%) scale(1)}25%{transform:translate(10%, -10%) scale(1)}50%{transform:translate(10%, 10%) scale(1)}75%{transform:translate(-10%, 10%) scale(1)}100%{transform:translate(-10%, -10%) scale(1)}}@keyframes svelte-runwoo-glow3{0%{transform:translate(-10%, 10%) scale(1)}25%{transform:translate(-10%, -10%) scale(1)}50%{transform:translate(10%, -10%) scale(1)}75%{transform:translate(10%, 10%) scale(1)}100%{transform:translate(-10%, 10%) scale(1)}}@keyframes svelte-runwoo-glow4{0%{transform:translate(10%, -10%) scale(1)}25%{transform:translate(10%, 10%) scale(1)}50%{transform:translate(-10%, 10%) scale(1)}75%{transform:translate(-10%, -10%) scale(1)}100%{transform:translate(10%, -10%) scale(1)}}",
  map: null
};
const SearchInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let searchTerm = "";
  let suggestions = [];
  $$result.css.add(css);
  return `<div class="bg-transparent flex flex-col justify-center"><div class="p-12 w-full sm:max-w-2xl sm:mx-auto"><div class="overflow-hidden z-0 rounded-full relative p-3"><form autocomplete="off" role="form" class="relative flex z-50 bg-white rounded-full"><input placeholder="Search..." type="text" class="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"${add_attribute("value", searchTerm, 0)}> <button type="submit" class="bg-indigo-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none" data-svelte-h="svelte-5c3xhg">Search</button></form> <div class="glow glow-1 z-10 bg-pink-400 absolute svelte-runwoo"></div> <div class="glow glow-2 z-20 bg-purple-400 absolute svelte-runwoo"></div> <div class="glow glow-3 z-30 bg-indigo-500 absolute svelte-runwoo"></div> <div class="glow glow-4 z-40 bg-blue-400 absolute svelte-runwoo"></div></div> ${suggestions.length > 0 ? `<div class="rounded-xl overflow-hidden"><ul class="bg-white overflow-scroll h-56 p-2">${each(suggestions, (suggestion) => {
    return `<li><a${add_attribute("href", `/search?search=${encodeURIComponent(suggestion.title)}`, 0)}>${escape(suggestion.title)}</a> <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"> </li>`;
  })}</ul></div>` : ``}</div> </div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="shadow-lg shadow-cyan-500/10 w-full bg-gradient-to-r from-teal-500 to-indigo-800 border-gray-200 sticky"><div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"><a href="/" class="flex items-center space-x-3 rtl:space-x-reverse" data-svelte-h="svelte-1lbqk8k"><span class="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Flippa.</span></a> <div class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse"> ${validate_component(LocaleSwitcher, "LocaleSwitcher").$$render($$result, {}, {}, {})}</div> <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language" data-svelte-h="svelte-1ddc8yi"><ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent bg-transprant md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"><li><a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page"></a></li> <li><a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a></li> <li><a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a></li> <li><a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a></li> <li><a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a></li></ul></div></div></nav>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div class="w-full h-screen bg-gradient-to-r from-teal-500 to-indigo-800"><div class="pt-20"><h1 class="mx-auto w-fit text-4xl text-white text-center animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-white text-5xl text-white font-bold">#1 Marketplace to Buy &amp; Sell ${escape(baseLocale)}</h1></div>   ${validate_component(SearchInput, "SearchInput").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Page as default
};
