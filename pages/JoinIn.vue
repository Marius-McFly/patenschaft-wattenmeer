<template>
	<main>
		<TheTopbar />
		<PageHero
			:title="content.pageHero[0].title"
			:subtitle="content.pageHero[0].subtitle"
			:quote-author="content.pageHero[0].quoteAuthor"
			:full-hero-image="content.pageHero[0].imagePath"
			:button-text="content.pageHero[0].buttonText"
			is-landing
		/>
		<div class="custom-container flex items-center flex-col phablet:block py-20 desktop:py-[104px] text-left">
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
		<PageHero
			:title="content.pageHero[1].title"
			:subtitle="content.pageHero[1].subtitle"
			:quote-author="content.pageHero[1].quoteAuthor"
			:full-hero-image="content.pageHero[1].imagePath"
			:button-text="content.pageHero[1].buttonText"
			is-section
		/>
		<TheFooter class="pt-40 desktop:pt-60" />
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
				pageHero: [
					{
						title: 'Mitmachen',
						subtitle: '„Wir sind die erste Generation, die die Armut beenden kann und die letzte Generation, die Maßnahmen ergreifen kann, um die schlimmsten Auswirkungen des Klimawandels zu vermeiden.“',
						quoteAuthor: 'Ban Ki-moon',
						imagePath: '/img/510489_neu.jpg',
						buttonText: 'Hier mitmachen →'
					},
					{
						title: 'Werde aktiv und mache mit!',
						subtitle: 'Es gibt zahlreiche Möglichkeiten, in den Nationalparks mitzuarbeiten. Freiwillige Dienste, verschiedene Formen von Praktika - und manchmal gibt es auch eine freie Stelle in den Nationalparkverwaltungen.',
						imagePath: '/img/Wattenmeer_Nordsee.jpg',
						buttonText: 'Hier mitmachen →'
					}
				],
				cardSection: {
					title: 'Nachhaltigkeitsziele',
					subtitle: 'Gestaltung eines guten Lebens für alle innerhalb der planetaren Grenzen gegeben. An diesen Zielen, die u.a. die Dimensionen Soziales, Umwelt, Kultur und Wirtschaft berücksichtigen, orientiert sich auch das Konzept der Lernwerkstatt. Schwerpunktmäßig richtet sich dieses auf sechs der 17 Nachhaltigkeitsziele aus:',
					buttonText: 'Hier mitmachen →',
					cardItems: [
						{
							number: '01',
							title: 'Qualität der Bildung',
							text: 'Inklusive, gleichberechtigte und hochwertige Bildung gewährleisten und Möglichkeiten lebenslangen Lernens für alle fördern.'
						},
						{
							number: '02',
							title: 'Nachhaltige Städte und Gemeinden',
							text: 'Städte und Siedlungen inklusiv, sicher, widerstandsfähig und nachhaltig gestalten. Verantwortungsvoll'

						},
						{
							number: '03',
							title: 'Konsumieren und Produzieren',
							text: 'Nachhaltige Konsum- und Produktionsmuster sicherstellen.'

						},
						{
							number: '04',
							title: 'Handeln für den Klimaschutz',
							text: 'Umgehend Maßnahmen zur Bekämpfung des Klimawandels und seiner Auswirkungen ergreifen.'

						},
						{
							number: '05',
							title: 'Leben unter Wasser',
							text: 'Ozeane, Meere und Meeresressourcen im Sinne nachhaltiger Entwicklung erhalten und nachhaltig nutzen.'

						},
						{
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
