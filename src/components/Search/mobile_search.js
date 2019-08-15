import React from 'react'

class MobileSearch extends React.Component {
  render(){
    return (
      <div className="spt_mobile_header_search_form">
        <i className="spt_mobile_header_search_form_open fa fa-search" aria-hidden="true" />
        <form>
          <i className="spt_mobile_header_search_form_close fa fa-caret-up" aria-hidden="true" />
          <input placeholder="Search here.." type="text" required="required" />
          <input id="spt_search_mobile" defaultValue="Send" type="submit" />
          <label htmlFor="spt_search_mobile">
            <i className="fa fa-search" aria-hidden="true" />
          </label>
        </form>
      </div>
    )
  }
}
export default MobileSearch