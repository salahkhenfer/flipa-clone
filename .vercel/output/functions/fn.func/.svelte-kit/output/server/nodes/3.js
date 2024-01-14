import * as server from '../entries/pages/__lang_lang__/search/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/__lang_lang__/search/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[[lang=lang]]/search/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.1c3112da.js","_app/immutable/chunks/scheduler.0d2b0a59.js","_app/immutable/chunks/index.19692e55.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/GoBackBtn.78d76209.js","_app/immutable/chunks/navigation.bb62f277.js","_app/immutable/chunks/singletons.62053080.js"];
export const stylesheets = ["_app/immutable/assets/3.20dcfea6.css","_app/immutable/assets/GoBackBtn.ac561d02.css"];
export const fonts = [];
