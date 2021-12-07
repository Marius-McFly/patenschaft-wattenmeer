<template>
	<main>
		<TheTopbar />
		<PageHero
			:title="content.pageHero.title"
			:subtitle="content.pageHero.subtitle"
			:quote-author="content.pageHero.quoteAuthor"
			:full-hero-image="content.pageHero.imagePath"
			:button-text="content.pageHero.buttonText"
			is-landing
		/>
		<div class="custom-container py-20 desktop:py-[104px] text-left">
			<div class="mb-12 max-w-2xl phablet:mb-20 desktop:mb-[104px]">
				<h3 class="mb-4 phablet:mb-6">
					{{ content.cardSection.title }}
				</h3>
				<p>
					{{ content.cardSection.subtitle }}
				</p>
			</div>
			<AppCardCollection
				:items="content.cardSection.cardItems"
			/>
		</div>
		<TheFooter />
	</main>
</template>
<router>
{
    path: '/mitmachen',
}
</router>
<script>
export default {
	name: 'JoinIn',

	data () {
		return {
			content: {
				pageHero: {
					title: 'Mitmachen',
					subtitle: '„Wir sind die erste Generation, die die Armut beenden kann und die letzte Generation, die Maßnahmen ergreifen kann, um die schlimmsten Auswirkungen des Klimawandels zu vermeiden.“',
					quoteAuthor: 'Ban Ki-moon',
					imagePath: '/img/510489_neu.jpg',
					buttonText: 'Hier mitmachen →'
				},
				cardSection: {
					title: 'Nachhaltigkeitsziele',
					subtitle: 'Gestaltung eines guten Lebens für alle innerhalb der planetaren Grenzen gegeben. An diesen Zielen, die u.a. die Dimensionen Soziales, Umwelt, Kultur und Wirtschaft berücksichtigen, orientiert sich auch das Konzept der Lernwerkstatt. Schwerpunktmäßig richtet sich dieses auf sechs der 17 Nachhaltigkeitsziele aus:',
					buttonText: 'Hier mitmachen →',
					cardItems: [
						{
							icon: 'icon-awesome-envira.svg',
							number: '01',
							title: 'Qualität der Bildung',
							text: 'Inklusive, gleichberechtigte und hochwertige Bildung gewährleisten und Möglichkeiten lebenslangen Lernens für alle fördern.'
						},
						{
							icon: 'icon-awesome-hands-helping.svg',
							number: '02',
							title: 'Nachhaltige Städte und Gemeinden',
							text: 'Städte und Siedlungen inklusiv, sicher, widerstandsfähig und nachhaltig gestalten. Verantwortungsvoll'

						},
						{
							icon: 'icon-awesome-hand-holding.svg',
							number: '03',
							title: 'Konsumieren und Produzieren',
							text: 'Nachhaltige Konsum- und Produktionsmuster sicherstellen.'

						},
						{
							icon: 'icon-awesome-globe-europe.svg',
							number: '04',
							title: 'Handeln für den Klimaschutz',
							text: 'Umgehend Maßnahmen zur Bekämpfung des Klimawandels und seiner Auswirkungen ergreifen.'

						},
						{
							icon: 'icon-awesome-hands.svg',
							number: '05',
							title: 'Leben unter Wasser',
							text: 'Ozeane, Meere und Meeresressourcen im Sinne nachhaltiger Entwicklung erhalten und nachhaltig nutzen.'

						},
						{
							icon: 'icon-awesome-hands.svg',
							number: '06',
							title: 'Leben an Land',
							text: 'Landökosysteme schützen, wiederherstellen und ihre nachhaltige Nutzung fördern, Wälder nachhaltig bewirtschaften, Wüstenbildung bekämpfen, Bodendegradation beenden und umkehren und dem Verlust der biologischen Vielfalt ein Ende setzen.'

						}
					]
				}
			}
		}
	}
}
</script>
