<template>
	<div class="absolute inset-0 h-screen flex justify-center items-center">
		<img
			:src="image"
			:class="['absolute object-cover h-full w-full desktop:max-w-[1920px] widescreen:max-w-[3840px] rounded-br-[100px] rounded-bl-[100px] shadow-2xl', {'transform scale-x-[-1]': isLanding}]"
			alt=""
		>
		<div class="absolute opacity-50 bg-black-default h-full w-full desktop:max-w-[1920px] widescreen:max-w-[3840px] rounded-br-[100px] rounded-bl-[100px]" />
		<div class="relative z-20 flex flex-col justify-center text-white h-full w-full">
			<div class="custom-container pt-40 w-full">
				<h1 class="mb-4 desktop:max-w-[800px]">
					{{ title }}
				</h1>
				<div class="w-[104px] bg-white h-1 rounded mb-4" />
				<h2 class="mb-10 desktop:mb-12 desktop:max-w-[600px] widescreen:mb-16">
					{{ subtitle }}
				</h2>
				<AppButton
					border-button
				>
					{{ buttonText }}
				</AppButton>
			</div>
		</div>
	</div>
</template>

<script>
export default {

	name: 'PageHero',
	props: {

		title: {
			type: String,
			required: true
		},

		subtitle: {
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

		isLanding: {
			type: Boolean,
			default: false
		}
	}

}
</script>

<style>

</style>
