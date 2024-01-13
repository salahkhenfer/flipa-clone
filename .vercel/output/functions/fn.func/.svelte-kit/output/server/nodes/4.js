import * as server from '../entries/pages/_lang_lang_/_id_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_lang_lang_/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[lang=lang]/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.9cf5ffba.js","_app/immutable/chunks/scheduler.b0c1c2c3.js","_app/immutable/chunks/index.0b2cfd28.js","_app/immutable/chunks/GoBackBtn.7ab04377.js","_app/immutable/chunks/navigation.30c1b426.js","_app/immutable/chunks/singletons.eb1b669d.js"];
export const stylesheets = ["_app/immutable/assets/4.f73cbf29.css","_app/immutable/assets/GoBackBtn.ac561d02.css"];
export const fonts = [];
