import React from 'react'
import Image from 'react-shimmer'
import {connect} from 'react-redux'
import {productActions} from "../../actions/productActions";
import { Link } from "react-router-dom";

import './product.css'
class Products extends React.Component {

  state = { isLoading: true };
  componentDidMount(){
    this.props.getProducts();
    if(this.props.products.length){
      this.setState({isLoading: false})
    }
  }

  formatTotal = val => {
    return val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  getImage = (product) => {
    if(product.images.length){
      return product.images[0].src
    }
  };

  render(){
    let {products} = this.props;
    let {isLoading} = this.state;
    products = products.splice(10);
    return (
      isLoading ?
        <div className="spinner__div">
          <img  className="spinner" src={`${process.env.REACT_APP_PUBLIC_URL}/img/spinner5.gif`}  alt=""/>
        </div>
        :
      <div className="col-md-9 col-sm-9">

        <div className="spt_main_best spt_home_2 spt_home_3">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <h1 className="spt_title">New Arrivals</h1>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="spt_main_sorting">
                <div className="spt_main_sorting_columns">
                </div>
                <div className="spt_main_sorting_value">
                  <button className="spt_active" type="submit">View All</button>
                </div>
              </div>
            </div>
            <ul className="spt_main_best_products">
              {products.map((product)=>{
                return <li className="col-md-3 col-sm-3 col-xs-6 spt_visible" key={product.id}>
                  <div className="spt_main_best_product">
                    <form>
                          <span className="spt_main_best_product_onsell">
                            <span>₦ </span>
                            {(this.formatTotal(product.price))}
                          </span>
                      <div className="spt_main_best_product_image">
                        <Image
                          src={this.getImage(product)}
                          width={175} height={262}
                          delay={2005}
                          duration={3600}
                          style={{ objectFit: 'cover', width: '100%' }}
                        />
                      </div>
                      <div className="spt_main_best_product_details">
                        <ul>
                          <li> <Link to={{ pathname: "product/" +product.slug}}  className="productNav"> <i className="fa fa-shopping-bag" aria-hidden="true" /></Link>
                          </li>
                        </ul>
                      </div>
                    </form>
                    <div className="spt_main_best_product_title">
                      <p>
                        <span className="productCursor">
                         <Link to={"product/" +product.slug} className="productNav"> {product.slug}</Link>
                      </span>
                      </p>
                    </div>
                  </div>
                </li>
              })}

              <li className="spt_separator">
                <hr />
              </li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.product.data
  };
}

function matchDispatchToProps(dispatch) {
  return {
    getProducts() {
      dispatch(productActions.queryProducts());
    },
  };
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Products);
