import { combineReducers } from 'redux'
import auth  from './authReducer'
import category from './categoryReducer'
import product from './productReducer'
import cart from './cartReducer'

export default combineReducers({
  auth,
  category,
  product,
  cart
})




