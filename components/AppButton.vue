<template>
	<button
		:class="['font-semibold text-white w-full tracking-wide uppercase px-8 py-3 text-center rounded-full cursor-pointer desktop:max-w-[355px] desktop:py-4 desktop:text-tiny', {'border-2 border-solid border-white': borderButton}, {'bg-blue-default': primaryButton} ]"
	>
		<NuxtLink to="/mitmachen">
			<slot />
		</NuxtLink>
	</button>
</template>

<script>
export default {

	name: 'AppButton',
	props: {
		borderButton: {
			type: Boolean,
			default: false
		},

		primaryButton: {
			type: Boolean,
			default: false
		}
	}

}
</script>

<style>

</style>
