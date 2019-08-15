import React from 'react'
import './category.css'
class Category extends React.Component {

  componentDidMount(){
    this.prepareCategory()
  }

  prepareCategory = ()=>{
    let categories = this.props.categories;
    for(let i = 0; i < categories.length; i++){
      if ( categories[i].name === 'Uncategorized') categories.splice(i, 1);
    }
    return categories
  };

  render(){
    const categories = this.prepareCategory();
    return (
      <div className="spt_main_header_2">
        <div className="container">
          <div className="col-md-3 col-sm-4 col-xs-12">
            <div className="spt_main_header_categories">
              <h4 className="category__h4">Categories</h4>
              <ul>
                {categories.map((category)=>{
                  return (<li key={category.id} className="category__li"><a href={category.name}>{category.name}</a>
                    <hr/>
                  </li> )
                })}
              </ul>
            </div>

          </div>
          <div className="col-md-9 col-sm-8 col-xs-12">
            <div className="spt_main_slider spt_home_3">
              <div id="spt_main_slider" className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div>
                      <h1>Dress the way you want to be</h1>
                      <h1>ADRESSED</h1>
                      <a href="shop_3columns_left_sidebar.html">Shop Now</a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div>
                      <h1>Dress the way you want to be</h1>
                      <h1>ADRESSED</h1>
                      <a href="shop_3columns_left_sidebar.html">Shop Now</a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div>
                      <h1>Dress the way you want to be</h1>
                      <h1>ADRESSED</h1>
                      <a href="shop_3columns_left_sidebar.html">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="spt_main_pagination" />
                <div className="spt_main_buttons">
                  <div className="spt_main_buttons_prev">
                    <i className="fa fa-angle-double-left" aria-hidden="true" />
                  </div>
                  <div className="spt_main_buttons_next">
                    <i className="fa fa-angle-double-right" aria-hidden="true" />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }

}
export default Category