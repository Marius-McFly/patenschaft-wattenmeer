<template>
	<form
		class="text-white w-full"
		@submit.prevent="handleSubmit()"
	>
		<div class="grid grid-cols-1 gap-4 desktop:grid-cols-2 desktop:gap-8">
			<AppTextInput
				v-for="textInputItem in content.textInputItems"
				:key="textInputItem.name"
				v-model="inputDataCollection[textInputItem.name]"
				:item="textInputItem"
			/>
		</div>
		<h4 class="font-semibold text-[20px] mt-10 mb-4 desktop:text-base desktop:mt-14 desktop:mb-6">
			Bitte sendet mir Infos:
		</h4>
		<div class="grid grid-cols-1 gap-4 desktop:gap-8 desktop:grid-cols-[max-content,max-content,max-content]">
			<AppMultipleSelect
				v-for="radioItem in content.radioItems"
				:key="radioItem.id"
				v-model="inputDataCollection.radioSelect.information"
				:item="radioItem"
			/>
		</div>
		<AppTextareaInput
			v-model="inputDataCollection.message"
			class="mt-10 mb-4 desktop:mt-14 desktop:mb-12"
			:item="content.textAreaItem"
		/>
		<div class="grid grid-cols-1 gap-4 desktop:grid-cols-2 desktop:gap-8">
			<AppButton
				class="desktop:max-w-full"
				border-button
			>
				Senden
			</AppButton>
			<AppButton
				border-button
				class="desktop:max-w-full"
				is-white
				@click="clearForm()"
			>
				Zurück
			</AppButton>
		</div>
		<transition
			name="swipe"
			mode="out-in"
		>
			<div
				v-if="popUpState"
				class="fixed z-[1000] bg-opacity-50 inset-0 h-screen w-full bg-black-default flex justify-center items-center"
			>
				<div class="h-[400px] w-full mx-6 desktop:w-[800px] bg-white mobile:rounded-[40px] flex flex-col justify-center items-center">
					<div class="text-green-default mb-4 desktop:mb-6" v-html="require(`~/static/svg/icon-awesome-check-circle.svg?raw`)" />
					<p class="text-tiny phablet:text-base desktop:text-lg font-black text-black-default w-full max-w-[600px] text-center">
						Vielen Dank für deine Anfrage {{ inputDataCollection.firstName[0] }}.<br> Wir melden uns umgehend.
					</p>
				</div>
			</div>
		</transition>
	</form>
</template>

<script>
export default {
	data () {
		return {
			popUpState: false,
			inputDataCollection: {
				firstName: [''],
				lastName: [''],
				street: [''],
				city: [''],
				phone: [''],
				email: [''],
				radioSelect: {
					information: []
				},
				message: ['']
			},
			content: {
				textInputItems: [
					{
						name: 'firstName',
						type: 'text',
						label: 'Vorname*'
					},
					{
						name: 'lastName',
						type: 'text',
						label: 'Name*'
					},
					{
						name: 'street',
						type: 'text',
						label: 'Straße*'
					},
					{
						name: 'city',
						type: 'text',
						label: 'PLZ/Wohnort*'

					},
					{
						name: 'phone',
						type: 'text',
						label: 'Telefon'
					},
					{
						name: 'email',
						type: 'text',
						label: 'E-Mail'
					}
				],
				radioItems: [
					{
						id: 'society1',
						name: 'societ1',
						type: 'checkbox',
						value: 'Förderverein Nationalpark'

					},
					{
						id: 'society2',
						name: 'societ2',
						type: 'checkbox',
						value: 'Mitmach-Projekte'

					},
					{
						id: 'society3',
						name: 'societ3',
						type: 'checkbox',
						value: 'Zu Nationalpark-Patenschaften'

					}
				],
				textAreaItem: {
					id: 'message',
					name: 'Deine Nachricht'
				}
			}
		}
	},

	methods: {
		onSubmit () {
			this.popUpState = true
			setTimeout(() => { this.popUpState = false }, 3000)
		},
		clearForm () {
			this.inputDataCollection.firstName = ['']
			this.inputDataCollection.lastName = ['']
			this.inputDataCollection.street = ['']
			this.inputDataCollection.city = ['']
			this.inputDataCollection.phone = ['']
			this.inputDataCollection.email = ['']
			this.inputDataCollection.radioSelect.information = ['']
			this.inputDataCollection.message = ['']
		},

		handleSubmit () {
			if (this.inputDataCollection.email[0]) {
				this.onSubmit()
			}
		}
	}

}
</script>

<style>
    .swipe {
        transition: all 500ms ease;
    }

	.swipe-enter-from {
		opacity: 0;
	}
	.swipe-enter-to {
		opacity: 1;
	}
	.swipe-enter-active {
		transition: all 1000ms ease;
	}

	.swipe-leave-from {
		opacity: 1;
	}
	.swipe-leave-to {
		opacity: 0;
	}
	.swipe-leave-active {
		transition: all 1000ms ease;
	}
</style>
