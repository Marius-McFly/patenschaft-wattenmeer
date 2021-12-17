<template>
	<div :class="['relative text-center', {'text-black-default': isDefaultIconCard}, {'text-white': !isDefaultIconCard}]">
		<div :class="['absolute transform rotate-[-8deg] h-full w-full rounded-[40px] opacity-40', { 'bg-blue-default': !isDefaultIconCard }, { 'bg-white': isDefaultIconCard }]" />
		<div :class="['relative w-full rounded-[40px]', { 'bg-blue-default pt-[100%]': !isDefaultIconCard }, { 'bg-blue-100 pt-[75%]': isDefaultIconCard }]" />
		<div :class="['absolute inset-0 flex z-20 flex-col items-center justify-center mx-auto', { 'p-6 phablet:p-10 tablet:p-14 mobile:max-w-md': !isDefaultIconCard }, { 'mobile:p-6 tablet:p-8 desktop:p-20': isDefaultIconCard }]">
			<div
				v-if="isDefaultIconCard"
				class="fill-current w-1/3 desktop:w-[104px] text-blue-default"
				v-html="require(`~/static/svg/${item.icon}?raw`)"
			/>
			<div v-if="!isDefaultIconCard">
				<div
					class="fill-current w-1/3 phablet:w-1/3 desktop:w-[104px] mx-auto text-white mb-6"
					v-html="require(`~/static/svg/${item.icon}?raw`)"
				/>
				<h4 class="font-semibold text-[20px] leading-snug mb-2 phablet:mb-4 phablet:text-lg">
					{{ item.title }}
				</h4>
			</div>
			<p :class="[{ 'font-light text-xs phablet:text-[16px] phablet:leading-normal': !isDefaultIconCard }, { 'max-w-[320px] mt-4 phablet:mt-8 phablet:text-[20px] phablet:leading-snug': isDefaultIconCard } ]">
				{{ item.text }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			required: true
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
