<template>
	<div class="flex flex-col desktop:flex-row desktop:items-center">
		<div class="order-2 desktop:flex-1 desktop:flex desktop:items-center">
			<div>
				<h3
					v-if="title"
					class="mb-4 desktop:mb-8"
				>
					{{ title }}
				</h3>
				<p>
					{{ text }}
				</p>
				<AppButton
					v-if="buttonText"
					class="mt-8 desktop:mt-12"
					primary-button
				>
					{{ buttonText }}
				</AppButton>
			</div>
		</div>
		<div :class="['relative mb-16 phablet:mb-20 desktop:mb-0 desktop:flex-1 h-1/2', {'desktop:order-3 desktop:ml-32': isFirstItem}, {'order-1 desktop:mr-32': !isFirstItem}]">
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
		},

		isFirstItem: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style>

</style>
