import React from 'react'
import Search from "../Search";
import ShoppingCart from "../ShopingCart";
import Login from "../Login";
import Register from "../Register";
import MobileHeader from "./mobile_header";
import {Link} from "react-router-dom";

class Header extends React.Component {

  render() {
    return (
      <>


        <header>
          <div className="spt_header_top_bar">
            <div className="container">
              <div className="col-md-6 col-sm-7 spt_top_bar_left">
                <div className="spt_logo">
                  <Link to={"/"}>  <h1>Ankara Hub</h1> </Link>
                </div>
                <ul>
                  <li>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    <span>Phone: </span>
                    <a href="tel:8001234567">800-123-4567</a>
                  </li>
                  <li>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    <span>Contact:</span>
                    <a href="mailto:yourwebsite@gmail.com">yourwebsite@gmail.com</a>
                  </li>
                </ul>
              </div>

              <Search/>

            </div>
          </div>
          <div className="spt_header_nav_bar_2">
            <div className="container">
              <div className="col-md-3 col-sm-3">
                <div className="spt_logo">
                  <Link to={"/"}>
                    <h1 style={{fontSize: '25px'}}>Ankara Hub</h1>
                    <span>Beauty Beyond perfection</span>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <nav className="spt_navigation">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                      <i className="spt_navigation_submenu_open fa fa-caret-down" aria-hidden="true"/>
                      <ul className="spt_navigation_submenu">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="home2.html">Home 2</a></li>
                        <li><a href="home_left_sidebar.html">Home Left Sidebar</a></li>
                        <li><a href="home_right_sidebar.html">Home Right Sidebar</a></li>
                      </ul>
                    </li>
                    <li className="spt_active">
                      <a href="shop_3columns_left_sidebar.html">Shop</a>
                      <i className="spt_navigation_submenu_open fa fa-caret-down" aria-hidden="true"/>
                      <ul className="spt_navigation_submenu">
                        <li className="spt_active"><a href="shop_3columns_left_sidebar.html">Three Product Left
                          Sidebar</a></li>
                        <li><a href="shop_3columns_right_sidebar.html">Three Product Right Sidebar</a></li>
                        <li><a href="shop_4columns_left_sidebar.html">Four Product Left Sidebar</a></li>
                        <li><a href="shop_4columns_right_sidebar.html">Four Product Right Sidebar</a></li>
                        <li><a href="product_page.html">Single Product</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog_left_sidebar.html">Blog</a>
                      <i className="spt_navigation_submenu_open fa fa-caret-down" aria-hidden="true"/>
                      <ul className="spt_navigation_submenu">
                        <li><a href="blog_left_sidebar.html">Blog Left Sidebar</a></li>
                        <li><a href="blog_right_sidebar.html">Blog Right Sidebar</a></li>
                        <li><a href="blog_post_left_sidebar.html">Single Article Left Sidebar</a></li>
                        <li><a href="blog_post_right_sidebar.html">Single Article Right Sidebar</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="shopping_cart.html">Pages</a>
                      <i className="spt_navigation_submenu_open fa fa-caret-down" aria-hidden="true"/>
                      <ul className="spt_navigation_submenu">
                        <li><a href="shopping_cart.html">Shopping Cart</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="store_locator.html">Store Locator</a></li>
                        <li><a href="coming_soon.html">Coming Soon</a></li>
                        <li><a href="404.html">404 Error</a></li>
                      </ul>
                    </li>
                    <li><a href="contact.html">Contact Us</a></li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-3 col-sm-6">
                <ul className="spt_virtual_shop">
                  <li className="spt_virtual_shop_cart">
                    <i className="fa fa-shopping-bag" aria-hidden="true"/>
                    <span>2</span>
                  </li>
                  <li className="spt_virtual_shop_login">
                    <i className="fa fa-user" aria-hidden="true"/>
                    <span>Login</span>
                  </li>


                  <Login/>
                  <ShoppingCart/>

                </ul>
              </div>
            </div>
          </div>
        </header>



        <div id="spt_preloader" className="spt_active">
          <span />
        </div>

       <Register/>


       <MobileHeader/>

        {/*MOBILE Footer*/}
        <div id="spt_mobile_footer">
          <ul>
            <li className="spt_mobile_footer_phone">
              <a href="tel:8001234567">
                <i className="fa fa-phone" aria-hidden="true" />
              </a>
            </li>
            <li className="spt_mobile_footer_mail">
              <a href="mailto:yourwebsite@gmail.com">
                <i className="fa fa-envelope" aria-hidden="true" />
              </a>
            </li>
            <li className="spt_mobile_footer_nav">
              <button className="spt_mobile_button_open" type="button">
                <i className="fa fa-bars" aria-hidden="true" />
              </button>
              <div className="spt_mobile_content_open spt_navigation_mobile_content">
                <i className="spt_mobile_button_close fa fa-caret-down" aria-hidden="true" />
                <nav>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                      <i className="spt_mobile_button_submenu_open fa fa-long-arrow-down" aria-hidden="true" />
                      <div className="spt_mobile_content_open_submenu">
                        <ul>
                          <li><a href="home2.html">Home 2</a></li>
                          <li><a href="home_left_sidebar.html">Home Left Sidebar</a></li>
                          <li><a href="home_right_sidebar.html">Home Right Sidebar</a></li>
                        </ul>
                      </div>
                    </li>
                    <li className="spt_active">
                      <a href="shop_3columns_left_sidebar.html">Shop</a>
                      <i className="spt_mobile_button_submenu_open fa fa-long-arrow-down" aria-hidden="true" />
                      <div className="spt_mobile_content_open_submenu">
                        <ul>
                          <li><a href="shop_3columns_right_sidebar.html">Three Product Right Sidebar</a></li>
                          <li><a href="shop_4columns_left_sidebar.html">Four Product Left Sidebar</a></li>
                          <li><a href="shop_4columns_right_sidebar.html">Four Product Right Sidebar</a></li>
                          <li><a href="product_page.html">Single Product</a></li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="blog_left_sidebar.html">Blog</a>
                      <i className="spt_mobile_button_submenu_open fa fa-long-arrow-down" aria-hidden="true" />
                      <div className="spt_mobile_content_open_submenu">
                        <ul>
                          <li><a href="blog_right_sidebar.html">Blog Right Sidebar</a></li>
                          <li><a href="blog_post_left_sidebar.html">Single Article Left Sidebar</a></li>
                          <li><a href="blog_post_right_sidebar.html">Single Article Right Sidebar</a></li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="shopping_cart.html">Pages</a>
                      <i className="spt_mobile_button_submenu_open fa fa-long-arrow-down" aria-hidden="true" />
                      <div className="spt_mobile_content_open_submenu">
                        <ul>
                          <li><a href="checkout.html">Checkout</a></li>
                          <li><a href="about.html">About Us</a></li>
                          <li><a href="store_locator.html">Store Locator</a></li>
                          <li><a href="coming_soon.html">Coming Soon</a></li>
                          <li><a href="404.html">404 Error</a></li>
                        </ul>
                      </div>
                    </li>
                    <li><a href="contact.html">Contact Us</a></li>
                  </ul>
                </nav>
              </div>
            </li>
            <li className="spt_mobile_footer_cart">
              <button className="spt_mobile_button_open" type="button">
                <i className="fa fa-shopping-bag" aria-hidden="true" />
              </button>
              <div className="spt_mobile_content_open spt_mobile_footer_cart_content">
                <i className="spt_mobile_button_close fa fa-caret-down" aria-hidden="true" />
                <h4 className="spt_mobile_title">Shipping Cart</h4>
                <form>
                  <ul>
                    <li>
                      <div className="spt_virtual_shop_product_img">
                        <img src="img/product/cart_product2.jpg" alt="" />
                      </div>
                      <div className="spt_virtual_shop_product_details">
                        <p>Yellow Top</p>
                        <span>
                          Price: $125
                          <i className="spt_virtual_shop_product_remove fa fa-trash-o" aria-hidden="true" />
                        </span>
                        <span>Quantity: 1</span>
                      </div>
                    </li>
                    <li>
                      <div className="spt_virtual_shop_product_img">
                        <img src="img/product/cart_product1.jpg" alt="" />
                      </div>
                      <div className="spt_virtual_shop_product_details">
                        <p>Yellow Top</p>
                        <span>
                          Price: $125
                          <i className="spt_virtual_shop_product_remove fa fa-trash-o" aria-hidden="true" />
                        </span>
                        <span>Quantity: 1</span>
                      </div>
                    </li>
                    <li>
                      <div className="spt_virtual_shop_product_img">
                        <img src="img/product/cart_product2.jpg" alt="" />
                      </div>
                      <div className="spt_virtual_shop_product_details">
                        <p>Yellow Top</p>
                        <span>
                          Price: $125
                          <i className="spt_virtual_shop_product_remove fa fa-trash-o" aria-hidden="true" />
                        </span>
                        <span>Quantity: 1</span>
                      </div>
                    </li>
                    <li>
                      <div className="spt_virtual_shop_product_img">
                        <img src="img/product/cart_product1.jpg" alt="" />
                      </div>
                      <div className="spt_virtual_shop_product_details">
                        <p>Yellow Top</p>
                        <span>
                          Price: $125
                          <i className="spt_virtual_shop_product_remove fa fa-trash-o" aria-hidden="true" />
                        </span>
                        <span>Quantity: 1</span>
                      </div>
                    </li>
                    <li>
                      <div className="spt_virtual_shop_product_img">
                        <img src="img/product/cart_product2.jpg" alt="" />
                      </div>
                      <div className="spt_virtual_shop_product_details">
                        <p>Yellow Top</p>
                        <span>
                          Price: $125
                          <i className="spt_virtual_shop_product_remove fa fa-trash-o" aria-hidden="true" />
                        </span>
                        <span>Quantity: 1</span>
                      </div>
                    </li>
                  </ul>
                  <input defaultValue="Checkout" type="submit" />
                </form>
                <a href="shop_3columns_left_sidebar.html">Continue Shopping</a>
                <a href="shopping_cart.html">View Shopping Cart</a>
              </div>
            </li>
            <li className="spt_mobile_footer_user spt_mobile_subcontent">
              <button className="spt_mobile_button_open" type="button">
                <i className="fa fa-user" aria-hidden="true" />
              </button>
              <div className="spt_mobile_content_open spt_mobile_footer_user_content">
                <i className="spt_mobile_button_close fa fa-caret-down" aria-hidden="true" />
                <h4 className="spt_mobile_title">Login</h4>
                <form>
                  <input name="spt_virtual_shop_login_email" placeholder="Enter email address" type="email" required="required" />
                  <input name="spt_virtual_shop_login_password" placeholder="Enter password" type="password" required="required" />
                  <input defaultValue="Login" type="submit" />
                  <input id="spt_virtual_shop_login_keep_login_mobile" name="spt_virtual_shop_login_keep_login_mobile" type="checkbox" />
                  <label htmlFor="spt_virtual_shop_login_keep_login_mobile">Keep me logged in</label>
                </form>
                <a href="/forgot-password">Forgot Password</a>
                <button className="spt_mobile_button_open_subcontent" type="button">Not Yet Registered?</button>
              </div>
              <div className="spt_mobile_subcontent_open spt_mobile_footer_register_content">
                <i className="spt_mobile_button_close_subcontent fa fa-long-arrow-left" aria-hidden="true" />
                <a href="/facebook-login">Login with Facebook</a>
                <h3>Or</h3>
                <form>
                  <input type="email" name="spt_account_register_email" placeholder="Enter email address" required="required" />
                  <input type="password" name="spt_account_register_password" placeholder="Choose a password" required="required" />
                  <input type="submit" defaultValue="Sing Up Now" />
                </form>
              </div>
            </li>
          </ul>
        </div>
      </>
    )
  }
}

export default Header