<!-- <script lang="ts">
	import './../../src/gloobl.css';
	import ListingCard from '$lib/components/ListingCard.svelte';
	import ListingCardContainer from '$lib/components/ListingCardContainer.svelte';
	import SearchInput from '$lib/components/SearchInput.svelte';
	import type { PageData } from './$types';
	import Header from '$lib/components/Header.svelte';
	export let data: PageData;
	$: ({ listings, page } = data);

	async function showMoreHandler() {
		console.log(page, 'page');
		const newListings = await fetch(`/api/getResults?page=${page + 1}`).then((res) => {
			page = page + 1;
			return res.json();
		});
		listings = [...listings, ...newListings];
	}
</script> -->

<!-- <Header />

<div class="w-full h-screen bg-gradient-to-r from-teal-500 to-indigo-800">
	<div class="pt-20">
		<h1
			class="  mx-auto w-fit text-4xl text-white text-center animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-white text-5xl text-white font-bold"
		>
			#1 Marketplace to Buy & Sell
		</h1>
	</div>
	
 <ListingCardContainer>
			{#each listings as listing}
				<ListingCard {listing} />
			{/each}
		</ListingCardContainer>
		<div class="showmore-container">
			<button on:click={showMoreHandler}>Show more</button>
		</div>
	<SearchInput />
</div> -->
<!-- 
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
</style> -->

<!-- ===== -->
<script>
	import { t } from '$lib/translations';

	export let data;

	const link = 'https://kit.svelte.dev';
</script>

<h1>{$t('home.title')}</h1>
<p>{@html $t('home.text', { link })}</p>

<Component bind:props={data.cs} />
<Component bind:props={data.de} />
