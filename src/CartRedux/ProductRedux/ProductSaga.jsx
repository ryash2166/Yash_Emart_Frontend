import { put, takeEvery } from "redux-saga/effects";
import { PRODUCT_LIST, PRODUCT_SET } from "../Redux/Constant";
import ProductData from './Data/Emart.json'

function * getProduct(){
    // let data = yield fetch (`http://localhost:3000/Plant/${id}`)
    let data = ProductData
    // data = yield data.json() //after added comment this lne also and added json file in productRedux folder
    yield put({type:PRODUCT_SET , data})
}

function * ProductSaga(){
    yield takeEvery(PRODUCT_LIST, getProduct)
}

export default ProductSaga