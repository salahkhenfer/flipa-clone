import * as server from '../entries/pages/__lang_lang__/_id_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/__lang_lang__/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[[lang=lang]]/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.0d750cd1.js","_app/immutable/chunks/scheduler.0d2b0a59.js","_app/immutable/chunks/index.19692e55.js","_app/immutable/chunks/GoBackBtn.061b271d.js","_app/immutable/chunks/navigation.d5c0670e.js","_app/immutable/chunks/singletons.59dea678.js"];
export const stylesheets = ["_app/immutable/assets/4.f73cbf29.css","_app/immutable/assets/GoBackBtn.ac561d02.css"];
export const fonts = [];
