<template>
	<nav
		class="fixed flex justify-center items-center z-[1000] w-full py-4 px-6 transition-all duration-500 ease-in-out bg-white shadow-2xl"
		:class="isOpen ? 'h-screen py-20' : 'h-20'"
	>
		<div>
			<NuxtLink to="/">
				<div
					class="w-[104px] z-10 fixed left-8 top-4"
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
				class="transition-all duration-[375ms] ease-in-out desktop:hidden"
				:class="isOpen ? 'opacity-100' : 'opacity-0 transform translate-y-[-480px]'"
				:navigation-items="navigationItems"
			/>
		</div>
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
