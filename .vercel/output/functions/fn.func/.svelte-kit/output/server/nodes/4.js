import * as server from '../entries/pages/__lang_lang__/_id_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/__lang_lang__/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[[lang=lang]]/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.63399441.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.fde2b77a.js","_app/immutable/chunks/GoBackBtn.2f33fa60.js","_app/immutable/chunks/navigation.2812a2c1.js","_app/immutable/chunks/singletons.9c75a827.js"];
export const stylesheets = ["_app/immutable/assets/4.f73cbf29.css","_app/immutable/assets/GoBackBtn.ac561d02.css"];
export const fonts = [];
