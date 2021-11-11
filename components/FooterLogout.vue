<template>
	<div class="md:invisible fixed bottom-0 w-full flex flex-col items-end">
		<div class="bg-green-300 rounded-full m-3 p-2 shadow-md">
			<NuxtLink to="/post/create">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</NuxtLink>
		</div>
		<div class="flex items-center justify-evenly shadow h-12 w-full border bg-white">
			<NuxtLink to="/">
				<IconsHome class="py-2 px-6" />
			</NuxtLink>
			<NuxtLink to="/communities">
				<IconsCommunity class="py-2 px-6" />
			</NuxtLink>
			<NuxtLink to="/auth/login">
				<IconsLogIn class="py-2 px-6" />
			</NuxtLink>
		</div>
	</div>
</template>