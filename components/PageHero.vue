<template>
	<div class="absolute inset-0 h-screen object-cover flex justify-center items-center">
		<img
			:src="image"
			class="absolute object-cover h-full w-full desktop:max-w-[1920px] widescreen:max-w-[3840px]"
			alt=""
		>
		<div class="absolute opacity-50 bg-black-default h-full w-full desktop:max-w-[1920px] widescreen:max-w-[3840px]" />
		<div class="relative z-20 flex flex-col justify-center text-white h-full w-full">
			<div class="custom-container pt-40">
				<h1 class="mb-4">
					{{ title }}
				</h1>
				<div class="w-[104px] bg-white h-1 rounded mb-4" />
				<h2 class="mb-10 desktop:mb-12 widescreen:mb-16 desktop:max-w-[800px] mx-auto">
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
		}
	}

}
</script>

<style>

</style>
