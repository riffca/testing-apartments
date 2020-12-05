<template>
	<div id="app">
		<div id="header">
			<h1>Apartment Store</h1>
		</div>
		<router-view/>
	</div>
</template>


<script>
	
export default {
	mounted(){
		this.$store.dispatch('apartments/getApartments')
	}
}
	
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}


</style>
