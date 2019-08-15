import * as type from "../constants/ActionTypes";
import WooCommerceAPI from 'woocommerce-api';

var WooCommerce = new WooCommerceAPI({
  url: process.env.REACT_APP_WORDPRESS_URL,
  consumerKey: process.env.REACT_APP_WORDPRESS_CONSUMER_KEY,
  consumerSecret: process.env.REACT_APP_WORDPRESS_CONSUMER_SECRET,
  wpAPI: true,
  version: 'wc/v2'
});

export const categoryActions = {
  queryCategories() {
    return async dispatch => {
    try {
      WooCommerce.get('products/categories', await function (err, data) {
        dispatch({
          type: type.GET_CATEGORIES,
          payload: JSON.parse(data.body)
        });
      });
    }catch(error){
      console.log({message: error})
    }
    }
  }

};
