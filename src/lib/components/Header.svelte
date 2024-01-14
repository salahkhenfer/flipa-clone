<script>
	import * as m from '$paraglide/messages';
	import { page } from '$app/stores';
	import { languageTag } from '$paraglide/runtime';
	import { route } from '$lib/i18n-routing';
</script>

<nav
	class={`shadow-lg shadow-cyan-500/10 w-full bg-gradient-to-r ${
		languageTag() === 'en' ? 'from-teal-500 to-indigo-800' : 'from-indigo-800 to-teal-500'
	} border-gray-200 sticky`}
>
	<div class=" md:hidden max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
			<img
				class="w-20 h-19"
				src="/static/Screenshot_2024-01-14_151943-removebg-preview.png"
				alt=""
			/>
		</a>
		<div class="flex">
			<div class="text-3xl text-white px-4">|</div>
			{#if languageTag() === 'ar'}
				<div class=" text-xl text-white px-4">
					<a href={route($page.url.pathname, 'en')} hreflang="en">{m.language()}</a>
				</div>
			{:else}
				<div class=" text-xl text-white px-4">
					<a href={route($page.url.pathname, 'ar')} hreflang="ar">{m.language()}</a>
				</div>
			{/if}
		</div>
		<div class=" mt-2 flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
			<!-- Dropdown -->
			<div class="flex gap-3">
				<div
					class="text-white border-spacing-0 hover:text-black cursor-pointer text-xl transition-all duration-300 border-solid hover:bg-white border-2 border-white px-5 py-1 rounded-3xl"
				>
					{m.DetFreeValidation()}
				</div>
				<div
					class="text-white border-spacing-0 bg-teal-500 cursor-pointer text-xl transition-all duration-300 border-solid hover:bg-indigo-800 border-2 border-white px-5 py-1 rounded-3xl"
				>
					{m.SellFree()}
				</div>
			</div>
		</div>
	</div>

	<!--  disktop -->
	<div
		class=" max-lg:hidden max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
	>
		<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
			<img
				class="w-20 h-19"
				src="/static/Screenshot_2024-01-14_151943-removebg-preview.png"
				alt=""
			/>
		</a>
		<div class=" flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
			<!-- Dropdown -->
			<div class="flex gap-3">
				<div
					class="text-white border-spacing-0 hover:text-black max-md:text-sm cursor-pointer text-xl transition-all duration-300 border-solid hover:bg-white border-2 border-white px-5 py-1 rounded-3xl"
				>
					{m.DetFreeValidation()}
				</div>
				<div
					class="text-white border-spacing-0 bg-teal-500 cursor-pointer text-xl transition-all duration-300 border-solid hover:bg-indigo-800 border-2 border-white px-5 py-1 rounded-3xl"
				>
					{m.SellFree()}
				</div>
			</div>
			<div class="text-3xl text-white px-4">|</div>
			<div>
				{#if languageTag() === 'ar'}
					<div class=" text-xl text-white px-4">
						<a href={route($page.url.pathname, 'en')} hreflang="en">{m.language()}</a>
					</div>
				{:else}
					<div class=" text-xl text-white px-4">
						<a href={route($page.url.pathname, 'ar')} hreflang="ar">{m.language()}</a>
					</div>
				{/if}
			</div>
		</div>
	</div>
</nav>
