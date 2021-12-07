<template>
	<div :class="[{'pt-18 min-h-[750px] max-h-[1080px] h-full desktop:h-screen': !fullHeroImage}, {'h-screen': fullHeroImage} ]">
		<img
			v-if="fullHeroImage"
			:src="fullHeroImage"
			:class="['absolute object-cover h-full w-full desktop:max-w-[1920px] widescreen:max-w-[3840px] rounded-br-[100px] rounded-bl-[100px] shadow-2xl', {'transform scale-x-[-1]': isLanding}]"
			alt=""
		>
		<img
			v-if="!fullHeroImage"
			:src="images[0]"
			class="absolute top-1/3 object-[100px] mobile:top-2/4 phablet:top-1/4 tablet:block tablet:object-[200px] tablet:top-1/4 desktop:top-64 desktop:left-auto z-30 opacity-40 desktop:object-[500px]"
			alt=""
		>
		<div
			v-if="!fullHeroImage"
			class="absolute w-52 h-[600px] right-32 desktop:w-96 bg-blue-100 desktop:h-[800px] rounded-br-[40px] rounded-bl-[40px] top-0 desktop:right-96"
		/>
		<div
			v-if="fullHeroImage"
			class="absolute opacity-80 bg-gradient-to-r from-black-default h-full w-full desktop:max-w-[1920px] widescreen:max-w-[3840px] rounded-br-[100px] rounded-bl-[100px]"
		/>
		<div :class="['relative z-10 flex-col h-full w-full flex', {'text-black-default justify-start pt-32 desktop:pt-0 desktop:justify-center': !fullHeroImage }, {'justify-center text-white': fullHeroImage } ]">
			<div :class="['custom-container w-full', {'flex': !fullHeroImage}, {'pt-20 desktop:pt-[128px]': fullHeroImage}]">
				<div :class="{'flex-1 desktop:mr-20': !fullHeroImage}">
					<h1 class="mb-2 desktop:max-w-[800px] desktop:mb-4">
						{{ title }}
					</h1>
					<div
						v-if="fullHeroImage"
						:class="[{'w-[104px] bg-white h-1 rounded mb-4 desktop:mb-8': !fullHeroImage}, {'mt-4 mb-8 w-[104px] bg-white h-1 rounded' :fullHeroImage} ]"
					/>
					<h2 :class="['desktop:max-w-[600px]', {'mb-8 desktop:mb-12 widescreen:mb-16': !quoteAuthor }, {'phablet:text-base desktop:text-lg': quoteAuthor } ]">
						{{ subtitle }}
					</h2>
					<p
						v-if="quoteAuthor"
						:class="{'mb-8 mt-4 desktop:mb-12 widescreen:mb-16': quoteAuthor }"
					>
						{{ quoteAuthor }}
					</p>
					<div :class="{'mobile:block flex-1 desktop:hidden': !fullHeroImage}">
						<img
							v-if="!fullHeroImage"
							class="mb-12 rounded-3xl phablet:mb-20 desktop:rounded-[40px] object-cover shadow-2xl"
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
				<div :class="{'hidden flex-1 desktop:block': !fullHeroImage}">
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

		quoteAuthor: {
			type: String,
			default: ''
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
