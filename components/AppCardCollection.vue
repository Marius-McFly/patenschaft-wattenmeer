<template>
	<div
		:class="['grid grid-cols-1 desktop:grid-cols-2 w-full', {'gap-20 desktop:gap-24': isIconCard }, {'gap-20 desktop:gap-40': !isIconCard }]"
	>
		<AppCard
			v-for="item in items"
			:key="item.icon"
			:item="item"
			:is-icon-card="isIconCard"
		/>
	</div>
</template>

<script>
export default {
	props: {
		items: {
			type: Array,
			default: () => ([])
		},

		isIconCard: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style>

</style>
