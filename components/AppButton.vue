<template>
	<button
		:class="['font-semibold w-full transition-all duration-500 tracking-wide uppercase px-8 py-3 text-center rounded-full cursor-pointer desktop:max-w-[355px] desktop:py-4 desktop:text-tiny border-2 border-solid border-transparent', {'border-solid border-white text-white hover:text-blue-default hover:bg-white': borderButton}, {'bg-blue-default text-white hover:bg-white hover:border-blue-default hover:text-blue-default': primaryButton}, {'bg-wh bg-white text-blue-default hover:text-white hover:bg-transparent': isWhite}]"
		@click="onClick()"
	>
		<slot />
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

		isWhite: {
			type: Boolean,
			default: false
		},

		primaryButton: {
			type: Boolean,
			default: false
		}

	},

	methods: {
		onClick ($event) {
			this.$emit('click', $event)
		}
	}

}
</script>

<style>

</style>
