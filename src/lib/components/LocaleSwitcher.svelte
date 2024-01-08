<script lang="ts">
	import { browser } from '$app/environment';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import { setLocale, locale } from '$i18n/i18n-svelte';
	import type { Locales } from '$i18n/i18n-types';
	import { baseLocale, locales } from '$i18n/i18n-util';
	import { loadLocaleAsync } from '$i18n/i18n-util.async';
	import { replaceLocaleInUrl } from '../../utils.js';
	const switchLocale = async (newLocale: Locales, updateHistoryState = true) => {
		if (!newLocale || $locale === newLocale) return;

		// load new dictionary from server
		await loadLocaleAsync(newLocale);

		// select locale
		setLocale(newLocale);

		if (updateHistoryState) {
			// update url to reflect locale changes
			history.pushState({ locale: newLocale }, '', replaceLocaleInUrl($page.url, newLocale));
		}

		// run the `load` function again
		invalidateAll();
	};

	// update `lang` attribute
	$: browser && document.querySelector('html')!.setAttribute('lang', $locale);

	// update locale when navigating via browser back/forward buttons
	const handlePopStateEvent = async ({ state }: PopStateEvent) => switchLocale(state.locale, false);

	// update locale when page store changes
	$: if (browser) {
		const lang = $page.params.lang as Locales;
		switchLocale(lang, false);
		history.replaceState(
			{ ...history.state, locale: lang },
			'',
			replaceLocaleInUrl($page.url, lang)
		);
	}
</script>

<svelte:window on:popstate={handlePopStateEvent} />
<ul>
	{#each locales as l}
		<!-- <li>
			<a class:active={l === $locale} href={replaceLocaleInUrl($page.url, l)}>
				{l}
			</a>
		</li> -->

		{#if l == 'ar' && $locale == 'ar'}
			<li>
				<a href={replaceLocaleInUrl($page.url, 'en')}>
					<button
						type="button"
						data-dropdown-toggle="language-dropdown-menu"
						class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
					>
						English (US)
					</button>
				</a>
			</li>
		{/if}

		{#if l == 'en' && $locale == 'en'}
			<li>
				<a href={replaceLocaleInUrl($page.url, 'ar')}>
					<button
						type="button"
						data-dropdown-toggle="language-dropdown-menu"
						class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
					>
						عربي
					</button>
				</a>
			</li>
		{/if}
	{/each}
</ul>
<!-- {#if baseLocale == 'ar'}
	<li>
		<a href={replaceLocaleInUrl($page.url, 'en')}>
			<button
				type="button"
				data-dropdown-toggle="language-dropdown-menu"
				class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
			>
				<svg
					class="w-5 h-5 rounded-full me-3"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 3900 3900"
					><path fill="#b22234" d="M0 0h7410v3900H0z" /><path
						d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
						stroke="#fff"
						stroke-width="300"
					/><path fill="#3c3b6e" d="M0 0h2964v2100H0z" /><g fill="#fff"
						><g id="d"
							><g id="c"
								><g id="e"
									><g id="b"
										><path
											id="a"
											d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
										/><use xlink:href="#a" y="420" /><use xlink:href="#a" y="840" /><use
											xlink:href="#a"
											y="1260"
										/></g
									><use xlink:href="#a" y="1680" /></g
								><use xlink:href="#b" x="247" y="210" /></g
							><use xlink:href="#c" x="494" /></g
						><use xlink:href="#d" x="988" /><use xlink:href="#c" x="1976" /><use
							xlink:href="#e"
							x="2470"
						/></g
					></svg
				>
				English (US)
			</button>
		</a>
	</li>
{/if}

{#if baseLocale == 'en'}
	<li>
		<a href={replaceLocaleInUrl($page.url, 'ar')}>
			<button
				type="button"
				data-dropdown-toggle="language-dropdown-menu"
				class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
			>
				عربي
			</button>
		</a>
	</li>
{/if} -->
