

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ff7b152f.js","_app/immutable/chunks/scheduler.0d2b0a59.js","_app/immutable/chunks/index.19692e55.js","_app/immutable/chunks/stores.4e8a32d4.js","_app/immutable/chunks/singletons.59dea678.js"];
export const stylesheets = [];
export const fonts = [];
