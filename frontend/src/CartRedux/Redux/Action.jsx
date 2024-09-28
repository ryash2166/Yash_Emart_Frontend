import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART, DECREASE_CART_COUNT, ADD_TO_WISHLIST, REMOVE_TO_WISHLIST, INCREASE_CART_COUNT } from "./Constant";

export const addToCart = (data) => {

    return{
        type :ADD_TO_CART,
        data
    }
}

export const EmptyCart = () =>{

    return{
        type:EMPTY_CART
    }
}

export const IncreaseCartCount = (data) => {
    return{
        type:INCREASE_CART_COUNT,
        data
    }
}

export const DecreaseCartCount = (data) => {
    return{
        type:DECREASE_CART_COUNT,
        data
    }
}

export const removeToCart = (data) =>{

    return{
        type:REMOVE_TO_CART,
        data
    }
}

export const addToWishList = (data) => {

    return{
        type :ADD_TO_WISHLIST,
        data
    }
}

export const removeToWishList = (data) =>{

    return{
        type:REMOVE_TO_WISHLIST,
        data
    }
}

