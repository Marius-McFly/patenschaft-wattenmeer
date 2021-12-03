<template>
	<div class="flex flex-col">
		<div class="order-2">
			<h3
				v-if="title"
				class="mb-4"
			>
				{{ title }}
			</h3>
			<p class="mb-8">
				{{ text }}
			</p>
			<AppButton
				v-if="buttonText"
				primary-button
			>
				{{ buttonText }}
			</AppButton>
		</div>
		<div class="relative order-1 mb-14">
			<img class="w-full relative z-[3] rounded-3xl" :src="image" alt="">
			<div class="bg-blue-100 z-[2] h-full absolute top-0 w-full transform rotate-[-5deg] rounded-3xl" />
			<div class="bg-beige-default h-full absolute z-[1] top-0 w-full transform rotate-[-10deg] rounded-3xl" />
		</div>
	</div>
</template>

<script>
export default {

	name: 'PageHero',
	props: {

		title: {
			type: String,
			default: ''
		},

		text: {
			type: String,
			required: true
		},

		image: {
			type: String,
			default: ''
		},

		buttonText: {
			type: String,
			default: ''
		}
	}
}
</script>

<style>

</style>
