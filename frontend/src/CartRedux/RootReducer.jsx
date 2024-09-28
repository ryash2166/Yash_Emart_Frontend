import {combineReducers} from 'redux'
import Reducer from './Redux/Reducer'
import WishReducer from './Redux/WishReducer'
import ProductReducer from './ProductRedux/ProductReducer'

const RootReducer = combineReducers({
    Reducer,
    WishReducer,
    ProductReducer
})

export default RootReducer