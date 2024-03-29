import * as server from '../entries/pages/__lang_lang__/search/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/__lang_lang__/search/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[[lang=lang]]/search/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.c3259be1.js","_app/immutable/chunks/scheduler.0d2b0a59.js","_app/immutable/chunks/index.19692e55.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/GoBackBtn.8a6b5be6.js","_app/immutable/chunks/navigation.b6ffa37d.js","_app/immutable/chunks/singletons.75859fe2.js"];
export const stylesheets = ["_app/immutable/assets/3.20dcfea6.css","_app/immutable/assets/GoBackBtn.ac561d02.css"];
export const fonts = [];
