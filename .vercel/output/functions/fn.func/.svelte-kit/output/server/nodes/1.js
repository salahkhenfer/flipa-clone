

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.52cf3e68.js","_app/immutable/chunks/scheduler.b0c1c2c3.js","_app/immutable/chunks/index.0b2cfd28.js","_app/immutable/chunks/stores.cc27fc08.js","_app/immutable/chunks/singletons.eb1b669d.js"];
export const stylesheets = [];
export const fonts = [];
