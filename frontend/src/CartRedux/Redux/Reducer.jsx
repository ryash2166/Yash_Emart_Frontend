import { ADD_TO_CART , REMOVE_TO_CART, INCREASE_CART_COUNT, DECREASE_CART_COUNT} from "./Constant"

const getCartDataFromLocalStorage = () => {
    const cartData = localStorage.getItem('cart')
    return cartData ? JSON.parse(cartData) : []
}

const Reducer = (state = getCartDataFromLocalStorage(), action ) =>{

    switch(action.type){
        case ADD_TO_CART : 
            const existingProduct = state.findIndex(item => item.id === action.data.id)
            let updatedCartData;
            
            if(existingProduct >= 0 ) {
                updatedCartData = state.map((item) => item.id === action.data.id ? {...item, quantity:item.quantity += 1}: item)
            }else{
                updatedCartData = [{...action.data, quantity : 1}, ...state]
            }
            // if (token) {
            //     await axios.post(url + "/api/cart/add")
            // }
            localStorage.setItem('cart' , JSON.stringify(updatedCartData))
            return updatedCartData

            case INCREASE_CART_COUNT :
            const updatedCartIncrement = state.map(item =>
                item.id === action.data ? { ...item , quantity: item.quantity + 1 } : item
            );
            localStorage.setItem('cart', JSON.stringify(updatedCartIncrement));
            return updatedCartIncrement;

        case DECREASE_CART_COUNT :
            const updatedCartDecrement = state.map(item =>
                item.id === action.data && item.quantity > 1 ? { ...item , quantity: item.quantity - 1 } : item
            );
            localStorage.setItem('cart', JSON.stringify(updatedCartDecrement));
            return updatedCartDecrement;
            
        case REMOVE_TO_CART : 
            const updatedCartRemove = state.filter(item => item.id !== action.data)
            localStorage.setItem('cart' , JSON.stringify(updatedCartRemove))
            return updatedCartRemove
            
        default : return state
    }
}

export default Reducer