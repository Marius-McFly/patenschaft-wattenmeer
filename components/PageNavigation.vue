<template>
	<ul class="grid desktop:grid-cols-[max-content,max-content,max-content,max-content,max-content,max-content,max-content,max-content] mobile:gap-4 desktop:gap-8">
		<li
			v-for="navigationItem in navigationItems"
			:key="navigationItem.name"
			class="text-base font-normal cursor-pointer text-center desktop:text-tiny flex items-center justify-center justify-self-center"
		>
			<NuxtLink
				class="inline-block after:block after:w-0 cursor-pointer after:h-[3px] after:bg-blue-default after:transition-[width] after:duration-500 hover:after:w-full"
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
