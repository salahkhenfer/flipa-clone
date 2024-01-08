

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.85ed68ef.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.a2642d5a.js","_app/immutable/chunks/stores.d2261b2f.js","_app/immutable/chunks/singletons.7fe6faa6.js","_app/immutable/chunks/index.0378bb41.js"];
export const stylesheets = [];
export const fonts = [];
