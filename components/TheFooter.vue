<template>
	<footer class="bg-blue-default text-white text-tiny">
		<div class="custom-container grid">
			<div class="flex flex-col mb-6">
				<NuxtLink class="mb-1 inline-block w-max after:block after:w-0 cursor-pointer max-w-full after:h-[2px] after:bg-white after:transition-[width] after:duration-500 hover:after:w-full" to="/kontakt">
					Kontakt
				</NuxtLink>
				<NuxtLink class="mb-1 inline-block w-max after:block after:w-0 cursor-pointer after:h-[2px] after:bg-white after:transition-[width] after:duration-500 hover:after:w-full" to="/">
					Datenschutz
				</NuxtLink>
				<NuxtLink class="mb-1 inline-block w-max after:block after:w-0 cursor-pointer after:h-[2px] after:bg-white after:transition-[width] after:duration-500 hover:after:w-full" to="/">
					Impressum
				</NuxtLink>
			</div>
			<div class="flex items-center mb-6">
				<a
					target="_blank"
					href="https://www.youtube.com/"
					class="hover:text-black-default transition duration-500"
				>
					<div class="mr-4" v-html="require(`~/static/svg/icon-awesome-youtube.svg?raw`)" />
				</a>
				<a
					target="_blank"
					href="https://www.facebook.com/"
					class="hover:text-black-default transition duration-500"
				>
					<div class="mr-4" v-html="require(`~/static/svg/icon-awesome-facebook.svg?raw`)" />
				</a>
				<a
					target="_blank"
					href="https://www.instagram.com/"
					class="hover:text-black-default transition duration-500"
				>
					<div v-html="require(`~/static/svg/icon-awesome-instagram.svg?raw`)" />
				</a>
			</div>
			<p class="text-xs">© Patenschaft Wattenmeer 2011-2020. Alle Rechte vorbehalten.</p>
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
