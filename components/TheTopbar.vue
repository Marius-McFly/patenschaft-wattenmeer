<template>
	<nav
		class="py-4 px-6 transition-all duration-500 ease-in-out bg-gray-300"
		:class="isOpen ? 'h-screen bg-opacity-90' : 'h-20 bg-opacity-50'"
	>
		<NuxtLink to="/">
			<div
				class="max-w-[104px] relative z-10"
				v-html="require(`~/static/svg/wattenmeer-logo.svg?raw`)"
			/>
		</NuxtLink>
		<div
			class="flex items-center w-full justify-end fixed right-8 top-8 desktop:hidden z-0"
		>
			<IconMenu
				class=""
				:class="isOpen ? 'active' : ''"
				@click="toggleNav"
			/>
		</div>
		<PageNavigation
			class="transition-all mt-12 duration-[375ms] ease-in-out desktop:hidden"
			:class="isOpen ? 'opacity-100 transform' : 'opacity-0 transform translate-y-[-480px]'"
			:navigation-items="navigationItems"
		/>
	</nav>
</template>

<script>
export default {
	data () {
		return {
			isOpen: false,
			navigationItems: [
				{
					name: 'Nationalpark',
					routePath: '/nationalpark'
				},

				{
					name: 'Projekte',
					routePath: '/projekte'
				},

				{
					name: 'Patenschaft',
					routePath: '/patenschaft'

				},

				{
					name: 'Mitmachen',
					routePath: '/mitmachen'
				},

				{
					name: 'Besuchen',
					routePath: '/besuchen'

				},

				{
					name: 'Presse',
					routePath: '/presse'
				},

				{
					name: 'Impressum',
					routePath: '/impressum'

				},

				{
					name: 'Kontakt',
					routePath: '/kontakt'
				}
			]
		}
	},

	mounted () {
		this.$nextTick(() => {
			document.body.classList.remove('overflow-hidden')
		})
	},

	methods: {
		toggleNav () {
			this.isOpen = !this.isOpen
			if (this.isOpen) {
				document.body.classList.add('overflow-hidden')
			} else {
				document.body.className = document.body.className.replace('overflow-hidden', '')
			}
		}

	}

}
</script>

<style>

</style>
