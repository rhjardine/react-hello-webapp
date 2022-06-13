const API_URL = "https://www.swapi.tech/api"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starships: [],
			singleItem: {},
			favorites: []
		},
		actions: {
			getItems: async (resource) => {
				try {
					const response = await fetch(
					`${API_URL}/${resource}/?page=1&limit=82`
					);
					const body = await response.json();
					if(response.status !== 200) {
						alert("no pudimos cargar items");
						return;
					}
					setStore({
						[`${resource}`]: body.results,
					})
				} catch (error) {
					alert("servidor caido")
				}
			},
			getSingleItem: async (resource, uid) => {
				try {
					const response = await fetch(
						`${API_URL}/${resource}/${uid}`
					);
					const body = await response.json();
					if (response.status !== 200){
						alert("no pudimos cargar personajes");
						return;
					}
					setStore({
						singleItem: {
							...body.result.properties, 
							uid: body.result.uid,
							description: body.result.description,
						}				
					})
				} catch (error) {
					alert("promesa rechazada, servidor caido")
				}
			},
			removeSingleItem: async(resource) => {
				setStore({
					singleItem: ""
				})
			},
			addFavorites: (resource) => {
				setStore({
					favorites: resource
				})
			}
		}
	};
};

export default getState;





















// const getState = ({ getStore, getActions, setStore }) => {
// 	return {
// 		store: {
// 			demo: [
// 				{
// 					title: "FIRST",
// 					background: "white",
// 					initial: "white"
// 				},
// 				{
// 					title: "SECOND",
// 					background: "white",
// 					initial: "white"
// 				}
// 			]
// 		},
// 		actions: {
// 			// Use getActions to call a function within a fuction
// 			exampleFunction: () => {
// 				getActions().changeColor(0, "green");
// 			},
// 			loadSomeData: () => {
// 				/**
// 					fetch().then().then(data => setStore({ "foo": data.bar }))
// 				*/
// 			},
// 			changeColor: (index, color) => {
// 				//get the store
// 				const store = getStore();

// 				//we have to loop the entire demo array to look for the respective index
// 				//and change its color
// 				const demo = store.demo.map((elm, i) => {
// 					if (i === index) elm.background = color;
// 					return elm;
// 				});

// 				//reset the global store
// 				setStore({ demo: demo });
// 			}
// 		}
// 	};
// };

// export default getState;
