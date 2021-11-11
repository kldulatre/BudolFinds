<template>
	<div class="space-y-4">
		<div class="space-y-4">
			<img
				class="w-full h-56 object-cover"
				src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
				alt="Woman paying for a purchase"
			/>
			<div class="flex items-start space-x-2 px-2">
				<img
					class="inline-block h-20 w-20 rounded-full"
					src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
					alt=""
				/>
				<div class="space-y-1">
					<div class="flex justify-between">
						<span class="block text-xl font-semibold">Philippines</span>
						<button class="text-xs border border-green-300 bg-green-300 rounded-full py-1 px-4">Join</button>
					</div>
					<div class="block text-xs text-gray-600">
						The Philippines, officially the Republic of the Philippines, is an archipelagic country in Southeast Asia. It is situated in the
						western Pacific Ocean, and consists of about 7,640 islands, that are broadly categorized under three main geographical divisions
						from north to south: Luzon, Visayas, and Mindanao.
					</div>
					<div class="flex space-x-3">
						<div>
							<span class="font-semibold text-sm">1.3M</span>
							<span class="text-gray-600 text-sm">Members</span>
						</div>
						<div>
                            <span class="font-semibold text-sm">@KenjieLloydDulatre</span>
							<span class="text-gray-600 text-sm">Admin</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>