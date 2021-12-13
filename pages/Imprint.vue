<template>
	<main class="bg-white">
		<TheTopbar />
		<div class="custom-container">
			<div class="h-full flex flex-col justify-center pt-32 desktop:pt-60">
				<h1 class="mb-8 desktop:mb-16">
					Impressum
				</h1>
				<h3 class="mb-6 desktop:mb-8 font-semibold">
					Herausgeber
				</h3>
				<div class="max-w-2xl mb-12">
					<div class="mb-6">
						<h4 class="mb-2">
							Küstenschutz, Nationalpark und Meeresschutz Schleswig-Holstein Nationalparkverwaltung
						</h4>
						<ul>
							<li>Gartenmuster 1</li>
							<li>25832 Muster</li>
							<li>Telefon: +49 0065 016-0</li>
							<li>E-Mail: schlesmuster@nationalpark-wattenmeer.de</li>
						</ul>
					</div>
					<div class="mb-6">
						<h4 class="mb-2">
							Umwelt, Klima, Energie und Agrarwirtschaft der Freien und Hansestadt Hamburg Nationalparkverwaltung Hamburgisches Wattenmeer
						</h4>
						<ul>
							<li>Muster Straße 19</li>
							<li>21109 Musterstadt</li>
							<li>Telefon: +49 00 00840-0045</li>
							<li>E-Mail: hammuster@nationalpark-wattenmeer.de</li>
						</ul>
					</div>
					<div>
						<h4 class="mb-2">
							Nationalparkverwaltung „Niedersächsisches Wattenmeer“
						</h4>
						<ul>
							<li>Virchowmusterstr. 0</li>
							<li>50050 Vorlagestadt</li>
							<li>Telefon: +49 0021 001-0</li>
							<li>E-Mail: niedmuster@nationalpark-wattenmeer.de</li>
						</ul>
					</div>
				</div>
				<h3 class="mb-6 desktop:mb-8 font-semibold">
					Inhaltlich Verantwortliche gemäß § 55 Abs 2 Rundfunkstaatsvertrag
				</h3>
				<div class="max-w-2xl mb-12">
					<div class="mb-6">
						<h4 class="mb-2">
							Niedersachsen und übergreifende Inhalte:
						</h4>
						<ul>
							<li>Heike Musterfrau</li>
							<li>Nationalparkverwaltung „Niedersächsisches Wattenmeer“</li>
							<li>Virchowmusterstr. 0</li>
							<li>50050 Vorlagestadt</li>
							<li>Telefon: +49 0021 001-0</li>
							<li>E-Mail: hmusterfrau@nationalpark-wattenmeer.de</li>
						</ul>
					</div>
					<div class="mb-6">
						<h4 class="mb-2">
							Hamburg:
						</h4>
						<ul>
							<li>Hans Blindtext</li>
							<li>Umwelt, Klima, Energie und Agrarwirtschaft der Freien und Hansestadt Hamburg Pressestelle</li>
							<li>Muster Straße 19</li>
							<li>21109 Musterstadt</li>
							<li>Telefon: +49 00 00840-0045</li>
							<li>E-Mail: hablindtext@nationalpark-wattenmeer.de</li>
						</ul>
					</div>
					<div>
						<h4 class="mb-2">
							Schleswig-Holstein:
						</h4>
						<ul>
							<li>Bernd Muster</li>
							<li>Gartenmuster 1</li>
							<li>25832 Muster</li>
							<li>Telefon: +49 0065 016-0</li>
							<li>E-Mail: bmuster@nationalpark-wattenmeer.de</li>
						</ul>
					</div>
				</div>
				<div class="mb-12">
					<h3 class="mb-6 desktop:mb-8 font-semibold">
						Gestaltung und technische Realisierung
					</h3>
					<p>Mediengestalter Übungsdatei</p>
				</div>
				<div class="max-w-2xl">
					<h3 class="mb-6 desktop:mb-8 font-semibold">
						Haftungshinweise
					</h3>
					<div class="mb-6">
						<h4 class="mb-2">
							Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
						</h4>
						<ul>
							<li>DE 113821932</li>
						</ul>
					</div>
					<div class="mb-6">
						<h4 class="mb-2">
							Verantwortlicher gem. § 55 Abs. 2 RStV:
						</h4>
						<ul>
							<li>Dr. Thomas Mustermann</li>
							<li class="mb-2">
								Geschäftsführer
							</li>
							<li>Der Inhalt und die Struktur dieser Website sind urheberrechtlich geschützt. Die Vervielfältigung von Informationen oder Daten, insbesondere die Verwendung von Texten, Textteilen oder Bildmaterial, bedarf der vorherigen Zustimmung des Nationalpark-Wattenmeer.</li>
						</ul>
					</div>
					<div class="mb-6">
						<h4 class="mb-2">
							Haftungshinweis:
						</h4>
						<ul>
							<li>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<TheFooter class="mobile:pt-36 desktop:pt-60" />
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
