<script lang="ts">
	import './../../../src/gloobl.css';
	import * as m from '$paraglide/messages';
	import { availableLanguageTags } from '$paraglide/runtime';
	import { page } from '$app/stores';
	import { route } from '$lib/i18n-routing';
	import SearchInput from '$lib/components/SearchInput.svelte';
	import Header from '$lib/components/Header.svelte';
	import { languageTag } from '$paraglide/runtime';
</script>

<Header />

<div
	class={`w-full h-screen bg-gradient-to-r ${
		languageTag() === 'en' ? 'from-teal-500 to-indigo-800' : 'from-indigo-800 to-teal-500'
	} `}
>
	<div class="pt-20 w-fit h-fit mx-auto">
		<div
			class="  mx-auto w-fit max-sm:text-xl max-sm:py-1 py-4 text-center animate-typing overflow-hidden whitespace-nowrap border-r-white text-5xl text-white font-bold h-fit"
		>
			{m.titleHome()}
		</div>
	</div>
	<div class=" flex items-center pt-5 w-fit h-fit mx-auto">
		<img
			class="w-20 h-18 mx-auto mt-2"
			src="/static/Screenshot_2024-01-14_151943-removebg-preview.png"
			alt=""
		/>

		<div
			class="  mx-auto w-fit max-sm:text-xl max-sm:py-1 py-4 text-center animate-typing overflow-hidden whitespace-nowrap border-r-white text-5xl text-white font-bold h-fit"
		>
			{m.Yamdik()}
		</div>
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
	.showmore-container {
		display: flex;
		justify-content: center;
	}
</style>
