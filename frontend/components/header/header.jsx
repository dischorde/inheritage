import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <div id="header">
          <h1><img src="http://res.cloudinary.com/dtwr3pge0/image/upload/c_scale,h_29/v1485834881/inheritage-logo_welajm.svg"/></h1>
          <i className="fa fa-question-circle" aria-hidden="true"></i>
        </div>
        <div id="separator"></div>
        {this.props.children}
      </div>
    );
  }
}

export default Header;
