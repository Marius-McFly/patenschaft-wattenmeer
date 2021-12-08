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
		<div class="py-20 desktop:py-[104px]">
			<div class="custom-container py-20 desktop:px-20 desktop:py-[104px] bg-blue-default desktop:rounded-[100px] mobile:rounded-[40px] phablet:rounded-[80px] flex flex-col items-center">
				<h3 class="text-center text-white">
					{{ content.cardSection.title }}
				</h3>
				<div class="w-[104px] bg-white h-1 rounded mt-8 mb-20" />
				<AppCardCollection
					:items="content.cardSection.cardItems"
					is-icon-card
				/>
				<AppButton
					class="mt-20"
					border-button
				>
					{{ content.cardSection.buttonText }}
				</AppButton>
			</div>
		</div>
		<div class="custom-container pb-10 phablet:py-20 desktop:py-[104px]">
			<ImageText
				:title="content.imageText[0].title"
				:text="content.imageText[0].text"
				:image="content.imageText[0].imagePath"
				is-first-item
			/>
		</div>
		<TheFooter />
	</main>
</template>
<router>
{
    path: '/patenschaft',
}
</router>
<script>
export default {
	name: 'Sponsorship',

	data () {
		return {
			content: {
				pageHero: {
					title: 'Patenschaft',
					subtitle: 'Keine Lust auf frische Luft? Abneigung gegen nasse Füße? Der Terminkalender ist überfüllt und der ewige Wind an der Küste nervt auch? Wer die Wattenmeer-Nationalparks trotzdem unterstützen will, kann dies gern mit einer Patenschaft tun.',
					images: [
						'/svg/wattenmeer-bildmarke.svg',
						'/img/north-sea-355847_1920.jpg'
					],
					buttonText: 'Hier mitmachen →'
				},
				imageText: [
					{
						title: 'Aufgaben eines Paten',
						text: 'Ein Pate unterstützt und fördert bestehende Aktivitäten in der Naturschutzarbeit im Niedersächsischen Wattenmeer und in den angrenzenden Gebieten, aber auch verwandte Aktivitäten im Kultur- und Heimatbereich.',
						imagePath: '/img/Clean-up-Welchen-Meeresmuell-engagierte-Urlauber-am-Strand-finden_reference_4_3.jpg'
					}
				],
				cardSection: {
					title: 'Die Patenschaft fördert die Zielsetzungen von Nationalpark und Biosphärenreservat ideell und materiell durch Aktivitäten insbesondere zur…',
					buttonText: 'Hier mitmachen →',
					cardItems: [
						{
							icon: 'icon-awesome-envira.svg',
							text: 'Förderung des Umweltbewusstseins und der Umwelterziehung'
						},
						{
							icon: 'icon-awesome-hands-helping.svg',
							text: 'Förderung von Projekten zur nachhaltigen Entwicklung der Wattenmeerregion'

						},
						{
							icon: 'icon-awesome-hand-holding.svg',
							text: 'Hebung von Bedeutung und Ansehen des Nationalparks, des Biosphärenreservates und des Weltnaturerbes'

						},
						{
							icon: 'icon-awesome-globe-europe.svg',
							text: 'Nationalen und internationalen Zusammenarbeit'

						},
						{
							icon: 'icon-awesome-hands.svg',
							text: 'Erhaltung der natürlichen Lebensräume und Lebensgemeinschaften samt ihrer Pflanzen – und Tierwelt'

						}
					]
				}
			}
		}
	}
}
</script>
