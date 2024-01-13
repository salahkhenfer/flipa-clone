

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.95dc6a4e.js","_app/immutable/chunks/scheduler.b0c1c2c3.js","_app/immutable/chunks/index.0b2cfd28.js","_app/immutable/chunks/stores.cc27fc08.js","_app/immutable/chunks/singletons.eb1b669d.js","_app/immutable/chunks/gloobl.01d6eddd.js"];
export const stylesheets = ["_app/immutable/assets/gloobl.cf113108.css"];
export const fonts = [];
