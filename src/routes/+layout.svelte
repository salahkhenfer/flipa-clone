<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { setLanguageTag, sourceLanguageTag, type AvailableLanguageTag } from '$paraglide/runtime';
	import '.././gloobl.css';

	//Use the default language if no language is given
	let lang: AvailableLanguageTag = sourceLanguageTag;
	$: lang = ($page.params.lang as AvailableLanguageTag) ?? sourceLanguageTag;
	$: setLanguageTag(lang);
	$: if (browser) {
		console.log('Language', lang);
		// Set the document language and direction
		document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
		document.documentElement.lang = lang;
	}
</script>

<slot />
