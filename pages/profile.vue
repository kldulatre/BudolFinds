<template>
	<div>
        Kenjie LLoyd Dulatre
		<button @click.prevent.stop="logout">Logout</button>
	</div>
</template>

<script>
export default {
	methods: {
		logout() {
			this.$fire.auth.signOut();
		},
	},
};
</script>