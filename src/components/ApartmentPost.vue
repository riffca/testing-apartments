<template>
	<div class="apartment-card" v-if="apartment">

		<div class="apartment-card__logo" >
			<div class="apartment-card__title">{{apartment.attributes.title}}</div>
			<div class="apartment-card__space">{{apartment.attributes.area + " " + apartment.attributes.unit}}</div>
		</div>

		<div class="apartment-card__likes">
			<div class="apartment-card__show-likes">{{ apartment.likes }}</div>
			<heartIcon @click="$store.dispatch('apartments/likeApartment',apartment)" class="apartment-card__heart-icon" />
		</div>

	</div>

</template>

<script>
import heartIcon from './heart.svg'
export default {
	props: {
		apartment: Object
	},
	name: 'ApartmentPost',
	components: {
		heartIcon
	},
}
</script>

<style lang="scss">

.apartment-card {

	margin: 1vw;
	border: 1px solid black;
	margin-top: 3vw;
	flex: 1;
	padding: 2vw;

	&__heart-icon {
		max-width: 3vw;
		&:hover {
			fill: grey;
			cursor: pointer;
		}
		@media screen and (max-width: 400px) {
			max-width: 7vw;
				
		}

	}


	&__space {
		margin: 2vw;
		font-size: .8rem;
	}




	&__show-likes {
		font-size: 1.3rem;
		margin: 1vw;

	}


}

</style>