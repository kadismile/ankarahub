import React from 'react'

class Footer extends React.Component {

  render(){
    return (
      <footer>
        <div id="spt_go_top">
          <i className="fa fa-long-arrow-up" aria-hidden="true" />
        </div>
        <div className="spt_footer_content">
          <div className="container">
            <div className="col-md-4 col-sm-6 col-xs-12">
              {/* BEGIN FOOTER LINKS */}
              <div className="spt_footer_links">
                <div className="col-md-6 col-sm-6 col-xs-6">
                  <h4>Quick links</h4>
                  <ul>
                    <li><a href="index.html">Home</a></li>
                    <li className="spt_active"><a href="shop_3columns_left_sidebar.html">Shop</a></li>
                    <li><a href="blog_left_sidebar.html">Blog</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact us</a></li>
                  </ul>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6">
                  <h4>Need Help?</h4>
                  <ul>
                    <li><a href="404.html">Faq</a></li>
                    <li><a href="404.html">Payments</a></li>
                    <li><a href="shopping_cart.html">Shipping</a></li>
                    <li><a href="checkout.html">Delivery</a></li>
                    <li><a href="404.html">Terms &amp; conditions</a></li>
                  </ul>
                </div>
              </div>

            </div>
            <div className="col-md-5 col-sm-6 col-xs-12">
              <div className="spt_footer_feed">
                <h4>Live news feeds</h4>
                <ul>
                  <li><a href="javascript:void(0)"><img src="img/feeds/feed1.jpg" alt="" /></a></li>
                  <li><a href="javascript:void(0)"><img src="img/feeds/feed2.jpg" alt="" /></a></li>
                  <li><a href="javascript:void(0)"><img src="img/feeds/feed3.jpg" alt="" /></a></li>
                  <li><a href="javascript:void(0)"><img src="img/feeds/feed4.jpg" alt="" /></a></li>
                  <li><a href="javascript:void(0)"><img src="img/feeds/feed5.jpg" alt="" /></a></li>
                  <li><a href="javascript:void(0)"><img src="img/feeds/feed6.jpg" alt="" /></a></li>
                  <li><a href="javascript:void(0)"><img src="img/feeds/feed7.jpg" alt="" /></a></li>
                  <li><a href="javascript:void(0)"><img src="img/feeds/feed8.jpg" alt="" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12">

              <div className="spt_footer_newsletter">
                <h4>Newsletter subscription</h4>
                <form>
                  <input type="text" placeholder="Enter your Best Email" required="required" />
                  <input type="submit" defaultValue="Subscribe now" />
                </form>
              </div>

            </div>
          </div>
        </div>

        <div className="spt_footer_bottom_bar">
          <div className="container">
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="spt_footer_allrights">
                <p>re-Designed by <a href="/kad">kadismile</a>. All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="spt_footer_social">
                <ul>
                  <li><a href="http://facebook.com/"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                  <li><a href="http://google.com/"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                  <li><a href="http://twitter.com/"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                  <li><a href="http://linkedin.com/"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                  <li><a href="http://pinterest.com/"><i className="fa fa-pinterest-p" aria-hidden="true" /></a></li>
                  <li><a href="http://behance.com/"><i className="fa fa-behance" aria-hidden="true" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="spt_footer_paycard">
                <ul>
                  <li><p>We Accept:</p></li>
                  <li><i className="fa fa-cc-visa" aria-hidden="true" /></li>
                  <li><i className="fa fa-cc-mastercard" aria-hidden="true" /></li>
                  <li><i className="fa fa-cc-discover" aria-hidden="true" /></li>
                  <li><i className="fa fa-cc-paypal" aria-hidden="true" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer