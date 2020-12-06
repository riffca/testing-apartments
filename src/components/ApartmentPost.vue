<template>
	<div class="apartment" v-if="apartment">

		<div class="apartment__logo" >
			<div class="apartment__title">{{apartment.attributes.title}}</div>
		</div>

		<div class="apartment__likes">
			<div class="apartment__show-likes">{{ apartment.likes }}</div>
			<heartIcon @click="$store.dispatch('apartments/likeApartment',apartment)" class="apartment__heart-icon" />
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

.apartment {

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
	}


	&__show-likes {
		margin: 2vw;

	}


}

</style>