<script lang="ts">
	import { goto } from '$app/navigation';
	import * as m from '$paraglide/messages';

	let searchTerm = '';
	let suggestions: string | any[] = [];

	const handleSearch = () => {
		if (searchTerm.trim().length < 3) return;
		console.log(encodeURIComponent(searchTerm), 'searchTerm');
		goto(`/search?search=${encodeURIComponent(searchTerm)}`);
	};

	let timeoutId: string | number | NodeJS.Timeout | undefined;

	const autoCompeleteHandler = () => {
		if (searchTerm.trim().length < 3) return;
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			fetch('/api/autoCompelete?search=' + searchTerm)
				.then((res) => res.json())
				.then((data) => {
					console.log(data, 'data');
					suggestions = data;
				});
		}, 200);
	};
</script>

<div class="bg-transparent flex flex-col justify-center">
	<div class=" p-12 max-md:p-0 max-md:pt-5 w-full sm:max-w-2xl sm:mx-auto">
		<div class="overflow-hidden z-0 rounded-full relative p-3">
			<form
				autocomplete="off"
				on:submit|preventDefault={handleSearch}
				class="relative flex z-50 bg-white rounded-full"
			>
				<input
					bind:value={searchTerm}
					on:input={autoCompeleteHandler}
					placeholder={m.Search()}
					type="text"
					class="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"
				/>
				<button
					type="submit"
					class="bg-indigo-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none"
					>Search</button
				>
			</form>
			<div class="glow glow-1 z-10 bg-pink-400 absolute"></div>
			<div class="glow glow-2 z-20 bg-purple-400 absolute"></div>
			<div class="glow glow-3 z-30 bg-indigo-500 absolute"></div>
			<div class="glow glow-4 z-40 bg-blue-400 absolute"></div>
		</div>
		{#if suggestions.length > 0}
			<div class=" rounded-xl overflow-hidden">
				<ul class="bg-white overflow-scroll h-56 p-2">
					{#each suggestions as suggestion}
						<li>
							<a href={`/search?search=${encodeURIComponent(suggestion.title)}`}
								>{suggestion.title}</a
							>
							<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>
</div>

<style>
	/*
 * View a PURE 100% Tailwind CSS version here:
 * https://play.tailwindcss.com/Vg6H4j8Fux
 */

	.glow {
		top: -10%;
		left: -10%;
		width: 120%;
		height: 120%;
		border-radius: 100%;
	}

	.glow-1 {
		animation: glow1 4s linear infinite;
	}

	.glow-2 {
		animation: glow2 4s linear infinite;
		animation-delay: 100ms;
	}

	.glow-3 {
		animation: glow3 4s linear infinite;
		animation-delay: 200ms;
	}

	.glow-4 {
		animation: glow4 4s linear infinite;
		animation-delay: 300ms;
	}

	@keyframes glow1 {
		0% {
			transform: translate(10%, 10%) scale(1);
		}
		25% {
			transform: translate(-10%, 10%) scale(1);
		}
		50% {
			transform: translate(-10%, -10%) scale(1);
		}
		75% {
			transform: translate(10%, -10%) scale(1);
		}
		100% {
			transform: translate(10%, 10%) scale(1);
		}
	}

	@keyframes glow2 {
		0% {
			transform: translate(-10%, -10%) scale(1);
		}
		25% {
			transform: translate(10%, -10%) scale(1);
		}
		50% {
			transform: translate(10%, 10%) scale(1);
		}
		75% {
			transform: translate(-10%, 10%) scale(1);
		}
		100% {
			transform: translate(-10%, -10%) scale(1);
		}
	}

	@keyframes glow3 {
		0% {
			transform: translate(-10%, 10%) scale(1);
		}
		25% {
			transform: translate(-10%, -10%) scale(1);
		}
		50% {
			transform: translate(10%, -10%) scale(1);
		}
		75% {
			transform: translate(10%, 10%) scale(1);
		}
		100% {
			transform: translate(-10%, 10%) scale(1);
		}
	}

	@keyframes glow4 {
		0% {
			transform: translate(10%, -10%) scale(1);
		}
		25% {
			transform: translate(10%, 10%) scale(1);
		}
		50% {
			transform: translate(-10%, 10%) scale(1);
		}
		75% {
			transform: translate(-10%, -10%) scale(1);
		}
		100% {
			transform: translate(10%, -10%) scale(1);
		}
	}
</style>
