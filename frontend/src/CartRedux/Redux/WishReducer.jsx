import { ADD_TO_WISHLIST , REMOVE_TO_WISHLIST } from "./Constant"

const getWishDataFromLocalStorage = () => {
    const wishData = localStorage.getItem('wish')
    return wishData ? JSON.parse(wishData) : []
}

const WishReducer = (state = getWishDataFromLocalStorage(), action) =>{
    switch(action.type){
        case ADD_TO_WISHLIST : 
            const existingProduct = state.findIndex(item => item.id === action.data.id)
            let updatedWishData;
            
            if(existingProduct >= 0 ) {
                updatedWishData = state.map((item) => item.id === action.data.id ? {...item, quantity:item.quantity += 1}: item)
            }else{
                updatedWishData = [{...action.data, quantity : 1}, ...state]
            }
            localStorage.setItem('wish' , JSON.stringify(updatedWishData))

            return updatedWishData
        
        case REMOVE_TO_WISHLIST : 
            const updatedWishRemove = state.filter(item => item.id !== action.data)
            localStorage.setItem('wish' , JSON.stringify(updatedWishRemove))
            return updatedWishRemove
            
        default : return state
    }
}

export default WishReducer