<script lang="ts">
	import './../../../src/gloobl.css';
	import * as m from '$paraglide/messages';
	import { availableLanguageTags } from '$paraglide/runtime';
	import { page } from '$app/stores';
	import { route } from '$lib/i18n-routing';
	import SearchInput from '$lib/components/SearchInput.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<Header />

<div class="w-full h-screen bg-gradient-to-r from-teal-500 to-indigo-800">
	<div class="pt-20">
		<h1
			class="  mx-auto w-fit text-4xl text-white text-center animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-white text-5xl text-white font-bold"
		>
			#1 Marketplace to Buy & Sell {m.home()}
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
