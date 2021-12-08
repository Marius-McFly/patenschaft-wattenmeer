<template>
	<button
		:class="['font-semibold w-full tracking-wide uppercase px-8 py-3 text-center rounded-full cursor-pointer desktop:max-w-[355px] desktop:py-4 desktop:text-tiny', {'border-2 border-solid border-white text-white': borderButton}, {'bg-blue-default text-white': primaryButton}, {'bg-wh bg-white text-blue-default': isWhite}]"
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
