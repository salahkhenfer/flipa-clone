import * as server from '../entries/pages/_lang_lang_/_id_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_lang_lang_/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[lang=lang]/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.a4135d78.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.a2642d5a.js","_app/immutable/chunks/GoBackBtn.4d541a4e.js","_app/immutable/chunks/navigation.6aa762e3.js","_app/immutable/chunks/singletons.7fe6faa6.js","_app/immutable/chunks/index.0378bb41.js"];
export const stylesheets = ["_app/immutable/assets/4.f73cbf29.css","_app/immutable/assets/GoBackBtn.ac561d02.css"];
export const fonts = [];
