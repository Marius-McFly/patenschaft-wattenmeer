<template>
	<main class="bg-blue-100">
		<TheTopbar />
		<div class="h-screen w-full flex flex-col justify-end text-center">
			<div class="h-full flex flex-col justify-center pt-80 desktop:pt-60 px-6">
				<h1 class="mobile:text-base desktop:text-2xl mb-6">
					This is a school project :)
				</h1>
				<p class="text">
					I do not own any images, fonts or media files on this page. Be gentle, thanks.
				</p>
			</div>
			<TheFooter />
		</div>
	</main>
</template>

<router>
{
    path: '/impressum',
}
</router>

<script>
export default {
	name: 'Imprint'
}
</script>
