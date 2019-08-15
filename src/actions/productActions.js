import * as type from "../constants/ActionTypes";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

var WooCommerce = new WooCommerceRestApi({
  url: process.env.REACT_APP_WORDPRESS_URL,
  consumerKey: process.env.REACT_APP_WORDPRESS_CONSUMER_KEY,
  consumerSecret: process.env.REACT_APP_WORDPRESS_CONSUMER_SECRET,
  version: "wc/v3"
});

export const productActions = {
  queryProducts() {
    return dispatch => {
      WooCommerce.get('products', {
        per_page: 20
      })
        .then((response) => {
          dispatch({
            type: type.GET_PRODUCTS,
            payload: response.data
          });
        })
        .catch((error) => {
          console.log("Response Status:", error.response);
        })
    }
  },

  clearProduct() {
    return dispatch => {
      dispatch({
        type: type.CLEAR_SINGLE_PRODUCTS
      });
    }
  },

  querySingleProduct(slug) {
    return dispatch => {
      WooCommerce.get('products', {
        slug: slug
      })
        .then((response) => {
          dispatch({
            type: type.GET_SINGLE_PRODUCTS,
            payload: response.data
          });
        })
        .catch((error) => {
          console.log("Response Status:", error.response);
        })
    }
  }

};
