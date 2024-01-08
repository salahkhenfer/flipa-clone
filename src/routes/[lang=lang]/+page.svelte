<script lang="ts">
	import LocaleSwitcher from '$lib/components/LocaleSwitcher.svelte';
	import './../../../src/gloobl.css';
	import ListingCard from '$lib/components/ListingCard.svelte';
	import ListingCardContainer from '$lib/components/ListingCardContainer.svelte';
	import SearchInput from '$lib/components/SearchInput.svelte';
	import type { PageData } from './$types';
	import Header from '$lib/components/Header.svelte';

	import { replaceLocaleInUrl } from '../../utils';

	import { locales, baseLocale } from '$i18n/i18n-util';
</script>

<Header />

<div class="w-full h-screen bg-gradient-to-r from-teal-500 to-indigo-800">
	<div class="pt-20">
		<h1
			class="  mx-auto w-fit text-4xl text-white text-center animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-white text-5xl text-white font-bold"
		>
			#1 Marketplace to Buy & Sell {baseLocale}
		</h1>
	</div>
	<!--  -->
	<!-- <ListingCardContainer>
			{#each listings as listing}
				<ListingCard {listing} />
			{/each}
		</ListingCardContainer>
		<div class="showmore-container">
			<button on:click={showMoreHandler}>Show more</button>
		</div> -->
	<SearchInput />
</div>

<style>
	button {
		background-color: #eee;
		border: none;
		border-radius: 0.5rem;
		padding: 0.5rem 1rem;
		font-size: 1.2rem;
		cursor: pointer;
	}

	.showmore-container {
		display: flex;
		justify-content: center;
	}
</style>
