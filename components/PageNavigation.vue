<template>
	<ul class="flex flex-col items-center">
		<li
			v-for="navigationItem in navigationItems"
			:key="navigationItem.name"
			class="mb-4 last:mb-0 text-base font-normal cursor-pointer"
		>
			<NuxtLink
				class="inline-block after:block after:w-0 cursor-pointer after:h-[2px] after:bg-black-default after:transition-[width] after:duration-500 hover:after:w-full"
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
