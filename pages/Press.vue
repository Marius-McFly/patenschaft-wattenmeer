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
				is-infographic
			/>
		</div>
		<TheFooter />
	</main>
</template>
<router>
{
    path: '/presse',
}
</router>
<script>
export default {
	name: 'Press',

	data () {
		return {
			content: {
				pageHero: {
					title: 'Presse',
					subtitle: 'Hier finden Sie interessante Presse-Artikel und dazugehörige Daten rund um das Wattenmeer.',
					images: [
						'/svg/wattenmeer-bildmarke.svg',
						'/img/urn-newsml-dpa-com-20090101-150927-99-01903-large-4-3.jpg'
					],
					buttonText: 'Hier mitmachen →'
				},
				imageText: [
					{
						title: 'Zukünftiger Meerespiegelanstieg',
						text: 'Vor dem Jahr 2012 verlor der antarktische Eispanzer kontinuierlich 76 Milliarden Tonnen Eis pro Jahr, das ist mehr als alles Wasser im Bodensee – und ließ damit den globalen Meeresspiegel jährlich um 0,2 Millimeter ansteigen. Zwischen 2012 und 2017 verlor der Kontinent 219 Milliarden Tonnen Eis, so dass sich der Beitrag zum Meeresspiegelanstieg auf 0,6 Millimeter pro Jahr verdreifachte. Damit trägt die Antarktis mit etwa einem Drittel zur gegenwärtigen Beschleunigung des Meeresspiegelanstiegs bei.',
						imagePath: '/img/hubert-neufeld-GG1CwF4qdlg-unsplash.jpg'
					},
					{
						title: 'Zahlen und Fakten',
						text: 'Die durch einen Meeresspiegelanstieg am stärksten gefährdeten europäischen Küstengebiete befinden sich im östlichen England, an den Nordseeküsten der Niederlande, Belgiens, Deutschlands und Dänemarks sowie in der Poebene Italiens. Aber auch die südlichen Ostseeküstengebiete sind an zahlreichen Stellen bedroht. Die folgende Infografik zeigt gefährdete Küsten bei einem Meeresspiegelanstieg von 1m bzw. 5m.',
						imagePath: '/img/meeresspiegel-infografik.png',
						buttonText: 'Pate werden →'
					}
				]
			}
		}
	}
}
</script>
