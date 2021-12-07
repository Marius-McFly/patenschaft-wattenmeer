<template>
	<footer class="bg-blue-default text-white text-tiny">
		<div class="custom-container py-20 desktop:py-14 desktop:flex desktop:items-center">
			<div class="flex flex-col mb-6 desktop:flex-row desktop:mb-0">
				<NuxtLink class="mb-1 inline-block w-max after:block after:w-0 cursor-pointer max-w-full after:h-[2px] after:bg-white after:transition-[width] after:duration-500 hover:after:w-full desktop:mr-4 desktop:mb-0" to="/kontakt">
					Kontakt
				</NuxtLink>
				<NuxtLink class="mb-1 inline-block w-max after:block after:w-0 cursor-pointer after:h-[2px] after:bg-white after:transition-[width] after:duration-500 hover:after:w-full desktop:mr-4 desktop:mb-0" to="/">
					Datenschutz
				</NuxtLink>
				<NuxtLink class="mb-1 inline-block w-max after:block after:w-0 cursor-pointer after:h-[2px] after:bg-white after:transition-[width] after:duration-500 hover:after:w-full desktop:mb-0" to="/">
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
	</footer>
</template>

<script>
export default {
	name: 'TheFooter'
}
</script>

<style>

</style>
