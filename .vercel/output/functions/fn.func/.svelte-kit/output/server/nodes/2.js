import * as universal from '../entries/pages/_lang_lang_/_page.ts.js';
import * as server from '../entries/pages/_lang_lang_/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_lang_lang_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[lang=lang]/+page.ts";
export { server };
export const server_id = "src/routes/[lang=lang]/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.f5e9815c.js","_app/immutable/chunks/i18n-util.13764a66.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.a2642d5a.js","_app/immutable/chunks/singletons.7fe6faa6.js","_app/immutable/chunks/index.0378bb41.js","_app/immutable/chunks/i18n-svelte.0137bbef.js","_app/immutable/chunks/ListingCardContainer.svelte_svelte_type_style_lang.9df755f7.js","_app/immutable/chunks/navigation.6aa762e3.js","_app/immutable/chunks/stores.d2261b2f.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = ["_app/immutable/assets/2.a1867b31.css","_app/immutable/assets/ListingCardContainer.20dcfea6.css"];
export const fonts = [];
