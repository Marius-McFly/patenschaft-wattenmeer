<template>
	<main>
		<TheTopbar />
		<PageHero
			:title="content.pageHero.title"
			:subtitle="content.pageHero.subtitle"
			:images="content.pageHero.images"
			:button-text="content.pageHero.buttonText"
			is-landing
		/>
	</main>
</template>
<router>
{
    path: '/projekte',
}
</router>
<script>
export default {
	name: 'Projects',

	data () {
		return {
			content: {
				pageHero: {
					title: 'Projekte',
					subtitle: 'Helfe mit das Wattenmeer zu erhalten und es vor einer Verschmutzung oder äußeren Einflüssen zu bewahren. Deine Patenschaft kann etwas bewegen',
					images: [
						'/svg/wattenmeer-bildmarke.svg',
						'img/kelli-mcclintock-wBgAVAGjzFg-unsplash.jpg'
					],
					buttonText: 'Hier mitmachen →'
				},
				imageText: [
					{
						title: 'Wattenmeer schützen',
						text: 'Der Schutz der Natur ist die Kernaufgabe der Wattenmeer-Nationalparks. Diese Aufgabe wird mit verschiedenen Instrumenten umgesetzt, von lokalen Maßnahmen über großräumige Projekte bis hin zur internationalen Zusammenarbeit. In Deutschland ist der Schutz des Wattenmeeres vor allem durch die Nationalparks an den Küsten Niedersachsens, Hamburgs und Schleswig-Holsteins sichergestellt.',
						imagePath: '/img/sevak-oJbF_4qfrjE-unsplash.jpg'
					},
					{
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
