<template>
	<div class="py-4">
		<div
			class="w-28"
			v-html="require(`~/static/svg/wattenmeer-logo.svg?raw`)"
		/>
		<ul class="flex flex-col items-center">
			<li
				v-for="navigationItem in navigationItems"
				:key="navigationItem.name"
				class="mb-4 last:mb-0"
			>
				{{ navigationItem.name }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			navigationItems: [
				{
					name: 'Nationalpark'
				},

				{
					name: 'Projekte'
				},

				{
					name: 'Patenschaft'
				},

				{
					name: 'Mitmachen'
				},

				{
					name: 'Besuchen'
				},

				{
					name: 'Presse'
				},

				{
					name: 'Impressum'
				},

				{
					name: 'Kontakt'
				}
			]
		}
	}

}
</script>

<style>

</style>
