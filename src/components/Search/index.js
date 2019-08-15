import React from 'react'

class Search extends React.Component {


  render(){
    return (
      <div className="col-md-6 col-sm-5 spt_top_bar_right">
        <ul>
          <li>
            <form className="spt_search_form">
              <input type="text" placeholder="kindly Search any product  here.." required="required"/>
              <input id="spt_search" type="submit" defaultValue="Send"/>
              <label htmlFor="spt_search">
                <i className="fa fa-search" aria-hidden="true"/>
              </label>
            </form>
          </li>

        </ul>
      </div>
    )
  }
}

export default Search