import React from 'react'
import MobileSearch from "../Search/mobile_search";

class MobileHeader extends React.Component {

  render() {
    return (
      <div id="spt_mobile_header">
        <div className="spt_logo">
          <a href="index.html">
            <h1 className="h1Style">Ankara Hub </h1>
          </a>
        </div>

        <MobileSearch/>

      </div>
    )
  }
}

export default MobileHeader