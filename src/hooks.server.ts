import { start_mongo } from '$lib/db/mongo';
import { sourceLanguageTag } from '$paraglide/runtime';

start_mongo()
	.then(() => {
		console.log('Mongo started');
	})
	.catch((err) => {
		console.error('Mongo failed to start', err);
	});

export async function handle({ event, resolve }) {
	const lang = event.params.lang ?? sourceLanguageTag;
	return await resolve(event, {
		transformPageChunk({ done, html }) {
			//Only do it at the very end of the rendering process
			if (done) {
				return html.replace('%lang%', lang);
			}
		}
	});
}
