import { PRODUCT_LIST, PRODUCT_SET } from "../Redux/Constant";


const ProductReducer = (data = [] , action) => {
    switch(action.type){
        case PRODUCT_LIST:
            localStorage.setItem('productList' , JSON.stringify(action.data))
            return [...action.data]
        case PRODUCT_SET:
            localStorage.setItem('productList' , JSON.stringify(action.data))
            return [...action.data]
        default: return data
    }
}

export default ProductReducer