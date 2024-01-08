import { c as create_ssr_component, f as add_attribute, e as escape, v as validate_component, d as each } from "../../../../chunks/ssr.js";
import { G as GoBackBtn } from "../../../../chunks/GoBackBtn.js";
/* empty css                                                                     */const css$1 = {
  code: "li.svelte-1farrjp{margin-bottom:1rem;background-color:#555;border-radius:0.5rem;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);padding:1rem;color:#eee;display:flex;flex-direction:column}a.svelte-1farrjp{text-decoration:none;font-size:1.2rem}li.svelte-1farrjp:hover{transform:scale(1.01)}h3.svelte-1farrjp{margin:0 0 0.5rem;font-weight:500}",
  map: null
};
const ListingCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { listing } = $$props;
  if ($$props.listing === void 0 && $$bindings.listing && listing !== void 0)
    $$bindings.listing(listing);
  $$result.css.add(css$1);
  return `<li class="svelte-1farrjp"><a${add_attribute("href", `/${listing.id}`, 0)} class="svelte-1farrjp"><h3 class="svelte-1farrjp">${escape(listing.basic_info.name)}</h3> <p>${escape(listing.title)}</p> <p>${escape(listing.price.toLocaleString())}$</p></a> </li>`;
});
const css = {
  code: "ul.svelte-1bkb3v5{list-style:none;padding:0}",
  map: null
};
const ListingCardContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<ul class="svelte-1bkb3v5">${slots.default ? slots.default({}) : ``} </ul>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let listings;
  let { data } = $$props;
  console.log(listings);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ listings } = data);
  return `${validate_component(GoBackBtn, "GoBackBtn").$$render($$result, {}, {}, {})} <section>${validate_component(ListingCardContainer, "ListingCardContainer").$$render($$result, {}, {}, {
    default: () => {
      return `${each(listings, (listing) => {
        return `${validate_component(ListingCard, "ListingCard").$$render($$result, { listing }, {}, {})}`;
      })}`;
    }
  })}</section>`;
});
export {
  Page as default
};
