import * as type from '../constants/ActionTypes'


const initialState = {
  data: [],
  singleProduct: {}
};



//REDUCER
export default function productReducer(state = initialState, action){

  switch(action.type) {

    case type.GET_PRODUCTS:
    {
      return {
        ...state,
        data: action.payload
      }
    }
    case type.GET_SINGLE_PRODUCTS:
    {
      return {
        ...state,
        singleProduct: action.payload[0]
      }
    }
    case type.CLEAR_SINGLE_PRODUCTS:
    {
      return {
        ...state,
        singleProduct: {}
      }
    }





    default: return state
  }
}