

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.6efe19b7.js","_app/immutable/chunks/scheduler.0d2b0a59.js","_app/immutable/chunks/index.19692e55.js","_app/immutable/chunks/stores.046f5152.js","_app/immutable/chunks/singletons.75859fe2.js","_app/immutable/chunks/gloobl.30ede4c5.js"];
export const stylesheets = ["_app/immutable/assets/gloobl.42f75dd7.css"];
export const fonts = [];
