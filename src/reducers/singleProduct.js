import * as type from '../constants/ActionTypes'

const initialState = {
  data: {}
};

//REDUCER
export default function singleProductReducer(state = initialState, action){

  switch(action.type) {

    case type.GET_SINGLE_PRODUCTS:
    {
      return {
        ...state,
        data: action.payload[0]
      }
    }
    case type.CLEAR_SINGLE_PRODUCTS:
    {
      return {
        ...state,
        data: {}
      }
    }

    default: return state
  }
}