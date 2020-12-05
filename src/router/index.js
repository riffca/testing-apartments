import Vue from 'vue'
import VueRouter from 'vue-router'
//import ApartmentStore from '../views/ApartmentStore.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'ApartmentStore',
		//component: ApartmentStore
		component: () => import('../views/ApartmentStore.vue')
	},

]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
