export const initialState = {
	basket: [],	
};

export const getTotal = (basket) => (
    basket?.reduce((amount, item) => item.subTotal + amount, 0));

export const getQty = (basket) => (
    basket?.reduce((amount, item) => item.qty + amount, 0));



const reducer = (state, action) => {

	switch (action.type) {
		case "ADD_TO_BASKET":
			return { 
				...state,
				basket: [...state.basket, action.item],
			};
		case "REMOVE_FROM_BASKET":

			let newBasket = [...state.basket];

			const index = state.basket.findIndex(
				(basketItem) => basketItem.unique === action.unique);


			if (index >= 0) {

				newBasket.splice(index, 1);


			} else {
				console.warn(
					"Cant remove product (id: ${action.id}) as it is not in bakset"
					);
			}

			return { ...state, basket: newBasket };

		case "INCREASE_VALUE":

			//*let newBasket2 = [...state.basket];

			//*const index2 = state.basket.findIndex(
				//*(basketItem) => basketItem.unique === action.unique);

			//*console.log(index2)

			//*newBasket2[index2].qty = (newBasket2[index2].qty + 1)

			//*return { ...state, basket: newBasket };

		case "DECREASE_VALUE":


			console.log("bye");

			return state;


		default:
			return state;

	}
}

export default reducer;