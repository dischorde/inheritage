import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <div id="header">
          <h1>inheritage</h1>
          <i className="fa fa-question-circle" aria-hidden="true"></i>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Header;
