<script>
	import { browser } from '$app/environment';
	import { setLocale, locale } from '$i18n/i18n-svelte';
	$: if (browser) {
		console.log('Language', $locale);
		// Set the document language and direction
		document.documentElement.dir = $locale === 'ar' ? 'rtl' : 'ltr';
		document.documentElement.lang = $locale;
	}
</script>

<main>
	<slot />
</main>

<style>
</style>
