<template>
	<div class="apartment" v-if="apartment">

		<div class="apartment__logo" >
			<div class="apartment__title">{{apartment.attributes.title}}</div>
		</div>

		<div class="apartment__likes">
			<div class="apartment__show-likes">{{ apartment.likes }}</div>
			<div class="apartment__click" @click="$store.dispatch('apartments/likeApartment',apartment)">like</div>
		</div>

	</div>

</template>

<script>
export default {
	props: {
		apartment: Object
	},
	name: 'ApartmentPost',

	data () {
		return {

		}
	}
}
</script>

<style lang="scss">

.apartment {

	margin: 1vw;
	border: 1px solid black;
	margin-top: 3vw;
	flex: 1;
	padding: 2vw;

	&__click {

		cursor: pointer;
		padding: 2vw;
		&:hover {
			color: grey;
		}
	}

	&__show-likes {
		margin: 2vw;

	}


	&__logo {


	}

}

</style>