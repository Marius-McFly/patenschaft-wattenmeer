<template>
	<button
		:class="['font-semibold text-white w-full tracking-wide uppercase px-8 py-3 text-center rounded-full cursor-pointer', {'border-2 border-solid border-white': borderButton}, {'bg-blue-default': primaryButton} ]"
	>
		<slot />
	</button>
</template>

<script>
export default {

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
