<template>
	<main>
		<TheTopbar />
		<div class="h-screen">
			<PageHero
				:title="content.pageHero.title"
				:subtitle="content.pageHero.subtitle"
				:image="content.pageHero.imagePath"
				:button-text="content.pageHero.buttonText"
			/>
		</div>
		<div class="custom-container">
			<ImageText
				:title="content.imageText[0].title"
				:text="content.imageText[0].text"
				:image="content.imageText[0].imagePath"
				class="mb-12"
			/>
			<ImageText
				:text="content.imageText[1].text"
				:image="content.imageText[1].imagePath"
				:button-text="content.imageText[1].buttonText"
			/>
		</div>
	</main>
</template>
<router>
{
    path: '/',
}
</router>
<script>
export default {}
</script>
