import React from 'react'
import striptags from 'striptags';
import {connect} from 'react-redux'
import {productActions} from "../../actions/productActions";
import loadjs from "loadjs";
import './product_details.css'
import $ from 'jquery'
class ProductDetails extends React.Component{

  state = { isLoading: true, quantity:0 };

  increase=()=>{
    let quantity = this.state.quantity +=1;
    this.setState({quantity: quantity});
  };
  decrease=()=>{
    let quantity = this.state.quantity -=1;
    this.setState({quantity: quantity});
    if(this.state.quantity < 0){
      this.setState({quantity: 0})
    }
  };

  componentDidMount(){
    $(document).ready(function(){
      $(this).scrollTop(0);
    });
    setTimeout(()=>{
      //this.props.onClearProduct();
      this.props.getSingleProduct(this.props.match.params.name);
      loadjs(`${process.env.REACT_APP_PUBLIC_URL}/js/jquery.js`);
      loadjs(`${process.env.REACT_APP_PUBLIC_URL}/js/custom.js`);
      loadjs(`${process.env.REACT_APP_PUBLIC_URL}/js/swiper.js`);
      loadjs(`${process.env.REACT_APP_PUBLIC_URL}/js/timer.js`);
      if(this.props.product){
        this.setState({isLoading: false})
      }
    },2000);

  }
  render(){
    const {product} = this.props;
    const {isLoading, quantity} = this.state;
    return (

      isLoading ?
        <>
          <div className="spinner__div">
            <img  className="spinner" src={`${process.env.REACT_APP_PUBLIC_URL}/img/spinner5.gif`}  alt=""/>
          </div>

        </>
         :
      <>
        <div className="spt_main_breadcrumbs">
          <div className="container">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <ul>
                <li>
                  <a href="index.html"><i className="fa fa-home" aria-hidden="true" /></a>
                </li>
                <li>
                  <a href="index.html">{product.name}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="spt_main_single_product">
          <div className="container">
            <div className="col-md-6 col-sm-6 col-xs-12">
              {
                product.images.length > 1 ?
                <div className="spt_main_single_product_carousel">
                  <div className="swiper-container spt_main_single_product_carousel_image">
                    <div className="swiper-wrapper">
                      {
                        product.images.map((m) => {
                          return (
                            <div className="swiper-slide">
                              <img src={m.src} alt=""/>
                            </div>
                          )
                        })
                      }

                    </div>
                  </div>
                  <div className="swiper-container spt_main_single_product_carousel_thumbs">
                    <div className="swiper-wrapper">

                      <div className="swiper-slide">
                        {
                          product.images.map((m) => {
                            return (
                              <div className="spt_main_single_product_carousel_thumb">
                                <img src={m.src} alt=""/>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>


                  </div>
                </div>
                  :

                  <div className="swiper-slide">
                    {
                      product.images.map((m) => {
                        return (
                          <div >
                            <img src={m.src} alt="" style={{width: '100%'}}/>
                          </div>
                        )
                      })
                    }
                  </div>
              }
              <div className="spt_main_single_product_aditional_info">
                <div className="spt_main_single_product_carousel_nav">
                  {
                    product.images.length > 1 ?
                    <>
                      <div className="spt_main_single_product_carousel_next">
                        <i className="fa fa-long-arrow-down" aria-hidden="true" />
                      </div>
                      <div className="spt_main_single_product_carousel_prev">
                      <i className="fa fa-long-arrow-up" aria-hidden="true" />
                      </div>
                    </> :
                      ''
                  }

                </div>

              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">

              <div className="spt_main_single_product_info">
                <div className="spt_main_single_product_title">
                  <h3>{product.name}</h3>
                </div>
                <div className="spt_main_single_product_top">
                  <div className="spt_main_single_product_price">
                    <h4>Price:</h4>
                    <h3>
                      <span>₦</span>
                      {product.price}
                    </h3>
                  </div>
                  <div className="spt_main_single_product_rating">
                    <p>Availability:</p>
                     <b>{product.stock_status}</b>
                  </div>
                </div>
                <div className="spt_main_single_product_description">
                  <h4>Item Description</h4>
                  {striptags(product.description)}
                </div>
                <div className="row">
                  <div className="spt_main_single_product_bottom">
                    <div className="col-md-4 col-sm-5 col-xs-12">
                      <div className="spt_main_single_product_quantity">
                        <p>Quantity</p>
                        <div>
                          <button className="spt_main_quantity_plus" onClick={this.decrease} data-action="spt_main_quantity">
                            <i className="fa fa-minus" aria-hidden="true" />
                          </button>

                          <input type="text" name="spt_main_quantity" value={this.state.quantity} />

                          <button className="spt_main_quantity_minus" onClick={this.increase} data-action="spt_main_quantity">
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-3 col-xs-12">
                      <div className="spt_main_single_product_add_cart">
                        <button type="submit">Add to cart</button>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12">
              <hr />
            </div>
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
                      <img src="img/items/item1.jpg" alt="" />
                      <div>
                        <a className="spt_main_item_buy" href="shopping_cart.html"><i className="fa fa-shopping-bag" aria-hidden="true" /></a>
                        <a href="product_page.html">Details</a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="spt_main_item">
                      <img src="img/items/item2.jpg" alt="" />
                      <div>
                        <a className="spt_main_item_buy" href="shopping_cart.html"><i className="fa fa-shopping-bag" aria-hidden="true" /></a>
                        <a href="product_page.html">Details</a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="spt_main_item">
                      <img src="img/items/item3.jpg" alt="" />
                      <div>
                        <a className="spt_main_item_buy" href="shopping_cart.html"><i className="fa fa-shopping-bag" aria-hidden="true" /></a>
                        <a href="product_page.html">Details</a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="spt_main_item">
                      <img src="img/items/item4.jpg" alt="" />
                      <div>
                        <a className="spt_main_item_buy" href="shopping_cart.html"><i className="fa fa-shopping-bag" aria-hidden="true" /></a>
                        <a href="product_page.html">Details</a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="spt_main_item">
                      <img src="img/items/item5.jpg" alt="" />
                      <div>
                        <a className="spt_main_item_buy" href="shopping_cart.html"><i className="fa fa-shopping-bag" aria-hidden="true" /></a>
                        <a href="product_page.html">Details</a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="spt_main_item">
                      <img src="img/items/item6.jpg" alt="" />
                      <div>
                        <a className="spt_main_item_buy" href="shopping_cart.html"><i className="fa fa-shopping-bag" aria-hidden="true" /></a>
                        <a href="product_page.html">Details</a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="spt_main_item">
                      <img src="img/items/item1.jpg" alt="" />
                      <div>
                        <a className="spt_main_item_buy" href="shopping_cart.html"><i className="fa fa-shopping-bag" aria-hidden="true" /></a>
                        <a href="product_page.html">Details</a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="spt_main_item">
                      <img src="img/items/item2.jpg" alt="" />
                      <div>
                        <a className="spt_main_item_buy" href="shopping_cart.html"><i className="fa fa-shopping-bag" aria-hidden="true" /></a>
                        <a href="product_page.html">Details</a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="spt_main_item">
                      <img src="img/items/item3.jpg" alt="" />
                      <div>
                        <a className="spt_main_item_buy" href="shopping_cart.html"><i className="fa fa-shopping-bag" aria-hidden="true" /></a>
                        <a href="product_page.html">Details</a>
                      </div>
                    </div>
                  </div>
                </div>
                 BEGIN ARROWS
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
    product: state.singleProduct.data
  };
}

function matchDispatchToProps(dispatch) {
  return {
    getSingleProduct(slug) {
      dispatch(productActions.querySingleProduct(slug));
    },
    onclearPoduct() {
      dispatch(productActions.clearProduct());
    },
    /*onClearProduct() {
      dispatch(productActions.clearProduct());
    },*/
  };
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(ProductDetails);
