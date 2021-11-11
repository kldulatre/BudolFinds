<template>
	<div class="space-y-4">
		<div class="space-y-4">
			<img
				class="w-full h-36 md:h-56 object-cover"
				src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
				alt="Woman paying for a purchase"
			/>
			<div class="flex items-start space-x-4 px-4">
				<img
					class="inline-block h-20 w-20 rounded-full"
					src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
					alt=""
				/>
				<div class="space-y-2">
					<div class="flex justify-between">
						<span class="block text-xl font-semibold">Philippines</span>
						<button class="text-xs border border-green-300 bg-green-300 hover:bg-green-400 rounded-full py-1 px-4">Join</button>
					</div>
					<div class="block text-xs text-gray-600">
						The Philippines, officially the Republic of the Philippines, is an archipelagic country in Southeast Asia. It is situated in the
						western Pacific Ocean, and consists of about 7,640 islands, that are broadly categorized under three main geographical divisions
						from north to south: Luzon, Visayas, and Mindanao.
					</div>
					<div class="flex space-x-4">
						<div>
							<span class="font-semibold text-sm">1.3M</span>
							<span class="text-gray-600 text-sm">Members</span>
						</div>
						<div>
							<span class="font-semibold text-sm">@kldulatre</span>
							<span class="text-gray-600 text-sm">Admin</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="m-2 py-6 px-4 border border-gray-300 rounded-lg space-y-2 bg-gray-50">
			<span class="block px-1 font-semibold">Wanna Share A Product?</span>
			<div class="flex w-full border border-gray-400 rounded-lg">
				<input type="text" class="w-full rounded-l-lg border-none" placeholder="Paste Url Here" />
				<button class="py-2 rounded-r-lg px-8 bg-green-300 hover:bg-green-400 text-black">Next</button>
			</div>
			<span class="block px-1 text-xs text-gray-600">e.g. Lazada, Shopee, Zalora</span>
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