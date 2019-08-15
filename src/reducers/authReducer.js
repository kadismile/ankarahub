import * as type from '../constants/ActionTypes'


const initialState = {
  isAuthenticated: false,
  id:0,
  cookie:'',
  username:'',
  first_name:"",
  last_name:"",
  avatar_url:'',
  email:'',
  billing:{
    address_2: "",
    city: "",
    company: "",
    country:"",
    email:"",
    first_name:"",
    last_name:"",
    phone:"",
    postcode: "",
    state:""
  },
  total_spent:0.00,
  orders_count:0,
  shipping:{
    address_1: "",
    address_2: "",
    city: "",
    company: "",
    country:"",
    email:"",
    first_name:"",
    last_name:"",
    phone:"",
    postcode: "",
    state:""
  }
};




//REDUCER
export default function authReducer(state=initialState, action){

  switch(action.type) {

    case type.IS_AUTHENTICATED: {

      return {
        ...state,
        isAuthenticated: true,
        id: action.user.id,
        cookie: action.cookie.cookie,
        avatar_url: action.user.avatar_url,
        username:action.user.username,
        first_name: action.user.first_name,
        last_name: action.user.last_name,
        email:action.user.email,
        total_spent:action.user.total_spent,
        orders_count:action.user.orders_count,
        shipping:{
          address_1: action.user.shipping.address_1,
          address_2: action.user.shipping.address_2,
          city: action.user.shipping.city,
          company: action.user.shipping.company,
          country:action.user.shipping.country,
          email:action.user.shipping.email,
          first_name:action.user.shipping.first_name,
          last_name:action.user.shipping.last_name,
          phone:action.user.shipping.phone,
          postcode:action.user.shipping.postcode,
          state:action.user.shipping.state
        }
      }
    }

    case type.IS_LOGGED_OUT: {
      return {
        ...state,
        isAuthenticated: false,
        id:0,
        cookie:'',
        username:'',
        first_name:"",
        last_name:"",
        avatar_url:'',
        email:'',
        billing:{
          address_2: "",
          city: "",
          company: "",
          country:"",
          email:"",
          first_name:"",
          last_name:"",
          phone:"",
          postcode: "",
          state:""
        },
        total_spent:0.00,
        orders_count:0,
        shipping:{
          address_1: "",
          address_2: "",
          city: "",
          company: "",
          country:"",
          email:"",
          first_name:"",
          last_name:"",
          phone:"",
          postcode: "",
          state:""
        }
      }

    }

    default: return state
  }
}