<template>
	<div>
		<div class="border rounded-lg p-6 m-2 space-y-8">
			<div class="text-2xl">Create A Post</div>
			<div class="space-y-2">
				<span class="block uppercase tracking-wide text-gray-700 text-xs font-bold">Community Name</span>
				<select class="block rounded-md border-gray-300 shadow-sm w-full">
					<option>Choose a color</option>
					<option>Red</option>
					<option>Blue</option>
					<option>Yellow</option>
					<option>Black</option>
					<option>Orange</option>
					<option>Purple</option>
					<option>Gray</option>
					<option>White</option>
				</select>
			</div>
			<div v-if="notNext" class="space-y-8">
				<div v-if="notNext" class="space-y-1">
					<span class="uppercase tracking-wide text-gray-700 text-xs font-bold">Product Url</span>
					<input type="text" class="block rounded-md border-gray-300 shadow-sm w-full" placeholder="" />
					<span class="block text-xs tracking-wide text-gray-500">e.g. Lazada, Shopee, Zalora</span>
				</div>
				<button v-if="notNext" @click.prevent.stop="next" class="py-2 px-8 rounded-lg bg-green-300 hover:bg-green-400 text-black">Next</button>
			</div>
			<div v-else class="space-y-8">
				<img
					class="rounded-lg w-80 h-80 object-cover"
					src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3"
					alt="product"
				/>
				<div class="space-y-1">
					<span class="uppercase tracking-wide text-gray-700 text-xs font-bold">Product</span>
					<input type="text" class="block rounded-md border-gray-300 shadow-sm w-full" placeholder="" />
				</div>
				<div class="space-y-2">
					<span class="block uppercase tracking-wide text-gray-700 text-xs font-bold">Description</span>
					<textarea class="block w-full rounded-md border-gray-300 shadow-sm" rows="5"></textarea>
				</div>
				<div class="space-x-2 flex items-end">
					<button @click.prevent.stop="next" class="py-2 px-8 rounded-lg bg-green-300 hover:bg-green-400 text-black">Submit</button>
					<button @click.prevent.stop="cancel" class="py-1.5 px-6 rounded-lg bg-white border hover:bg-gray-100 text-black">Cancel</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			notNext: true,
		};
	},
	methods: {
		next() {
			this.notNext = false;
		},
		cancel() {
			this.notNext = true;
		},
	},
};
</script>

<style lang="scss" scoped>
</style>