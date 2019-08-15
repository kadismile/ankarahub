import * as type from '../constants/ActionTypes'

const initialState = {
 data: []
};

//REDUCER
export default function categoryReducer(state=initialState, action){

  switch(action.type) {

    case type.GET_CATEGORIES: {

      return {
        ...state,
        data: action.payload
      }
    }
    default: return state
  }
}