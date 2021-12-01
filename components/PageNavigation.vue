<template>
	<ul class="flex flex-col items-center">
		<li
			v-for="navigationItem in navigationItems"
			:key="navigationItem.name"
			class="mb-4 last:mb-0"
		>
			<NuxtLink
				class="inline-block after:block after:w-0 cursor-pointer after:h-[1px] after:bg-black after:transition-[width] after:duration-300 hover:after:w-full"
				:to="navigationItem.routePath"
			>
				{{ navigationItem.name }}
			</NuxtLink>
		</li>
	</ul>
</template>

<script>
export default {

	props: {
		navigationItems: {
			type: Array,
			required: true
		}
	}

}
</script>

<style>

</style>
