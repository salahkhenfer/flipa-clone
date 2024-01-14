import { c as create_ssr_component, v as validate_component, e as escape, d as add_attribute } from "../../../../chunks/ssr.js";
import { G as GoBackBtn } from "../../../../chunks/GoBackBtn.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-1bticyj{padding-bottom:2px;border-bottom:2px solid #eee}a.svelte-1bticyj:hover{color:#ddd;border-bottom:2px solid #ddd}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let listing;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  ({ listing } = data);
  return `${validate_component(GoBackBtn, "GoBackBtn").$$render($$result, {}, {}, {})} <section>${listing ? `<h1>${escape(listing.title)}</h1> <p>${escape(listing.price.toLocaleString())}$</p> <p>${escape(listing.summary)}</p> <a${add_attribute("href", listing.listing_url, 0)} target="_blank" class="svelte-1bticyj">FIND IT IN FLIPPA</a>` : ``} </section>`;
});
export {
  Page as default
};
