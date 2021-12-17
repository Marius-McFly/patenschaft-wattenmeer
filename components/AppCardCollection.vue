<template>
	<div
		:class="['grid grid-cols-1 desktop:grid-cols-2 w-full max-w-lg phablet:max-w-full', {'gap-20 desktop:gap-24': isDefaultIconCard }, {'gap-20 desktop:gap-40': !isDefaultIconCard }]"
	>
		<AppCard
			v-for="item in items"
			:key="item.icon"
			:item="item"
			:is-default-icon-card="isDefaultIconCard"
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

		isDefaultIconCard: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style>

</style>
