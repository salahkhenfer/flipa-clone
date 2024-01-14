

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.deb9ff0a.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.fde2b77a.js","_app/immutable/chunks/stores.0c2c1af9.js","_app/immutable/chunks/singletons.9c75a827.js","_app/immutable/chunks/gloobl.26cfa5e6.js"];
export const stylesheets = ["_app/immutable/assets/gloobl.4c74c585.css"];
export const fonts = [];
