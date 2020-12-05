const SET_APARTMENTS = 'SET_APARTMENTS'
const SET_APARTMENT_LIKE = 'SET_APARTMENT_LIKE'

let state = {
	apartments: []
}

let mutations = {
	[SET_APARTMENTS](state, value){
		state.apartments = [...state.apartments, ...value ]
	},
	[SET_APARTMENT_LIKE](state, placeId){
		let index = state.apartments.findIndex(item=>item.id === placeId)
		state.apartments[index].likes++
	}
}

let actions = {
	likeApartment({commit},place){
		commit(SET_APARTMENT_LIKE, place.id)
	},
	getApartments({commit}){
			return fetch('/entities.json')
				.then(data=>{
					return data.json()
				})
				.then(data=>{
					data.response.forEach(item=>item.likes=0)
					commit(SET_APARTMENTS,data.response)
				})
	}
}

export default {
	state,mutations,actions,namespaced:true
}