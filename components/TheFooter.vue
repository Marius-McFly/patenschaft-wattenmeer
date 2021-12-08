<template>
	<footer class="relative pt-20 text-left">
		<div
			class="text-blue-default absolute h-36 bottom-60 desktop:bottom-32 w-full z-10 opacity-30"
			v-html="require(`~/static/svg/shape.svg?raw`)"
		/>
		<div
			class="text-beige-default absolute h-36 bottom-10 desktop:bottom-12 w-full z-20"
			v-html="require(`~/static/svg/second-shape.svg?raw`)"
		/>
		<div class="bg-beige-default text-black-default text-tiny relative z-30">
			<div class="custom-container py-16 desktop:py-12 desktop:flex desktop:items-center relative z-10">
				<div class="flex flex-col mb-6 desktop:flex-row desktop:mb-0">
					<NuxtLink class="mb-1 inline-block w-max after:block after:w-0 cursor-pointer max-w-full after:h-[2px] after:bg-black-default after:transition-[width] after:duration-500 hover:after:w-full desktop:mr-4 desktop:mb-0" to="/kontakt">
						Kontakt
					</NuxtLink>
					<NuxtLink class="mb-1 inline-block w-max after:block after:w-0 cursor-pointer after:h-[2px] after:bg-black-default after:transition-[width] after:duration-500 hover:after:w-full desktop:mr-4 desktop:mb-0" to="/">
						Datenschutz
					</NuxtLink>
					<NuxtLink class="mb-1 inline-block w-max after:block after:w-0 cursor-pointer after:h-[2px] after:bg-black-default after:transition-[width] after:duration-500 hover:after:w-full desktop:mb-0" to="/">
						Impressum
					</NuxtLink>
				</div>
				<div class="flex items-center mb-6 desktop:mb-0 desktop:mx-auto">
					<a
						target="_blank"
						href="https://www.youtube.com/"
						class="hover:text-black-default transition duration-500"
					>
						<div class="mr-4 desktop:mr-8 w-9" v-html="require(`~/static/svg/icon-awesome-youtube.svg?raw`)" />
					</a>
					<a
						target="_blank"
						href="https://www.facebook.com/"
						class="hover:text-black-default transition duration-500"
					>
						<div class="mr-4 desktop:mr-8 w-9" v-html="require(`~/static/svg/icon-awesome-facebook.svg?raw`)" />
					</a>
					<a
						target="_blank"
						href="https://www.instagram.com/"
						class="hover:text-black-default transition duration-500"
					>
						<div class="w-8" v-html="require(`~/static/svg/icon-awesome-instagram.svg?raw`)" />
					</a>
				</div>
				<p class="text-xs desktop:max-w-[264px]">
					© Patenschaft Wattenmeer 2011-2020. Alle Rechte vorbehalten.
				</p>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'TheFooter'
}
</script>

<style>

</style>
