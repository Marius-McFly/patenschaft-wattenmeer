<template>
	<div class="flex flex-col desktop:flex-row desktop:items-center">
		<div class="desktop:order-2 desktop:flex-1 desktop:flex desktop:items-center">
			<div>
				<h3
					v-if="title"
					class="mb-4 desktop:mb-8"
				>
					{{ title }}
				</h3>
				<p class="mb-12 desktop:mb-8">
					{{ text }}
				</p>
				<NuxtLink to="/mitmachen">
					<AppButton
						v-if="buttonText"
						class="hidden desktop:block mt-8 desktop:mt-12"
						primary-button
					>
						{{ buttonText }}
					</AppButton>
				</NuxtLink>
			</div>
		</div>
		<div :class="['relative mb-8 desktop:mb-0 desktop:flex-1 h-1/2 group', {'desktop:order-3 desktop:ml-32': isFirstItem}, {'desktop:order-1 desktop:mr-32': !isFirstItem}]">
			<div :class="['rounded-3xl overflow-hidden shadow-inner', {'shadow-2xl py-10': isInfographic}]">
				<img v-img class="w-full relative z-[3] transition-all duration-500 group-hover:transform group-hover:scale-[1.2] overflow-hidden" :src="image" alt="">
			</div>
			<div v-if="!isInfographic" class="bg-blue-100 z-[2] transition-all duration-500 group-hover:transform group-hover:rotate-0 h-full absolute top-0 w-full transform rotate-[-5deg] rounded-3xl" />
			<div v-if="!isInfographic" class="bg-beige-default transition-all duration-500 group-hover:transform group-hover:rotate-0 h-full absolute z-[1] top-0 w-full transform rotate-[-10deg] rounded-3xl" />
			<div
				:class="['right-8 bottom-10 h-6 w-6 absolute z-40 text-white shadow-2xl pointer-events-none group-hover:animate-ping', {'text-black-default': isInfographic}, {'text-white': !isInfographic}]"
				v-html="require(`~/static/svg/zoom-out-icon.svg?raw`)"
			/>
		</div>
		<NuxtLink to="/mitmachen">
			<AppButton
				v-if="buttonText"
				class="block desktop:hidden mt-8 desktop:mt-12"
				primary-button
			>
				{{ buttonText }}
			</AppButton>
		</NuxtLink>
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
		},

		isInfographic: {
			type: Boolean,
			default: false
		}

	}
}
</script>

<style>

</style>
