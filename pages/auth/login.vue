<template>
	<div class="flex justify-center">
		<form class="flex flex-col space-y-6 bg-gray-50 border rounded-md p-4 py-6 m-4 w-9/12 sm:w-96 sm:m-8 sm:p-8">
			<div class="flex justify-center">
				<h1 class="text-2xl font-semibold">Welcome!</h1>
			</div>
			<div class="block">
				<span>Email Address</span>
				<input type="text" class="block rounded-md border-gray-300 shadow-sm mt-1 w-full" placeholder="Enter email address" v-model="auth.email" />
			</div>
			<div class="block">
				<span>Password</span>
				<input
					type="password"
					class="block rounded-md border-gray-300 shadow-sm mt-1 w-full"
					placeholder="Enter your password"
					v-model="auth.password"
				/>
			</div>
			<div class="block">
				<button class="mt-1 w-full shadow p-2 rounded-md bg-green-400 border-gray-300" @click.prevent.stop="login">Submit</button>
			</div>
			<NuxtLink to="/auth/register">
				<div class="flex justify-center block text-sm text-gray-600">
					Don't have an account?
					<span class="text-black ml-1 font-semibold">Register</span>
				</div>
			</NuxtLink>
		</form>
	</div>
</template>

<script>
export default {
	asyncData() {
		$nuxt.$fire.auth.signOut();
	},
	data() {
		return {
			auth: {
				email: "",
				password: "",
			},
		};
	},
	methods: {
		async login() {
			const data = await this.$fire.auth.signInWithEmailAndPassword(this.auth.email, this.auth.password);
			console.log(data.user.email);
			this.$router.push("/");
		},
	},
};
</script>