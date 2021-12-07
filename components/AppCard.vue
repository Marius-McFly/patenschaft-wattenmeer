<template>
	<div :class="['relative', {'text-center': isIconCard }, {'text-white text-left': !isIconCard }]">
		<div :class="['absolute transform rotate-[-8deg] h-full w-full rounded-[40px] opacity-40', { 'bg-blue-default': !isIconCard }, { 'bg-white': isIconCard }]" />
		<div :class="['relative w-full rounded-[40px]', { 'bg-blue-default pt-[100%]': !isIconCard }, { 'bg-blue-100 pt-[75%]': isIconCard }]" />
		<div :class="['absolute inset-0 flex z-20 flex-col', { 'items-start justify-start p-6 phablet:p-10 tablet:p-14 mobile:max-w-md': !isIconCard }, { 'items-center justify-center mobile:p-6 tablet:p-8 desktop:p-20': isIconCard }]">
			<div
				v-if="isIconCard"
				class="fill-current w-1/3 desktop:w-[104px] text-blue-default"
				v-html="require(`~/static/svg/${item.icon}?raw`)"
			/>
			<div v-if="!isIconCard">
				<p class="text-lg font-thin phablet:text-2xl tablet:text-3xl">
					{{ item.number }}
				</p>
				<h4 class="font-semibold text-[20px] leading-snug mb-2 phablet:mb-4 phablet:text-lg">
					{{ item.title }}
				</h4>
			</div>
			<p :class="[{ 'font-light text-xs phablet:text-tiny': !isIconCard }, { 'max-w-[320px] mt-4 phablet:mt-8 phablet:text-[20px] phablet:leading-snug': isIconCard } ]">
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

		isIconCard: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style>

</style>
