export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","flag.png","Screenshot_2024-01-14_151943-removebg-preview.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.fe1ee1f5.js","app":"_app/immutable/entry/app.4910fa33.js","imports":["_app/immutable/entry/start.fe1ee1f5.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.9c75a827.js","_app/immutable/entry/app.4910fa33.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.fde2b77a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js'))
		],
		routes: [
			{
				id: "/api/autoCompelete",
				pattern: /^\/api\/autoCompelete\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/autoCompelete/_server.ts.js'))
			},
			{
				id: "/api/getListings",
				pattern: /^\/api\/getListings\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/getListings/_server.ts.js'))
			},
			{
				id: "/api/search",
				pattern: /^\/api\/search\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/search/_server.ts.js'))
			},
			{
				id: "/api/spectators",
				pattern: /^\/api\/spectators\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/spectators/_server.ts.js'))
			},
			{
				id: "/[[lang=lang]]/search",
				pattern: /^(?:\/([^/]+))?\/search\/?$/,
				params: [{"name":"lang","matcher":"lang","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/[[lang=lang]]",
				pattern: /^(?:\/([^/]+))?\/?$/,
				params: [{"name":"lang","matcher":"lang","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/[[lang=lang]]/[id]",
				pattern: /^(?:\/([^/]+))?\/([^/]+?)\/?$/,
				params: [{"name":"lang","matcher":"lang","optional":true,"rest":false,"chained":true},{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			const { match: lang } = await import ('../output/server/entries/matchers/lang.js')
			return { lang };
		}
	}
}
})();
