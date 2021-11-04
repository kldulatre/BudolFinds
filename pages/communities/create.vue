<template>
	<div>
		<div class="border rounded-lg p-6 m-2 space-y-8">
			<div class="text-2xl">Create a Community</div>
			<div class="space-y-2">
				<span class="block uppercase tracking-wide text-gray-700 text-xs font-bold">Type</span>
				<button class="border border-gray-300 bg-gray-100 rounded-lg px-5 py-1 text-sm">Public</button>
				<span class="text-xs text-gray-500 px-1">Anyone can view, post, and comment to this community</span>
			</div>
			<div class="space-y-2">
				<span class="block uppercase tracking-wide text-gray-700 text-xs font-bold">Profile</span>
				<div class="flex items-end space-x-2">
					<img v-if="imageUrl" :src="imageUrl" class="border border-gray-300 w-28 h-28 rounded-full object-cover" />
					<div v-else class="flex justify-center items-center border border-gray-300 w-28 h-28 rounded-full">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							/>
						</svg>
					</div>
					<div class="flex items-center">
						<input
							type="file"
							accept=".jpeg,.jpg,.png,image/jpeg,image/png"
							@change.prevent="selectFile"
							class="border border-gray-100 hidden"
							id="files"
						/>
						<label for="files" class="border border-gray-400 rounded-lg py-1 px-3 text-sm">Upload File</label>
						<half-circle-spinner v-if="uploading" class="ml-2" :animation-duration="1000" :size="18" color="#ff1d5e" />
					</div>
				</div>
			</div>
			<div class="space-y-1">
				<span class="uppercase tracking-wide text-gray-700 text-xs font-bold">Community Name</span>
				<input type="text" class="block rounded-md border-gray-300 shadow-sm w-full" placeholder="" />
			</div>
			<div class="space-y-2">
				<span class="block uppercase tracking-wide text-gray-700 text-xs font-bold">Description *</span>
				<textarea class="block w-full rounded-md border-gray-300 shadow-sm" rows="5"></textarea>
			</div>
			<button @click.prevent.stop="logout" class="py-2 px-8 rounded-lg bg-green-300 hover:bg-green-400 text-black">Submit</button>
		</div>
	</div>
</template>

<script>
import { storage } from "~/plugins/initFirebase.js";
import { HalfCircleSpinner } from "epic-spinners";
import { uid } from "uid";

export default {
	components: {
		HalfCircleSpinner,
	},
	data() {
		return {
			imageData: [],
			imageUrl: null,
			uploading: false,
		};
	},
	methods: {
		async selectFile(event) {
			this.uploading = true;
			this.imageData = event.target.files[0];
			const storageRef = storage.ref().child("profiles/" + uid(32));
			const meta = {
				contentType: event.target.files[0].type,
			};
			const snapshot = await storageRef.put(this.imageData, meta);
			this.imageUrl = await storageRef.getDownloadURL();
			if (this.imageUrl) {
				this.uploading = false;
			}
		},
	},
};
</script>

<style lang="scss" scoped>
</style>