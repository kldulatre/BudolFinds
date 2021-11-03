<template>
	<ul class="sticky top-16 p-6">
		<NuxtLink to="/">
			<li class="flex space-x-2 items-center hover:bg-gray-100 p-4 pl-6 mb-2 rounded-full">
				<IconsHome />
				<span>Home</span>
			</li>
		</NuxtLink>
		<NuxtLink to="/communities">
			<li class="flex space-x-2 items-center hover:bg-gray-100 p-4 pl-6 mb-2 rounded-full">
				<IconsCommunity />
				<span>Communities</span>
			</li>
		</NuxtLink>
		<NuxtLink to="/auth/login">
			<li class="flex space-x-2 items-center hover:bg-gray-100 p-4 pl-6 mb-2 rounded-full">
				<IconsLogIn />
				<span>Log-in / Register</span>
			</li>
		</NuxtLink>
	</ul>
</template>