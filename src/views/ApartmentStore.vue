<template>
	<div class="store">
		<div class="store__cards">
			<ApartmentPost v-for="item in apartments" :key="item.id" :apartment="item" />
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import ApartmentPost from '@/components/ApartmentPost.vue'
import { mapState } from 'vuex'
export default {
	computed: {
		...mapState('apartments',{
			'apartments':'apartments'
		})
	},
	components: {
		ApartmentPost
	}
}
</script>


<style lang="scss">
	

.store {
	&__cards {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
}


</style>
