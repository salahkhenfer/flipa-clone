

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.3d067a17.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.fde2b77a.js","_app/immutable/chunks/stores.0c2c1af9.js","_app/immutable/chunks/singletons.9c75a827.js"];
export const stylesheets = [];
export const fonts = [];
