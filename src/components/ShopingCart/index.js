import React from 'react'

class ShoppingCart extends React.Component {

  render(){
    return (
      <li id="spt_virtual_shop_cart">
        <h4>Shipping Cart</h4>
        <form>
          <ul>
            <li>
              <div className="spt_virtual_shop_product_img">
                <img src="img/product/cart_product1.jpg" alt=""/>
              </div>
              <div className="spt_virtual_shop_product_details">
                <p>Yellow Top</p>
                <span>
                            Price: $125
                            <i className="spt_virtual_shop_product_remove fa fa-trash-o" aria-hidden="true"/>
                          </span>
                <span>Quantity: 1</span>
              </div>
            </li>
            <li>
              <div className="spt_virtual_shop_product_img">
                <img src="img/product/cart_product2.jpg" alt=""/>
              </div>
              <div className="spt_virtual_shop_product_details">
                <p>Yellow Top</p>
                <span>
                            Price: $125
                            <i className="spt_virtual_shop_product_remove fa fa-trash-o" aria-hidden="true"/>
                          </span>
                <span>Quantity: 1</span>
              </div>
            </li>
          </ul>
          <input type="submit" defaultValue="Checkout"/>
        </form>
        <a href="shop_3columns_left_sidebar.html">Continue Shopping</a>
        <a href="shopping_cart.html">View Shopping Cart</a>
      </li>
    )
  }
}

export default ShoppingCart