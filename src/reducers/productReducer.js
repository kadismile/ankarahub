import * as type from '../constants/ActionTypes'


const initialState = {
  data: []
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

    default: return state
  }
}