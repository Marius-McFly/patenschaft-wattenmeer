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
		<div class="custom-container pb-20 phablet:py-20 desktop:py-[104px]">
			<ImageText
				:title="content.imageText[0].title"
				:text="content.imageText[0].text"
				:image="content.imageText[0].imagePath"
				is-first-item
			/>
		</div>
		<div class="pb-20 desktop:pb-[104px]">
			<div class="custom-container py-20 desktop:px-20 desktop:py-[104px] bg-blue-default desktop:rounded-[100px] mobile:rounded-[40px] phablet:rounded-[80px] flex flex-col items-center">
				<h3 class="text-center text-white">
					{{ content.cardSection.title }}
				</h3>
				<div class="w-[104px] bg-white h-1 rounded mt-8 mb-20" />
				<AppCardCollection
					:items="content.cardSection.cardItems"
					is-default-icon-card
				/>
				<NuxtLink class="w-full flex justify-center" to="/mitmachen">
					<AppButton
						class="mt-20"
						border-button
					>
						{{ content.cardSection.buttonText }}
					</AppButton>
				</NuxtLink>
			</div>
		</div>
		<TheFooter />
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
						'/img/kelli-mcclintock-wBgAVAGjzFg-unsplash.jpg'
					],
					buttonText: 'Hier mitmachen →'
				},
				imageText: [
					{
						title: 'Hilfe für das Wattenmeer',
						text: 'Klimawandel ist bei uns angekommen – Meeresspiegelanstieg, höhere Wasser- und Lufttemperaturen, Veränderungen der Niederschlagsverhältnisse, Verschiebungen im Artengefüge der Ökosysteme – all das sind Klimawandelfolgen, die vor unserer Haustür sichtbar sind, besonders in den Küstenbereichen. An Schleswig-Holsteins Westküste liegt im Küstenstreifen zwischen dänischer Grenze im Norden und Elbmündung im Süden das Schleswig-Holsteinische Wattenmeer, Teil von einem der größten Nationalparke Europas und seit 2009 als UNESCO-Weltnaturerbe anerkannt. Es ist ein Lebensraum von globaler Bedeutung, der wie kaum ein anderer an wechselnde Wasserstände angepasst ist. Der Naturwert dieser amphibischen Landschaft strahlt zusammen mit der kulturellen Einzigartigkeit weit über die Region hinaus.',
						imagePath: '/img/sevak-oJbF_4qfrjE-unsplash.jpg'
					}
				],
				cardSection: {
					title: 'Die Patenschaft fördert die Zielsetzungen von Nationalpark und Biosphärenreservat ideell und materiell durch Aktivitäten insbesondere zur…',
					buttonText: 'Pate werden →',
					cardItems: [
						{
							icon: 'leaf-icon.svg',
							text: 'Förderung des Umweltbewusstseins und der Umwelterziehung'
						},
						{
							icon: 'hands-helping-icon.svg',
							text: 'Förderung von Projekten zur nachhaltigen Entwicklung der Wattenmeerregion'

						},
						{
							icon: 'hands-icon.svg',
							text: 'Hebung von Bedeutung und Ansehen des Nationalparks, des Biosphärenreservates und des Weltnaturerbes'

						},
						{
							icon: 'globe-icon.svg',
							text: 'Nationalen und internationalen Zusammenarbeit'

						},
						{
							icon: 'hand-holding-icon.svg',
							text: 'Erhaltung der natürlichen Lebensräume und Lebensgemeinschaften samt ihrer Pflanzen – und Tierwelt'

						}
					]
				}
			}
		}
	}
}
</script>
