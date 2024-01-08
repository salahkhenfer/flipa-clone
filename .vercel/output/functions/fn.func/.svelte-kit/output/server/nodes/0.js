

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.605c16fd.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.a2642d5a.js","_app/immutable/chunks/i18n-svelte.0137bbef.js","_app/immutable/chunks/index.0378bb41.js","_app/immutable/chunks/i18n-util.13764a66.js"];
export const stylesheets = [];
export const fonts = [];
