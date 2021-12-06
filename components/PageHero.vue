<template>
	<div class="h-screen">
		<img
			v-if="fullHeroImage"
			:src="fullHeroImage"
			:class="['absolute object-cover h-full w-full desktop:max-w-[1920px] widescreen:max-w-[3840px] rounded-br-[100px] rounded-bl-[100px] shadow-2xl', {'transform scale-x-[-1]': isLanding}]"
			alt=""
		>
		<img
			v-if="!fullHeroImage"
			:src="images[0]"
			class="absolute mobile:top-1/2 mobile:object-[100px] phablet:object-[200px] phablet:top-1/2 tablet:top-1/4 desktop:top-64 desktop:left-auto z-30 opacity-40 desktop:object-[500px]"
			alt=""
		>
		<div
			v-if="!fullHeroImage"
			class="absolute w-52 h-[600px] right-32 desktop:w-96 bg-blue-100 desktop:h-[800px] rounded-br-[40px] rounded-bl-[40px] top-0 desktop:right-96"
		/>
		<div
			v-if="fullHeroImage"
			class="absolute opacity-50 bg-black-default h-full w-full desktop:max-w-[1920px] widescreen:max-w-[3840px] rounded-br-[100px] rounded-bl-[100px]"
		/>
		<div :class="['relative z-10 flex flex-col justify-center text-white h-full w-full', {'text-black-default': !fullHeroImage }]">
			<div :class="['custom-container pt-20 w-full', {'flex pb-0': !fullHeroImage}]">
				<div :class="{'flex-1 desktop:mr-20': !fullHeroImage}">
					<h1 class="mb-2 desktop:max-w-[800px]">
						{{ title }}
					</h1>
					<div
						v-if="fullHeroImage"
						class="w-[104px] bg-white h-1 rounded mb-4"
					/>
					<h2 class="mb-8 desktop:mb-12 desktop:max-w-[600px] widescreen:mb-16">
						{{ subtitle }}
					</h2>
					<div :class="{'mobile:block flex-1 desktop:hidden': !fullHeroImage}">
						<img
							v-if="!fullHeroImage"
							class="mobile:mb-12 phablet:mb-20 mobile:rounded-3xl desktop:rounded-[40px] object-cover shadow-2xl"
							:src="images[1]"
							alt=""
						>
					</div>
					<AppButton
						v-if="fullHeroImage"
						border-button
					>
						{{ buttonText }}
					</AppButton>
					<AppButton
						v-if="!fullHeroImage"
						primary-button
					>
						{{ buttonText }}
					</AppButton>
				</div>
				<div :class="{'mobile:hidden flex-1 desktop:block': !fullHeroImage}">
					<img
						v-if="!fullHeroImage"
						class="mobile:rounded-3xl desktop:rounded-[40px] object-cover shadow-2xl"
						:src="images[1]"
						alt=""
					>
				</div>
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

		fullHeroImage: {
			type: String,
			default: ''
		},

		images: {
			type: Array,
			default: () => ([])
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
