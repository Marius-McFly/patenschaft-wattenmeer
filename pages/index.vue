<template>
	<main class="overflow-hidden">
		<TheTopbar />
		<PageHero
			:title="content.pageHero.title"
			:subtitle="content.pageHero.subtitle"
			:full-hero-image="content.pageHero.imagePath"
			:button-text="content.pageHero.buttonText"
			is-landing
		/>
		<div class="custom-container py-20 desktop:py-[104px]">
			<ImageText
				:title="content.imageText[0].title"
				:text="content.imageText[0].text"
				:image="content.imageText[0].imagePath"
				class="mb-24 phablet:mb-30 tablet:mb-40"
				is-first-item
			/>
			<ImageText
				:title="content.imageText[1].title"
				:text="content.imageText[1].text"
				:image="content.imageText[1].imagePath"
				:button-text="content.imageText[1].buttonText"
			/>
		</div>
		<TheFooter />
	</main>
</template>
<router>
{
    path: '/',
}
</router>
<script>
export default {
	name: 'Landing',
	data () {
		return {
			content: {
				pageHero: {
					title: 'Werde Wattenmeer Nationalpark-Pate!',
					subtitle: 'Helfe mit das Wattenmeer zu erhalten und es vor einer Verschmutzung oder äußeren Einflüssen zu bewahren. Deine Patenschaft kann etwas bewegen',
					imagePath: '/img/wattwandern-bei-sonnenaufgang.jpg',
					buttonText: 'Hier mitmachen →'
				},
				imageText: [
					{
						title: 'Wattenmeer schützen',
						text: 'Der Schutz der Natur ist die Kernaufgabe der Wattenmeer-Nationalparks. Diese Aufgabe wird mit verschiedenen Instrumenten umgesetzt, von lokalen Maßnahmen über großräumige Projekte bis hin zur internationalen Zusammenarbeit. In Deutschland ist der Schutz des Wattenmeeres vor allem durch die Nationalparks an den Küsten Niedersachsens, Hamburgs und Schleswig-Holsteins sichergestellt.',
						imagePath: '/img/sevak-oJbF_4qfrjE-unsplash.jpg'
					},
					{
						title: 'UNESCO Weltnaturerbe',
						text: 'Mit der Anerkennung als UNESCO Weltnaturerbe sind Deutschland, Dänemark und die Niederlande auch gegenüber der Weltgemeinschaft verpflichtet, den außergewöhnlichen universellen Wert der Natur im Wattenmeer zu erhalten. Darüber hinaus gehört Naturschutz zu den Funktionen eines UNESCO-Biosphärenreservats. ',
						imagePath: '/img/christian-paul-stobbe-bJEasxPTOUw-unsplash.jpg',
						buttonText: 'Hier mitmachen →'
					}
				]
			}
		}
	}
}
</script>
