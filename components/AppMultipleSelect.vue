<template>
	<div
		class=""
	>
		<div class="flex items-center relative">
			<label class="order-2">
				{{ item.value }}
			</label>
			<input
				:id="item.id"
				v-model="inputData"
				:type="item.type"
				:name="item.name"
				:value="item.value"
				class="order-1 cursor-pointer mr-2 h-4 w-4 bg-white appearance-none z-10 rounded transition ease-in-out duration-500"
			>
			<div
				class="check text-black-default w-3 h-3 absolute z-10 left-[2px] top-[7px] opacity-0 pointer-events-none transition-all duration-500"
				v-html="require(`~/static/svg/check-icon.svg?raw`)"
			/>
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
    input:checked + .check {
        opacity: 100;
    }

</style>
