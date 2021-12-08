<template>
	<main>
		<TheTopbar />
		<PageHero
			:title="content.pageHero.title"
			:subtitle="content.pageHero.subtitle"
			:images="content.pageHero.images"
			:button-text="content.pageHero.buttonText"
			:contact-data="content.pageHero.contactData"
			is-landing
		/>
		<div class="py-20 desktop:py-[104px]">
			<div class="custom-container py-20 desktop:px-40 desktop:py-[104px] bg-blue-default desktop:rounded-[80px] mobile:rounded-[40px] phablet:rounded-[60px] flex flex-col items-start">
				<h3 class="text-white">
					{{ content.formSection.title }}
				</h3>
				<div class="w-[104px] bg-white h-1 rounded mt-8 mb-12 desktop:mb-14" />
				<ContactForm />
			</div>
		</div>
		<TheFooter />
	</main>
</template>

<router>
{
    path: '/kontakt',
}
</router>

<script>
export default {
	name: 'Contact',

	data () {
		return {
			content: {
				pageHero: {
					title: 'Kontakt',
					subtitle: 'Hier erhalten Sie Infos zu Angeboten und Mitmachaktionen im Wattenmeer, insbesondere zur Wattenmeer Patenschaft.',
					contactData: {
						first: 'Montag – Donnerstag: 09:00 – 15:00 Uhr',
						second: 'Freitag: 09:00 – 14:00 Uhr',
						phone: 'Tel.: +49 4000 9620-0'
					},
					images: [
						'/svg/wattenmeer-bildmarke.svg',
						'/img/erica-steeves-G_lwAp0TF38-unsplash.jpg'
					],
					buttonText: 'E-Mail schreiben →'
				},

				formSection: {
					title: 'Ihr möchtet euch informieren, ein bestimmtes Projekt aktiv unterstützen oder uns einfach eine Nachricht senden? Schickt uns eine E-Mail! Wir antworten umgehend.',
					subtitle: 'Hier erhalten Sie Infos zu Angeboten und Mitmachaktionen im Wattenmeer, insbesondere zur Wattenmeer Patenschaft.',
					contactData: {
						first: 'Montag – Donnerstag: 09:00 – 15:00 Uhr',
						second: 'Freitag: 09:00 – 14:00 Uhr',
						phone: 'Tel.: +49 4000 9620-0'
					},
					images: [
						'/svg/wattenmeer-bildmarke.svg',
						'/img/erica-steeves-G_lwAp0TF38-unsplash.jpg'
					],
					buttonText: 'E-Mail schreiben →'
				}
			}
		}
	}
}
</script>
