

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.52587c40.js","_app/immutable/chunks/scheduler.0d2b0a59.js","_app/immutable/chunks/index.19692e55.js","_app/immutable/chunks/stores.4e8a32d4.js","_app/immutable/chunks/singletons.59dea678.js","_app/immutable/chunks/gloobl.30ede4c5.js"];
export const stylesheets = ["_app/immutable/assets/gloobl.42f75dd7.css"];
export const fonts = [];
