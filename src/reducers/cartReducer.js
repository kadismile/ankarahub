import * as type from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {},
  shoppingCartProducts: []
};

const addedIds = (state = initialState.addedIds, action) => {
  const {productId, index} = action;

  switch (action.type) {
    case type.ADD_TO_CART:
      if (state.indexOf(productId) !== -1) {
        return state
      }
      return [...state, productId];

    case type.REMOVE_FROM_CART:
      state.splice(index, 1);
      return [...state];

    case type.CLEAR_CART:
      while (state.length > 0) {
        state.pop();
      }
      return [...state];

    default:
      return state
  }
};


const cartProducts = (state = initialState.shoppingCartProducts, action) => {
  const {productId, product} = action;
  switch (action.type) {
    case type.ADD_TO_CART:
      if ((state.some((obj) => obj.id === product.id))) {
        return state
      }
      return [...state, product];

    case type.REMOVE_FROM_CART:
      state.splice(state.findIndex(function (i) {
        return i.id === productId;
      }), 1);
      //state.splice(index, 1);
      return [...state];

    case type.CLEAR_CART:
      while (state.length > 0) {
        state.pop();
      }
      return [...state];

    default:
      return state
  }
};


const quantityById = (state = initialState.quantityById, action) => {
  const {productId, value} = action;

  switch (action.type) {
    case type.ADD_TO_CART:
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1
      };

    case type.REMOVE_FROM_CART:
      delete state[productId];
      return {...state};

    case type.CHANGE_QTY:
      delete state[productId];
      return {
        ...state,
        [productId]: value
      };

    case type.CLEAR_CART:
      state = {};
      return {...state};

    default:
      return state
  }
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case type.CHECKOUT_REQUEST:
      return initialState;
    case type.CHECKOUT_FAILURE:
      return action.cart;
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
        shoppingCartProducts: cartProducts(state.shoppingCartProducts, action),
      }
  }
};

export default cart