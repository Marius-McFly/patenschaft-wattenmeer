<template>
	<div
		class=""
	>
		<div class="flex items-center">
			<label :class="['order-2', {'font-bold': item.value === 'Förderverein Nationalpark'}]">
				{{ item.value }}
			</label>
			<input
				:id="item.id"
				v-model="inputData"
				:type="item.type"
				:name="item.name"
				:value="item.value"
				class="order-1 cursor-pointer mr-2 h-4 w-4 bg-white appearance-none z-10 checked:bg-green-default rounded transition ease-in-out duration-500"
			>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AppSingleSelect',

	props: {
		item: {
			type: Object,
			required: true
		},

		value: {
			type: Array,
			default: () => ([])
		}
	},

	computed: {
		inputData: {
			get () {
				return this.value
			},
			set (value) {
				this.$emit('input', value)
			}
		}
	}
}
</script>

<style>

</style>
