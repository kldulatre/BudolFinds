<template>
	<div class="flex justify-center">
		<form class="bg-gray-50 flex flex-col space-y-6 border px-4 py-6 m-4 w-9/12 rounded-md sm:w-96 sm:m-8 sm:p-8">
			<div class="flex justify-center">
				<h1 class="text-2xl font-semibold">Register</h1>
			</div>
			<div class="block">
				<span>Email Address</span>
				<input type="text" class="block rounded-md border-gray-300 shadow-sm mt-1 w-full" placeholder="Enter email address" v-model="auth.email" />
			</div>
			<div class="block">
				<span>Username</span>
				<input type="text" class="block rounded-md border-gray-300 shadow-sm mt-1 w-full" placeholder="Enter username" v-model="auth.username" />
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
				<span>Confirm Password</span>
				<input
					type="password"
					class="block rounded-md border-gray-300 shadow-sm mt-1 w-full"
					placeholder="Enter your password again"
					v-model="auth.confirmation"
				/>
			</div>
			<div class="block">
				<button class="mt-1 w-full shadow p-2 rounded-md bg-green-400 border-gray-300" @click.prevent.stop="register">Submit</button>
			</div>
			<NuxtLink to="/auth/login">
				<div class="flex justify-center block text-sm text-gray-600">
					Already have an account?
					<span class="text-black ml-1 font-semibold">Sign-in</span>
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
			withError: false,
			errorMsg: "",
			auth: {
				email: "",
				username: "",
				password: "",
				confirmation: "",
			},
		};
	},
	methods: {
		register() {
			if (this.auth.password != this.auth.confirmation) {
				this.withErrorMsg = true;
				this.errorMsg = "Passwords doesn't match";
			} else {
				this.$fire.auth
					.createUserWithEmailAndPassword(this.auth.email, this.auth.password)
					.then((data) => {
						console.log(data.email);
					})
					.catch((error) => {
						console.log(error);
					});
				this.$router.push("/auth/login");
			}
		},
	},
};
</script>