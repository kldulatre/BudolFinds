<template>
	<div>
		<div class="border rounded-lg p-6 m-2 space-y-8">
			<div class="text-2xl">My Profile</div>
			<div class="block space-y-1">
				<span class="uppercase tracking-wide text-gray-700 text-xs font-bold">Email</span>
				<span class="block text-medium bg-gray-100 py-3 px-2 rounded-lg">{{ user.email }}</span>
			</div>
			<div class="block space-y-1">
				<span class="uppercase tracking-wide text-gray-700 text-xs font-bold">Password</span>
				<span class="block text-medium font-medium bg-gray-100 py-3 px-2 rounded-lg">**********</span>
			</div>
			<button @click.prevent.stop="logout" class="py-2 px-6 rounded-full bg-red-400 text-white">Logout</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: this.$store.state.user,
		};
	},
	methods: {
		logout() {
			this.$fire.auth.signOut();
		},
	},
};
</script>