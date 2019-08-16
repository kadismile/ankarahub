import React from 'react'
import connect from "react-redux/es/connect/connect";
import Category from "../../components/Categories";
import { categoryActions } from "../../actions/categoryActions";
import Products from "../../components/Products";
import loadjs from "loadjs";
import {productActions} from "../../actions/productActions";

class Home extends React.Component {

  componentDidMount(){
    //this.props.onclearPoduct();
    loadjs(`${process.env.REACT_APP_PUBLIC_URL}/js/jquery.js`);
    loadjs(`${process.env.REACT_APP_PUBLIC_URL}/js/custom.js`);
    loadjs(`${process.env.REACT_APP_PUBLIC_URL}/js/swiper.js`);
    loadjs(`${process.env.REACT_APP_PUBLIC_URL}/js/timer.js`);
    this.props.getCategories();
  }

  render() {
    return (
      <>
       <Category
        categories={this.props.categories.data}
       />

        <div className="spt_main_product_filters">
          <div className="container">
            <div className="col-md-3 col-sm-3">
              <div className="spt_main_filters">
                <div className="spt_main_filter">
                  <h4>Make</h4>
                  <ul>
                    <li className="spt_active"><a href="javascript:void(0)">Abercombie &amp; Fitch</a></li>
                    <li><a href="javascript:void(0)">Diesel</a></li>
                    <li><a href="javascript:void(0)">Lee</a></li>
                    <li><a href="javascript:void(0)">Levis</a></li>
                    <li><a href="javascript:void(0)">Ralph Lauren</a></li>
                    <li><a href="javascript:void(0)">Lee</a></li>
                  </ul>
                </div>
                <div className="spt_main_filter">
                  <h4>Colors</h4>
                  <ul className="spt_main_filter_color">
                    <li>
                      <input id="spt_main_filter_color_4C4C4C" type="checkbox" defaultValue="#4C4C4C" />
                      <label htmlFor="spt_main_filter_color_4C4C4C" />
                    </li>
                    <li>
                      <input id="spt_main_filter_color_E0E0E0" type="checkbox" defaultValue="#E0E0E0" />
                      <label htmlFor="spt_main_filter_color_E0E0E0" />
                    </li>
                    <li>
                      <input id="spt_main_filter_color_000000" type="checkbox" defaultValue="#000000" />
                      <label htmlFor="spt_main_filter_color_000000" />
                    </li>
                    <li>
                      <input id="spt_main_filter_color_8AD6EA" type="checkbox" defaultValue="#8AD6EA" />
                      <label htmlFor="spt_main_filter_color_8AD6EA" />
                    </li>
                    <li>
                      <input id="spt_main_filter_color_8E86F3" type="checkbox" defaultValue="#8E86F3" />
                      <label htmlFor="spt_main_filter_color_8E86F3" />
                    </li>
                    <li>
                      <input id="spt_main_filter_color_7EB55D" type="checkbox" defaultValue="#7EB55D" />
                      <label htmlFor="spt_main_filter_color_7EB55D" />
                    </li>
                    <li>
                      <input id="spt_main_filter_color_EDC539" type="checkbox" defaultValue="#EDC539" />
                      <label htmlFor="spt_main_filter_color_EDC539" />
                    </li>
                    <li className="spt_active">
                      <input id="spt_main_filter_color_F16E93" type="checkbox" defaultValue="#F16E93" />
                      <label htmlFor="spt_main_filter_color_F16E93" />
                    </li>
                    <li>
                      <input id="spt_main_filter_color_46344B" type="checkbox" defaultValue="#46344B" />
                      <label htmlFor="spt_main_filter_color_46344B" />
                    </li>
                    <li>
                      <input id="spt_main_filter_color_1D61DE" type="checkbox" defaultValue="#1D61DE" />
                      <label htmlFor="spt_main_filter_color_1D61DE" />
                    </li>
                    <li>
                      <input id="spt_main_filter_color_AC542D" type="checkbox" defaultValue="#AC542D" />
                      <label htmlFor="spt_main_filter_color_AC542D" />
                    </li>
                    <li>
                      <input id="spt_main_filter_color_51A7AA" type="checkbox" defaultValue="#51A7AA" />
                      <label htmlFor="spt_main_filter_color_51A7AA" />
                    </li>
                    <li>
                      <input id="spt_main_filter_color_FF0012" type="checkbox" defaultValue="#FF0012" />
                      <label htmlFor="spt_main_filter_color_FF0012" />
                    </li>
                    <li>
                      <input id="spt_main_filter_color_A5B029" type="checkbox" defaultValue="#A5B029" />
                      <label htmlFor="spt_main_filter_color_A5B029" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Products/>


          </div>
        </div>



        <div className="spt_main_items">
          <div className="container">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <h1 className="spt_title">Items you may like</h1>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div id="spt_main_items" className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="spt_main_item">
                      <img src={`${process.env.REACT_APP_PUBLIC_URL}img/items/item1.jpg`} alt="" />
                      <div>
                        <a className="spt_main_item_buy" href="shopping_cart.html"><i className="fa fa-shopping-bag" aria-hidden="true" /></a>
                        <a href="product_page.html">Details</a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="spt_main_item">
                      <img src={`${process.env.REACT_APP_PUBLIC_URL}img/items/item2.jpg`} alt="" />
                      <div>
                        <a className="spt_main_item_buy" href="shopping_cart.html"><i className="fa fa-shopping-bag" aria-hidden="true" /></a>
                        <a href="product_page.html">Details</a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="spt_main_item">
                      <img src={`${process.env.REACT_APP_PUBLIC_URL}img/items/item3.jpg`} alt="" />
                      <div>
                        <a className="spt_main_item_buy" href="shopping_cart.html"><i className="fa fa-shopping-bag" aria-hidden="true" /></a>
                        <a href="product_page.html">Details</a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="spt_main_item">
                      <img src={`${process.env.REACT_APP_PUBLIC_URL}img/items/item4.jpg`} alt="" />
                      <div>
                        <a className="spt_main_item_buy" href="shopping_cart.html"><i className="fa fa-shopping-bag" aria-hidden="true" /></a>
                        <a href="product_page.html">Details</a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="spt_main_item">
                      <img src={`${process.env.REACT_APP_PUBLIC_URL}img/items/item5.jpg`} alt="" />
                      <div>
                        <a className="spt_main_item_buy" href="shopping_cart.html"><i className="fa fa-shopping-bag" aria-hidden="true" /></a>
                        <a href="product_page.html">Details</a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="spt_main_item">
                      <img src={`${process.env.REACT_APP_PUBLIC_URL}img/items/item6.jpg`} alt="" />
                      <div>
                        <a className="spt_main_item_buy" href="shopping_cart.html"><i className="fa fa-shopping-bag" aria-hidden="true" /></a>
                        <a href="product_page.html">Details</a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="spt_main_item">
                      <img src={`${process.env.REACT_APP_PUBLIC_URL}img/items/item1.jpg`} alt="" />
                      <div>
                        <a className="spt_main_item_buy" href="shopping_cart.html"><i className="fa fa-shopping-bag" aria-hidden="true" /></a>
                        <a href="product_page.html">Details</a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="spt_main_item">
                      <img src={`${process.env.REACT_APP_PUBLIC_URL}img/items/item2.jpg`} alt="" />
                      <div>
                        <a className="spt_main_item_buy" href="shopping_cart.html"><i className="fa fa-shopping-bag" aria-hidden="true" /></a>
                        <a href="product_page.html">Details</a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="spt_main_item">
                      <img src={`${process.env.REACT_APP_PUBLIC_URL}img/items/item3.jpg`} alt="" />
                      <div>
                        <a className="spt_main_item_buy" href="shopping_cart.html"><i className="fa fa-shopping-bag" aria-hidden="true" /></a>
                        <a href="product_page.html">Details</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* BEGIN ARROWS */}
                <div className="spt_main_buttons">
                  <div className="spt_main_buttons_prev">
                    <i className="fa fa-long-arrow-left" aria-hidden="true" />
                    <p>prev</p>
                  </div>
                  <div className="spt_main_buttons_next">
                    <p>next</p>
                    <i className="fa fa-long-arrow-right" aria-hidden="true" />
                  </div>
                </div>
                {/* END ARROWS */}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.category,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    getCategories() {
      dispatch(categoryActions.queryCategories());
    },
    onclearPoduct() {
      dispatch(productActions.clearProduct());
    },
  };
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Home);