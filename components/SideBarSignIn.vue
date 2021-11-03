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
		<NuxtLink to="/profile">
			<li class="flex space-x-2 items-center hover:bg-gray-100 p-4 pl-6 mb-2 rounded-full">
				<IconsUser />
				<span>Profile</span>
			</li>
		</NuxtLink>
		<NuxtLink to="/post/create">
			<li class="flex space-x-2 items-center justify-center p-4 pl-6 mt-6 rounded-full bg-green-300 hover:bg-green-400">
				<IconsPlus />
				<span>Create Post</span>
			</li>
		</NuxtLink>
	</ul>
</template>