import { type AvailableLanguageTag, availableLanguageTags } from '$paraglide/runtime';

/**
 * Returns the path in the given language, regardless of which language the path is in.
 */
export function route(path: string, lang: AvailableLanguageTag) {
	path = withoutLanguageTag(path);

	// Prefix all other languages
	return `/${lang}${path}`;
}

/**
 * Returns the path without the language tag
 */
function withoutLanguageTag(path: string) {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_, maybeLang, ...rest] = path.split('/');
	if (availableLanguageTags.includes(maybeLang as AvailableLanguageTag)) {
		return '/' + rest.join('/');
	}
	return path;
}
