<template>
	<div
		class="w-full"
	>
		<div class="flex flex-col">
			<label :class="['mb-2', {'font-bold': item.name === 'Förderverein Nationalparl'}]">
				{{ item.name }}
			</label>
			<textarea
				v-model="inputData"
				:type="item.type"
				:name="item.name"
				class="text-black-default p-2 h-40 text-xs pl-2 border-2 border-transparent rounded-lg transition duration-300 ease-in-out outline-none focus:border-green-default"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AppInput',

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
				return this.value[0]
			},
			set (value) {
				this.$emit('input', [value])
			}
		}
	}
}
</script>
